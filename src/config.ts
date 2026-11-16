// Domain-dependent values live here.
export const SITE_URL = "https://washworld.ca";
// TODO: replace YOUR_FORM_ID with the real Formspree form ID.
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
export const PHONE = "604-507-0829";
export const PHONE_HREF = "tel:6045070829";
export const EMAIL = "info@washworld.ca";
export const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/canadawashworld" },
  { label: "Instagram", href: "https://www.instagram.com/washworld.ca/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/washworld5/" },
];
export const pageHead = (title: string, description: string, path: string) => ({
  meta: [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: SITE_URL + path },
    { property: "og:image", content: SITE_URL + "/og-image.jpg" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: SITE_URL + "/og-image.jpg" },
  ],
  links: [{ rel: "canonical", href: SITE_URL + path }],
});
