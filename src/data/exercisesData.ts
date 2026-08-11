// src/data/exercisesData.ts

export interface TestCase {
  inputArgs?: any[];
  expectedOutputSnippet?: string;
  expectedReturn?: any;
  testPythonSnippet: string;
  description: string;
}

export interface Exercise {
  id: string;
  phaseId: 'fase2' | 'fase3' | 'fase4';
  title: string;
  subtitle: string;
  description: string;
  instructions: string[];
  initialCode: string;
  solutionHint?: string;
  isBugFixing?: boolean;
  bugDescription?: string;
  testCases?: TestCase[];
}

export interface PhaseInfo {
  id: 'fase2' | 'fase3' | 'fase4';
  title: string;
  badge: string;
  subtitle: string;
  description: string;
}

export const PHASES: PhaseInfo[] = [
  {
    id: 'fase2',
    title: 'Fase 2: Variables y Estructuras de Control',
    badge: 'Fase 2',
    subtitle: 'Asignación, Constantes, Condicionales (if / elif / else) y Operadores Lógicos',
    description: 'Aprende y practica la declaración de variables de distinto tipo y el control del flujo del programa mediante decisiones lógicas.'
  },
  {
    id: 'fase3',
    title: 'Fase 3: Estructuras Repetitivas y Arreglos',
    badge: 'Fase 3',
    subtitle: 'Ciclos (for / while), Listas, Vectores y Visualización de Memoria',
    description: 'Domina los bucles de iteración y la manipulación de colecciones de datos observando cómo mutan los arreglos e índices en tiempo real.'
  },
  {
    id: 'fase4',
    title: 'Fase 4: Componente Práctico - Depuración y Funciones',
    badge: 'Fase 4',
    subtitle: 'Modo Bug Fixing: Corrección de Errores Sintácticos y Lógicos en Funciones (def)',
    description: 'Analiza código preprogramado con fallas, encuentra los errores, depura las funciones y valida tu solución con pruebas automáticas.'
  }
];

export const EXERCISES: Exercise[] = [
  // FASE 2
  {
    id: 'fase2-ex1',
    phaseId: 'fase2',
    title: '1. Cálculo de Promedio y Estado Académico UNAD',
    subtitle: 'Variables numéricas y condicionales simples',
    description: 'Programa para calcular el promedio final de tres calificaciones de un estudiante ECBTI y determinar si aprueba o reprueba el curso.',
    instructions: [
      'Asigna valores numéricos flotantes a las variables nota1, nota2 y nota3.',
      'Calcula el promedio acumulado: promedio = (nota1 + nota2 + nota3) / 3.',
      'Usa un condicional if promedio >= 3.0 para imprimir "APROBADO" u "REPROBADO".',
      'Observa la tabla de memoria para verificar los tipos de datos float.'
    ],
    initialCode: `# SIMUPY UNAD - FASE 2: EJERCICIO 1
# Algoritmo de Calificación y Estado Académico ECBTI

# 1. Definición de Variables y Datos del Estudiante
nombre_estudiante = "Carlos Alberto Mendoza"
codigo_curso = "301301" # Fundamentos de Programación
nota1 = 4.2
nota2 = 3.8
nota3 = 2.5

# 2. Cálculo del Promedio
promedio = (nota1 + nota2 + nota3) / 3.0

# 3. Impresión de Resultados en Consola
print("========================================")
print("  REPORTE ACADÉMICO UNAD - ECBTI")
print("========================================")
print(f"Estudiante: {nombre_estudiante}")
print(f"Curso: {codigo_curso}")
print(f"Promedio Final: {promedio:.2f}")

# 4. Estructura de Control Condicional
if promedio >= 3.0:
    print("Estado: ¡APROBADO EL CURSO! 🎉")
else:
    print("Estado: REPROBADO (Debe presentar habilitación) ⚠️")
print("========================================")
`
  },
  {
    id: 'fase2-ex2',
    phaseId: 'fase2',
    title: '2. Liquidación de Descuento en Matrícula UNAD',
    subtitle: 'Operadores lógicos (and / or) y condicionales anidados',
    description: 'Determina el porcentaje de descuento en el pago de la matrícula según certificado electoral y convenio institucional.',
    instructions: [
      'Establece la constante VALOR_CREDITO = 112000.',
      'Evalúa si el estudiante tiene certificado electoral (10% descuento).',
      'Evalúa si cuenta con convenio de descuento de la UNAD (15% adicional).',
      'Calcula el costo total y muestra el ahorro generado.'
    ],
    initialCode: `# SIMUPY UNAD - FASE 2: EJERCICIO 2
# Calculadora de Descuentos de Matrícula UNAD

VALOR_CREDITO = 112000 # Constante
creditos_matriculados = 16

tiene_certificado_electoral = True # True o False
tiene_convenio_unad = True          # True o False

costo_bruto = VALOR_CREDITO * creditos_matriculados
porcentaje_descuento = 0

# Estructura Condicional Compuesta
if tiene_certificado_electoral and tiene_convenio_unad:
    porcentaje_descuento = 25 # 10% electoral + 15% convenio
elif tiene_certificado_electoral or tiene_convenio_unad:
    if tiene_certificado_electoral:
        porcentaje_descuento = 10
    else:
        porcentaje_descuento = 15

descuento_dinero = costo_bruto * (porcentaje_descuento / 100)
costo_neto = costo_bruto - descuento_dinero

print(f"Costo Bruto ({creditos_matriculados} créditos): \${costo_bruto:,.0f}")
print(f"Porcentaje Total de Descuento: {porcentaje_descuento}%")
print(f"Ahorro Total: \${descuento_dinero:,.0f}")
print(f"Valor Neto a Pagar: \${costo_neto:,.0f}")
`
  },
  {
    id: 'fase2-ex3',
    phaseId: 'fase2',
    title: '3. Validación de 5 Notas (0.0 a 5.0), Promedio y Mayor/Menor',
    subtitle: 'Plantilla Oficial del Profesor: Validación de Rango y Estadística',
    description: 'Algoritmo para ingresar 5 calificaciones, validar que pertenezcan al rango entre 0.0 y 5.0, calcular promedio e identificar la nota mayor y menor.',
    instructions: [
      'Define una lista con 5 calificaciones numéricas.',
      'Valida que cada nota se encuentre estrictamente entre 0.0 y 5.0.',
      'Calcula el promedio acumulado de las notas válidas.',
      'Determina la calificación mayor (max) y la calificación menor (min).',
      'Imprime el informe detallado del estado del estudiante.'
    ],
    initialCode: `# SIMUPY UNAD - FASE 2: EJERCICIO 3
# Algoritmo de Validación de 5 Calificaciones (Rango 0.0 a 5.0)

# Lista de calificaciones a validar
calificaciones = [4.5, 3.8, 2.0, 5.0, 4.2]
notas_validas = []

print("========================================")
print("  VALIDACIÓN ACADÉMICA DE NOTAS - UNAD")
print("========================================")

# Estructura de Control y Validación de Rango [0.0 - 5.0]
for idx, nota in enumerate(calificaciones, 1):
    if 0.0 <= nota <= 5.0:
        notas_validas.append(nota)
        print(f"Nota {idx}: {nota:.1f} -> [VÁLIDA ✓]")
    else:
        print(f"Nota {idx}: {nota:.1f} -> [INVÁLIDA ⚠️ (Debe estar entre 0.0 y 5.0)]")

# Procesamiento de Estadísticas
if len(notas_validas) > 0:
    promedio = sum(notas_validas) / len(notas_validas)
    nota_mayor = max(notas_validas)
    nota_menor = min(notas_validas)

    print("----------------------------------------")
    print(f"Notas Procesadas: {len(notas_validas)} / {len(calificaciones)}")
    print(f"Promedio Final: {promedio:.2f}")
    print(f"Nota Mayor: {nota_mayor:.1f}")
    print(f"Nota Menor: {nota_menor:.1f}")

    if promedio >= 3.0:
        print("Estado Final: ¡APROBADO EL CURSO! 🎉")
    else:
        print("Estado Final: REPROBADO (Debe presentar habilitación) ⚠️")
print("========================================")
`
  },

  // FASE 3
  {
    id: 'fase3-ex1',
    phaseId: 'fase3',
    title: '1. Procesamiento de Notas con Ciclo for y Listas',
    subtitle: 'Iteración de arreglos y acumulación de datos',
    description: 'Analiza un vector de calificaciones de un grupo de estudiantes, identificando la nota más alta, más baja y el promedio del grupo.',
    instructions: [
      'Crea una lista calificaciones = [3.5, 4.8, 2.0, 4.2, 3.9, 1.5, 5.0].',
      'Utiliza un ciclo for nota in calificaciones para recorrer cada elemento.',
      'Observa en el Inspector de Memoria cómo cambia la variable `nota` e `indice` en cada paso.',
      'Imprime el análisis estadístico del grupo.'
    ],
    initialCode: `# SIMUPY UNAD - FASE 3: EJERCICIO 1
# Procesamiento Estadístico de Notas con Ciclo FOR

calificaciones = [3.5, 4.8, 2.0, 4.2, 3.9, 1.5, 5.0]

suma_total = 0.0
nota_maxima = calificaciones[0]
nota_minima = calificaciones[0]
aprobados = 0
reprobados = 0

print("Analizando calificaciones del grupo ECBTI...")

# Recorrido del Arreglo
for indice, nota in enumerate(calificaciones):
    suma_total += nota
    
    if nota > nota_maxima:
        nota_maxima = nota
    if nota < nota_minima:
        nota_minima = nota
        
    if nota >= 3.0:
        aprobados += 1
    else:
        reprobados += 1

promedio_grupo = suma_total / len(calificaciones)

print(f"Total Estudiantes: {len(calificaciones)}")
print(f"Promedio del Grupo: {promedio_grupo:.2f}")
print(f"Nota Más Alta: {nota_maxima}")
print(f"Nota Más Baja: {nota_minima}")
print(f"Estudiantes Aprobados: {aprobados}")
print(f"Estudiantes Reprobados: {reprobados}")
`
  },
  {
    id: 'fase3-ex2',
    phaseId: 'fase3',
    title: '2. Acumulador de Créditos con Ciclo WHILE',
    subtitle: 'Control de iteraciones con condición de parada',
    description: 'Simula la adición de cursos en la matrícula hasta alcanzar el límite permitido de créditos por periodo académico.',
    instructions: [
      'Define limite_creditos = 18 y acumulado = 0.',
      'Usa un ciclo while acumulado < limite_creditos para agregar materias.',
      'Observa el crecimiento del vector `cursos_inscritos` en el Inspector de Memoria.'
    ],
    initialCode: `# SIMUPY UNAD - FASE 3: EJERCICIO 2
# Simulación de Matrícula con Ciclo WHILE

limite_creditos = 18
creditos_actuales = 0
cursos_inscritos = []

oferta_cursos = [
    ("Fundamentos de Programación", 3),
    ("Álgebra, Trigonometría y Geometría", 3),
    ("Cátedra Unadista", 3),
    ("Pensamiento Lógico y Matemático", 3),
    ("Introducción a la Ingeniería de Sistemas", 3),
    ("Herramientas Digitales", 3)
]

i = 0
while i < len(oferta_cursos) and (creditos_actuales + oferta_cursos[i][1]) <= limite_creditos:
    nombre_curso, creditos = oferta_cursos[i]
    cursos_inscritos.append(nombre_curso)
    creditos_actuales += creditos
    i += 1

print("--- REGISTRO DE MATRÍCULA UNAD ---")
print(f"Créditos Inscritos: {creditos_actuales} / {limite_creditos}")
print("Cursos registrados:")
for idx, c in enumerate(cursos_inscritos, 1):
    print(f"  {idx}. {c}")
`
  },

  // FASE 4 (BUG FIXING)
  {
    id: 'fase4-ex1',
    phaseId: 'fase4',
    title: '1. Bug Fixing: Función de Liquidación de Nomina Tutores UNAD',
    subtitle: 'Depuración de sintaxis en `def` y corrección de fórmula lógica',
    description: 'El código adjunto contiene varios errores que impiden su ejecución o entregan cálculos erróneos. Corrige los bugs en la función `calcular_salario_neto`.',
    instructions: [
      'Analiza los errores reportados en la consola al ejecutar.',
      'Corrige la sintaxis de la declaración `def` (revisa los `:` faltantes).',
      'Corrige el nombre de la variable con error tipográfico `descueto_salud`.',
      'Asegúrate de que la función retorne el valor correcto del salario neto.',
      'Haz clic en "Verificar Solución" para validar automáticamente tu respuesta.'
    ],
    isBugFixing: true,
    bugDescription: 'La función `calcular_salario_neto` presenta 3 fallas:\n1. Error sintáctico en la declaración `def` (falta dos puntos `:`).\n2. Error de variable no definida (tipografía `descueto_salud` vs `descuento_salud`).\n3. Error de lógica: el `return` entrega solo la bonificación sin restar los descuentos obligatorios.',
    initialCode: `# SIMUPY UNAD - FASE 4: EJERCICIO 1 (DEPURACIÓN)
# TAREA: Corrige los errores en la función calcular_salario_neto

# ERROR 1: Sintaxis en def (Falta el signo : al final)
def calcular_salario_neto(salario_base, porcentaje_bono)
    # Descuentos obligatorios de ley (8% salud y pensión)
    descuento_salud_pension = salario_base * 0.08
    
    # Cálculo de bonificación
    bonificacion = salario_base * (porcentaje_bono / 100)
    
    # ERROR 2: Typo en la variable (descueto_salud en vez de descuento_salud_pension)
    salario_neto = salario_base + bonificacion - descueto_salud
    
    # ERROR 3: Retorna una variable incorrecta
    return bonificacion

# Prueba manual
resultado = calcular_salario_neto(2000000, 10)
print(f"Salario Neto Calculado: \${resultado}")
`,
    testCases: [
      {
        description: 'Evaluación con salario base de $1.000.000 y 10% bono. Debe retornar 1.020.000',
        testPythonSnippet: `
res = calcular_salario_neto(1000000, 10)
assert res == 1020000, f"Esperado 1020000 pero se obtuvo {res}"
`
      },
      {
        description: 'Evaluación con salario base de $2.000.000 y 5% bono. Debe retornar 1.940.000',
        testPythonSnippet: `
res = calcular_salario_neto(2000000, 5)
assert res == 1940000, f"Esperado 1940000 pero se obtuvo {res}"
`
      }
    ]
  },
  {
    id: 'fase4-ex2',
    phaseId: 'fase4',
    title: '2. Bug Fixing: Conversión de Temperaturas (Celsius a Fahrenheit)',
    subtitle: 'Depuración de indentación y operadores aritméticos',
    description: 'Corrige la función `celsius_a_fahrenheit` para que convierta correctamente grados Celsius a Fahrenheit usando la fórmula F = (C * 9/5) + 32.',
    instructions: [
      'Revisa la fórmula matemática en la función (usa + 32 en lugar de - 32).',
      'Asegúrate de que la sangría (indentación Python) esté bien alineada dentro del bloque `def`.',
      'Ejecuta "Verificar Solución" para comprobar con los tests automatizados.'
    ],
    isBugFixing: true,
    bugDescription: 'La función `celsius_a_fahrenheit` tiene una fórmula incorrecta (resta 32 en lugar de sumar 32) y un error de sangría en la instrucción return.',
    initialCode: `# SIMUPY UNAD - FASE 4: EJERCICIO 2 (DEPURACIÓN)
# TAREA: Corrige la fórmula matemática e indentación

def celsius_a_fahrenheit(celsius):
    # ERROR DE FÓRMULA: Debe sumar 32, no restar
    fahrenheit = (celsius * 9 / 5) - 32
    
# ERROR DE INDENTACIÓN: La instrucción return está fuera del bloque
return fahrenheit

# Prueba
temp_f = celsius_a_fahrenheit(0)
print(f"0°C equivale a: {temp_f}°F (Esperado: 32.0°F)")
`,
    testCases: [
      {
        description: 'Validar 0°C -> 32.0°F',
        testPythonSnippet: `
res = celsius_a_fahrenheit(0)
assert res == 32.0, f"Esperado 32.0 pero se obtuvo {res}"
`
      },
      {
        description: 'Validar 100°C -> 212.0°F',
        testPythonSnippet: `
res = celsius_a_fahrenheit(100)
assert res == 212.0, f"Esperado 212.0 pero se obtuvo {res}"
`
      }
    ]
  }
];
