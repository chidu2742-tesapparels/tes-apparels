export interface LandingPageProps {
  title: string;
  description: string;
  primaryKeyword: string;
  heroImage?: string;

  highlights?: string[];

  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
}

export interface HeroProps {
  title: string;
  description: string;
  primaryKeyword: string;
  heroImage?: string;
  highlights?: string[];
}