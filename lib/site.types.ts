export type SectionId = "hero" | "cuts" | "specialists" | "about" | "reviews" | "contact";

export type Theme = {
  fontHeading: string;
  fontBody: string;
  colors: { bg: string; fg: string; primary: string; accent: string };
};

export type Specialist = {
  name: string;
  role?: string;               // especialidad
  bookingUrl: string;          // Calendly/Cal.com o /booking?pro=...
  photo?: string;              // /images/team/nombre.jpg
};

export type CutItem = {
  name: string;
  price: string;               // "25.000 CLP"
  image?: string;              // opcional (foto)
  logo?: string;               // opcional (logo monocromo)
};

export type Review = {
  name: string;
  rating: 1|2|3|4|5;
  text: string;
};

export type SiteConfig = {
  brand: {
    facebook: string;
    name: string;
    logo: string;              // /images/logo.svg
    phone?: string;
    whatsapp?: string;         // "569..."
    instagram?: string;        // "mi-barber"
    address?: string;
    city?: string;
    gmail?: string;            // "
  };
  theme: Theme;
  nav: Array<{ label: string; href: `#${SectionId}` | string }>;
  sectionsOrder: SectionId[];
  content: {
    hero: { title: string; subtitle?: string; image?: string; ctaLabel?: string; ctaHref?: string };
    cuts: CutItem[];
    specialists: Specialist[];
    about: { title: string; text: string; image?: string };
    reviews: Review[];
    contact: { title: string; subtitle?: string; mapQuery?: string };
  };
};
