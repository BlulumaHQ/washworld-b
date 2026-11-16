export type Location = { slug: string; name: string; short: string; image: string; address: string | null; tags: string[]; maps: string };
const m = (q: string) => `https://maps.google.com/?q=${q}`;
export const locations: Location[] = [
  { slug: "newton-surrey", name: "Newton, Surrey", short: "Surrey (Newton)", image: "/images/surrey.jpg", address: "13231 72 Ave, Surrey BC", tags: ["Touchless", "Self-serve", "Vacuums"], maps: m("Washworld+Newton+Surrey+BC") },
  { slug: "richmond", name: "Richmond", short: "Richmond", image: "/images/richmond.jpg", address: null, tags: ["Touchless", "Vacuums"], maps: m("Washworld+Richmond+BC") },
  { slug: "abbotsford", name: "Abbotsford", short: "Abbotsford", image: "/images/abbotsford.jpg", address: null, tags: ["Touchless", "Vacuums"], maps: m("Washworld+Abbotsford+BC") },
  { slug: "maple-ridge", name: "Maple Ridge", short: "Maple Ridge", image: "/images/maple-ridge.jpg", address: null, tags: ["Touchless", "Polisher", "Vacuums"], maps: m("Washworld+Maple+Ridge+BC") },
  { slug: "chilliwack", name: "Chilliwack", short: "Chilliwack", image: "/images/chilliwack.jpg", address: "7854 Vedder Rd, Chilliwack BC", tags: ["Soft Cloth", "Detailing Products", "Vacuums"], maps: m("Washworld+Chilliwack+BC") },
];
export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);
export const tagService: Record<string, { icon: string; title: string }> = {
  Touchless: { icon: "/images/touchless.jpg", title: "Touchless Automatic Wash" },
  "Soft Cloth": { icon: "/images/soft_cloth.jpg", title: "Soft Cloth Automatic Wash" },
  "Self-serve": { icon: "/images/self_serve_bay.jpg", title: "Self-Serve Bays" },
  Vacuums: { icon: "/images/vacuum.jpg", title: "Vacuum & Shampoo" },
  "Detailing Products": { icon: "/images/detailing.png", title: "Detailing Products" },
  Polisher: { icon: "/images/soft_cloth.jpg", title: "Polisher" },
};
