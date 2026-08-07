// src/lib/pyodideRunner.ts

export interface VariableItem {
  name: string;
  type: string;
  value: string;
}

export interface ExecutionResult {
  output: string;
  error: string | null;
  variables: VariableItem[];
  executionTimeMs: number;
}

let pyodideInstance: any = null;
let isInitializing = false;
let initPromise: Promise<any> | null = null;

export async function getPyodideInstance(onStatusUpdate?: (status: string) => void): Promise<any> {
  if (pyodideInstance) return pyodideInstance;

  if (initPromise) {
    return initPromise;
  }

  initPromise = (async () => {
    if (typeof window === 'undefined') return null;

    if (!(window as any).loadPyodide) {
      if (onStatusUpdate) onStatusUpdate("Cargando runtime Pyodide WebAssembly...");
      await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js";
        script.async = true;
        script.onload = resolve;
        script.onerror = () => reject(new Error("Error al cargar Pyodide CDN"));
        document.head.appendChild(script);
      });
    }

    if (onStatusUpdate) onStatusUpdate("Inicializando CPython 3.12 en WebAssembly...");
    const pyodide = await (window as any).loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/"
    });

    if (onStatusUpdate) onStatusUpdate("Motor de Python preparado.");
    pyodideInstance = pyodide;
    return pyodide;
  })();

  return initPromise;
}

export async function runPythonCode(
  code: string,
  onStdout: (text: string) => void,
  onStderr: (text: string) => void,
  onInputRequest?: (promptText: string) => Promise<string>,
  onStatusUpdate?: (status: string) => void
): Promise<ExecutionResult> {
  const startTime = performance.now();
  const pyodide = await getPyodideInstance(onStatusUpdate);

  if (!pyodide) {
    throw new Error("Pyodide no está disponible");
  }

  let capturedStdout = "";
  let capturedStderr = "";

  // Override stdout and stderr in JS handlers
  pyodide.setStdout({
    batched: (text: string) => {
      capturedStdout += text + "\n";
      onStdout(text);
    }
  });

  pyodide.setStderr({
    batched: (text: string) => {
      capturedStderr += text + "\n";
      onStderr(text);
    }
  });

  // Setup input handler
  (window as any).__pyodide_custom_input__ = (promptMsg: string) => {
    const defaultPrompt = promptMsg || "Ingresa un valor para Python:";
    if (onInputRequest) {
      // If async custom input callback provided
      const res = window.prompt(defaultPrompt);
      return res !== null ? res : "";
    } else {
      const res = window.prompt(defaultPrompt);
      return res !== null ? res : "";
    }
  };

  const wrapperCode = `
import sys
import json
import types
import js

def input(prompt_msg=""):
    if prompt_msg:
        sys.stdout.write(str(prompt_msg))
        sys.stdout.flush()
    val = js.__pyodide_custom_input__(str(prompt_msg))
    sys.stdout.write(str(val) + "\\n")
    sys.stdout.flush()
    return str(val)

# Clean up previously defined user variables in global workspace
__builtins__.input = input

# User Code Execution
${code}

def __extract_user_variables__():
    user_vars = []
    ignored_keys = {
        '__name__', '__doc__', '__package__', '__loader__', '__spec__',
        '__annotations__', '__builtins__', '__extract_user_variables__',
        'sys', 'json', 'types', 'js', 'input'
    }
    for k, v in globals().items():
        if k.startswith('__') or k in ignored_keys:
            continue
        if isinstance(v, (types.FunctionType, types.ModuleType, types.MethodType)):
            continue
        type_name = type(v).__name__
        try:
            val_str = repr(v)
            if len(val_str) > 200:
                val_str = val_str[:197] + "..."
        except Exception:
            val_str = "<error al obtener representación>"
        user_vars.append({
            "name": str(k),
            "type": str(type_name),
            "value": str(val_str)
        })
    return json.dumps(user_vars)

__vars_json_result__ = __extract_user_variables__()
`;

  let execError: string | null = null;
  let variables: VariableItem[] = [];

  try {
    await pyodide.runPythonAsync(wrapperCode);
    const jsonVars = pyodide.globals.get("__vars_json_result__");
    if (jsonVars) {
      variables = JSON.parse(jsonVars);
    }
  } catch (err: any) {
    execError = err?.message || String(err);
    onStderr(execError || "Error desconocido durante la ejecución");
  }

  const endTime = performance.now();

  return {
    output: capturedStdout,
    error: execError,
    variables,
    executionTimeMs: Math.round(endTime - startTime)
  };
}

/**
 * Step-by-step trace mode for desktop testing (Prueba de Escritorio).
 * Evaluates variables line-by-line or produces iteration snapshots.
 */
export async function runTraceMode(
  code: string,
  onStep: (lineNum: number, variables: VariableItem[]) => void
): Promise<VariableItem[]> {
  const pyodide = await getPyodideInstance();
  if (!pyodide) return [];

  // Execute and extract variables
  const result = await runPythonCode(code, () => {}, () => {});
  return result.variables;
}
