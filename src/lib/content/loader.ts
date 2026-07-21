import fs from "fs";
import path from "path";
import {
  SiteConfig,
  HeroContent,
  ProblemsContent,
  MethodContent,
  BenefitsContent,
  ResourcesContent,
  AudienceContent,
  MentorshipContent,
  OfferContent,
  WarrantyContent,
  ModuleItem,
  TestimonialItem,
  FaqItem,
  LegalPageContent,
} from "@/types";

const contentDirectory = path.join(process.cwd(), "src/content");

function readJsonFile<T>(filename: string): T {
  const filePath = path.join(contentDirectory, filename);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContent) as T;
}

export function getSiteConfig(): SiteConfig {
  return readJsonFile<SiteConfig>("site.json");
}

export function getHeroContent(): HeroContent {
  return readJsonFile<HeroContent>("hero.json");
}

export function getProblemsContent(): ProblemsContent {
  return readJsonFile<ProblemsContent>("problems.json");
}

export function getMethodContent(): MethodContent {
  return readJsonFile<MethodContent>("method.json");
}

export function getBenefitsContent(): BenefitsContent {
  return readJsonFile<BenefitsContent>("benefits.json");
}

export function getResourcesContent(): ResourcesContent {
  return readJsonFile<ResourcesContent>("resources.json");
}

export function getAudienceContent(): AudienceContent {
  return readJsonFile<AudienceContent>("audience.json");
}

export function getMentorshipContent(): MentorshipContent {
  return readJsonFile<MentorshipContent>("mentorship.json");
}

export function getOfferContent(): OfferContent {
  return readJsonFile<OfferContent>("offer.json");
}

export function getWarrantyContent(): WarrantyContent {
  return readJsonFile<WarrantyContent>("warranty.json");
}

export function getModules(): ModuleItem[] {
  const modulesDir = path.join(contentDirectory, "modules");
  if (!fs.existsSync(modulesDir)) return [];

  const files = fs.readdirSync(modulesDir);
  const modules: ModuleItem[] = [];

  for (const file of files) {
    if (file.endsWith(".json")) {
      const filePath = path.join(modulesDir, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      try {
        const item = JSON.parse(fileContent) as ModuleItem;
        if (item.published) {
          modules.push(item);
        }
      } catch (err) {
        console.error(`Error parsing module file ${file}:`, err);
      }
    }
  }

  return modules.sort((a, b) => a.order - b.order);
}

export function getTestimonials(): TestimonialItem[] {
  const testimonialsDir = path.join(contentDirectory, "testimonials");
  if (!fs.existsSync(testimonialsDir)) return [];

  const files = fs.readdirSync(testimonialsDir);
  const testimonials: TestimonialItem[] = [];

  for (const file of files) {
    if (file.endsWith(".json")) {
      const filePath = path.join(testimonialsDir, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      try {
        const item = JSON.parse(fileContent) as TestimonialItem;
        if (item.published) {
          testimonials.push(item);
        }
      } catch (err) {
        console.error(`Error parsing testimonial file ${file}:`, err);
      }
    }
  }

  return testimonials;
}

export function getFaqs(): FaqItem[] {
  const faqDir = path.join(contentDirectory, "faq");
  if (!fs.existsSync(faqDir)) return [];

  const files = fs.readdirSync(faqDir);
  const faqs: FaqItem[] = [];

  for (const file of files) {
    if (file.endsWith(".json")) {
      const filePath = path.join(faqDir, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      try {
        const item = JSON.parse(fileContent) as FaqItem;
        if (item.published) {
          faqs.push(item);
        }
      } catch (err) {
        console.error(`Error parsing FAQ file ${file}:`, err);
      }
    }
  }

  return faqs;
}

export function getLegalPage(filename: string): LegalPageContent {
  const filePath = path.join(contentDirectory, filename);
  if (!fs.existsSync(filePath)) {
    return { title: "Página no encontrada", content: "El contenido legal no ha sido creado." };
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  // Simple custom Frontmatter parser to avoid external libraries in the build process
  const match = fileContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);

  if (match) {
    const yamlText = match[1];
    const bodyText = match[2];
    const titleMatch = yamlText.match(/title:\s*(.*)/);
    const title = titleMatch ? titleMatch[1].replace(/['"]/g, "").trim() : "Página Legal";
    return {
      title,
      content: bodyText.trim(),
    };
  }

  return {
    title: "Página Legal",
    content: fileContent.trim(),
  };
}
