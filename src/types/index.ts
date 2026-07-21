export interface GeneralConfig {
  logoText: string;
  logoImage?: string;
  whatsappNumber: string;
  whatsappMessage: string;
  contactEmail: string;
  legalText: string;
  socials: {
    instagram?: string;
    linkedin?: string;
    facebook?: string;
    youtube?: string;
  };
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  googleAnalyticsId?: string;
  metaPixelId?: string;
}

export interface SiteConfig {
  general: GeneralConfig;
  seo: SEOConfig;
}

export interface HeroContent {
  tagline: string;
  title: string;
  highlightedText: string;
  description: string;
  ctaPrimaryText: string;
  ctaPrimaryUrl: string;
  ctaSecondaryText: string;
  ctaSecondaryUrl: string;
  videoUrl?: string;
  imageUrl?: string;
  imageAlt?: string;
  showSection: boolean;
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface ProblemItem {
  id: string;
  title: string;
  description: string;
}

export interface ProblemsContent {
  sectionTitle: string;
  sectionSubtitle: string;
  showSection: boolean;
  items: ProblemItem[];
}

export interface MethodStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface MethodContent {
  sectionTitle: string;
  sectionSubtitle: string;
  showSection: boolean;
  steps: MethodStep[];
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface BenefitsContent {
  sectionTitle: string;
  sectionSubtitle: string;
  showSection: boolean;
  items: BenefitItem[];
}

export interface ResourceItem {
  id: string;
  name: string;
  description: string;
  downloadUrl?: string;
  iconName: string;
}

export interface ResourcesContent {
  sectionTitle: string;
  sectionSubtitle: string;
  showSection: boolean;
  items: ResourceItem[];
}

export interface AudienceContent {
  sectionTitle: string;
  showSection: boolean;
  forWhom: string[];
  notForWhom: string[];
}

export interface MentorshipContent {
  sectionTitle: string;
  description: string;
  showSection: boolean;
  bullets: string[];
  ctaText?: string;
  ctaUrl?: string;
}

export interface BonusItem {
  title: string;
  value: string;
  description: string;
}

export interface OfferContent {
  sectionTitle: string;
  showSection: boolean;
  priceOriginal: string;
  priceCurrent: string;
  currencySymbol: string;
  instalmentsText?: string;
  checkoutUrl: string;
  bonuses: BonusItem[];
}

export interface WarrantyContent {
  title: string;
  description: string;
  sealText?: string;
  daysCount: number;
  showSection: boolean;
}

export interface ModuleItem {
  id: string;
  order: number;
  title: string;
  description: string;
  lessons: string[];
  published: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  content: string;
  avatarUrl?: string;
  videoUrl?: string;
  metricLabel?: string;
  metricValue?: string;
  published: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  published: boolean;
}

export interface LegalPageContent {
  title: string;
  content: string; // Markdown text
}
