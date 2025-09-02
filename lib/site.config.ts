import type { SiteConfig } from "./site.types";

const config: SiteConfig = {
  brand: {
    instagram: "modernbarber.vina",
    whatsapp: "56987654321",
    phone: "+56 9 8765 4321",
    gmail: "hola@modernbarber.cl", // ← nuevo
    facebook: "modernbarber.vina", // ← nuevo
    address: "5 Norte 345",
    city: "Viña del Mar",
    name: "",
    logo: ""
  },
  theme: {
    fontHeading: "var(--font-outfit)",
    fontBody: "var(--font-inter)",
    colors: { bg: "#0a0a0a", fg: "#f6f6f6", primary: "#ffffff", accent: "#9a9a9a" },
  },
  nav: [
    { label: "Cortes", href: "#cuts" },
    { label: "Especialistas", href: "#specialists" },
    { label: "Reseñas", href: "#reviews" },
    { label: "Contacto", href: "#contact" },
  ],
  sectionsOrder: ["hero","cuts","specialists","about","reviews","contact"],
  content: {
    hero: {
      title: "Cortes limpios. Estilo moderno.",
      subtitle: "Viña del Mar · Agenda en 1 clic",
      image: "/images/hero-modern.png",
      ctaLabel: "Agendar ahora",
      ctaHref: "https://cal.com/joaquin-tv-cqioat/agendar-corte-de-pelo",
    },
    cuts: [
      { name: "Skin Fade",   price: "25.000 CLP", image: "/images/cuts/skin-fade.png" },
      { name: "French Crop", price: "22.000 CLP", image: "/images/cuts/french-crop.png" },
      { name: "Texturizado", price: "23.000 CLP", image: "/images/cuts/textured.png" },
      { name: "Barba Pro",   price: "15.000 CLP", image: "/images/cuts/beard-lineup.png" },
      // ejemplo con logo monocromo en vez de foto:
      // { name: "Corte Clásico", price: "20.000 CLP", logo: "/images/cuts/classic-logo.svg" },
    ],
    specialists: [
      { name: "Nico", role: "Fade Expert", bookingUrl: "https://cal.com/joaquin-tv-cqioat/agendar-corte-de-pelo", photo: "/images/team/nico.png" },
      { name: "Paz",  role: "Estilos Modernos", bookingUrl: "https://cal.com/joaquin-tv-cqioat/agendar-corte-de-pelo", photo: "/images/team/paz.png" },
      { name: "Leo",  role: "Barba & Perfilado", bookingUrl: "https://cal.com/joaquin-tv-cqioat/agendar-corte-de-pelo", photo: "/images/team/leo.png" },
    ],
    about: {
      title: "Minimalismo & precisión",
      text:
        "Desde 2020 en Viña del Mar. Técnicas modernas con acabados pulcros. " +
        "Atención puntual, higiene impecable y cortes pensados para durar.",
      image: "/images/about-modern.png",
    },
    reviews: [
      { name: "Camila", rating: 5, text: "Reservé online y salí con el look exacto que quería." },
      { name: "Jorge",  rating: 5, text: "Degradado perfecto y línea limpia. Recomendados." },
      { name: "Valentina", rating: 4, text: "Ambiente moderno y equipo seco. Muy buena atención." },
    ],
    contact: {
      title: "Contacto & ubicación",
      subtitle: "Escríbenos por WhatsApp o agenda con tu especialista.",
      mapQuery: "Modern Barber Viña del Mar",
    },
  },
};

export default config;
