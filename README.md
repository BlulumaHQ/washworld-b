# Washworld B

Build "Washworld B" — a premium, dark, automotive-style multi-page website for Washworld, a 24/7 car wash chain with 5 locations in BC, Canada. Static marketing site (React + Vite + Tailwind + react-router). No backend, no Supabase.

## 0. Assets — download first
Download each image below into `/public/images/` (same filename) and reference them with absolute paths like `/images/hero-b.jpg`. Do NOT use the asset picker, `src/assets`, or `.asset.json`.
Base URL: https://raw.githubusercontent.com/BlulumaHQ/washword-preveiw-a/concept-b-assets/img/
- hero-b.jpg (home hero, 2400×1260, car under blue LED arches at night)
- surrey.jpg, richmond.jpg, abbotsford.jpg, maple-ridge.jpg, chilliwack.jpg (location photos, 550×600)
- soft_cloth.jpg, touchless.jpg, self_serve_bay.jpg, vacuum.jpg, fragrance.jpg, detailing.png (navy line icons on white — always show them on a white tile)

## 1. Design system ("Midnight Chrome")
- Fonts (Google Fonts): **Archivo** with width axis (`family=Archivo:wdth,wght@100..125,400..900`) for display/headings, always `font-stretch: 112–125%`, weight 800, tight letter-spacing (-0.01 to -0.02em), line-height ~1.0–1.05. **Inter** 400–700 for body.
- Colors: page bg `#070C1A`; deepest `#040812` (footer) / `#050A16` (hero); surface card `#0D1528`; card gradient `linear-gradient(160deg,#13203D,#0B1327)`; border `rgba(255,255,255,0.08)`; text white `#FFFFFF`, soft `#EAF1FF`, body `#B7C4DD`, muted `#9AA8C2`, nav `#C9D6EE`; accent blue `#2F8CFF` (buttons, glow `0 12px 40px rgba(47,140,255,.45)`), light accent `#5AAEFF`, link `#7DBBFF`; "open" mint `#3BFFB0` dot with glow + text `#9FF5D2`; check green `#1FBF85`.
- Light sections: bg `#F3F6FB`, text `#0A1226`, body `#4A5672`, eyebrow `#1F6FE0`, white cards with border `#DCE3EE`/`#E1E7F0`.
- Section pattern: padding 120px top/bottom (72px mobile), max-width 1280px container, 32px side padding (20px mobile). Each section starts with an eyebrow (12px, 700, letter-spacing .2em, uppercase, `#5AAEFF` on dark / `#1F6FE0` on light, e.g. "01 — Choose your wash") then an Archivo H2 `clamp(34px,4vw,56px)`. Often a 2-column intro: heading left, short muted paragraph right (max 380px), aligned bottom.
- Radii: pills 999px for all buttons/badges; cards 20–28px. Buttons min-height 56px (primary `#2F8CFF` white text bold with glow; secondary 1px `rgba(255,255,255,.28)` border, `rgba(255,255,255,.06)` bg). Small buttons 44–48px.
- Icons: lucide-react, stroke style. No emoji. Subtle hover states (lift / brightness), smooth scroll.
- Fully responsive; everything stacks cleanly at 390px.

## 2. Global header (all pages)
Transparent, sits over each page's dark hero (absolute/relative inside hero, not a white bar). Becomes a solid `#070C1A/90` blurred sticky bar after scrolling 40px.
- Left: logo lockup = 34px circle with 2px `#3B9BFF` border + blue glow containing a droplet icon, then wordmark "WASHWORLD" (Archivo, stretch 125%, 800, 18px, letter-spacing .14em).
- Center nav (14px, 500, `#C9D6EE`, active = white with 2px blue underline): Wash Types (/#wash), Pricing (/#pricing), Bundle Deals (/bundle-promotions), Locations (/locations), Contact (/contact).
- Right: phone "604-507-0829" (tel link) + white pill button "Find a Location" (dark text) → /locations.
- Mobile: hamburger → full-screen dark menu with the same links, phone, and CTA.
- Make hash links work across routes (scroll to the id after navigating to /).

## 3. Global footer (all pages)
bg `#040812`, top border. 
- CTA row: big Archivo heading "Your car,<br>**clean tonight.**" (2nd line `#5AAEFF`, clamp(36px,5vw,72px)) + buttons "Find a Location" (primary) and "Call 604-507-0829" (secondary).
- 4 columns: (1) WASHWORLD wordmark + "Your 24/7 destination for premium car care across BC since 2001." (2) Menu: Home, Pricing, Bundle Deals, Services, FAQ, Contact (3) Locations: Surrey (Newton), Richmond, Abbotsford, Maple Ridge, Chilliwack → each location page (4) Contact: info@washworld.ca, 604-507-0829, 13231 72 Ave, Surrey BC, + Facebook (https://www.facebook.com/canadawashworld), Instagram (https://www.instagram.com/washworld.ca/), LinkedIn (https://www.linkedin.com/company/washworld5/).
- Copyright bar: "© 2026 Washworld. All rights reserved." left, "Web design by Sonykun Design" (link https://sonykundesign.com) right.
- **Mobile footer must be short**: on mobile hide the Menu and Locations columns; show only the CTA, wordmark line, contact links + socials, and the copyright bar.

## 4. Pages

### / Home
1. **Hero** (min-height 780px, bg `#050A16`): `/images/hero-b.jpg` full-bleed `object-cover`, object-position `68% 50%` (on mobile keep the car visible: `object-position: 72% 50%` and a stronger left/bottom overlay). Overlay: vertical gradient darkening top 0–22% and fading into `#070C1A` at the bottom. Header on top. Left column content (max 620px):
   - Pill badge (border `rgba(125,187,255,.35)`, bg `rgba(59,155,255,.10)`, 12px uppercase .16em `#B9DAFF`) with glowing mint dot: "Open now · 24 hours · 7 days"
   - H1 Archivo stretch 118%, 800, `clamp(44px,6.4vw,88px)`, lh .98: "Showroom shine." line break "Any hour." (2nd line `#5AAEFF`)
   - Paragraph 19px `#B7C4DD` max 500px: "Soft cloth or touchless, in and out in minutes. Five Washworld locations across the Lower Mainland and Fraser Valley — always open, always ready."
   - Buttons: primary "Find Your Nearest Wash" (map-pin icon) → /locations; secondary "Compare Packages" (arrow) → #pricing.
   - Bottom stat strip inside hero: 4 cells in a rounded 20px container with 1px dividers (`gap:1px` on `rgba(255,255,255,.10)` bg, each cell `rgba(7,12,26,.82)`): "Since 2001 / Serving BC drivers for 20+ years", "5 Locations / Surrey · Richmond · Abbotsford · Maple Ridge · Chilliwack", "24 / 7 / Every location, every day", "From $16 / Soft cloth & touchless packages". Big text Archivo 30px 800 white, small 13px muted.
2. **Wash types** `#wash` (dark): eyebrow "01 — Choose your wash", H2 "Two ways to clean.<br>One standard of finish.", right text "Not sure which to pick? Heavy grime calls for soft cloth. A quick refresh between details is what touchless does best." Two big cards (gradient card, 44px padding, radius 28): white 92×76 icon tile (soft_cloth.jpg / touchless.jpg) + top-right badge ("DEEPEST CLEAN" blue-tinted / "NO CONTACT" mint-tinted), H3 32px, description, bottom row with divider: "Best for heavy dirt, mud & buildup" + "4 packages · $16–$26" / "Best for quick maintenance washes" + "3 packages · $16–$23".
   - Soft Cloth: "Gentle foam-cloth technology lifts heavier dirt, mud and road film for a fuller, polished finish."
   - Touchless: "High-pressure water and premium chemistry — nothing touches your paint. Fast, safe and ideal for regular upkeep."
3. **Pricing** `#pricing` (LIGHT `#F3F6FB`): centered eyebrow "02 — Wash packages", H2 "Pick your finish.", sub "Every package includes undercarriage blast, presoak, high-pressure & spot-free rinse and dryer." Pill tab switcher (white pill container, active tab `#0A1226` bg white text): **Soft Cloth | Touchless**. Grid of package cards (auto-fit minmax 250px). Each card: tag (12px uppercase blue), name (Archivo 24px), price (Archivo 56px 800) + "per wash", then feature checklist — included = green check, excluded = grey dash + line-through muted. The popular card is inverted: bg `#0A1226`, white text, big shadow, "MOST POPULAR" blue pill badge.
   - Soft Cloth features (in order): Undercarriage Blast, Presoak, Wheel Scrub, Soft Cloth Scrub + Shampoo, High Pressure Rinse, Spot Free Rinse, Dryer, Tri Foam Conditioner, Body Shield Wax, Extreme Shine Foam Arch, Polish with Foam Cloth. Packages (number = first N features included): Basic $16 "Quick Clean" 7; Better $19 "Great Value" 9; **Best $23 "Premium" 10 — MOST POPULAR**; Best + Polish $26 "Ultimate Finish" 11.
   - Touchless features: Undercarriage Blast, Presoak, High Pressure Rinse, Spot Free Rinse, Dryer, Tri Foam Conditioner, Body Shield Wax, Extreme Shine Foam Arch. Packages: Basic $16 "Quick Clean" 5; **Better $19 "Best Value" 7 — MOST POPULAR**; Best $23 "Premium Touchless" 8.
   - Below: "Services vary by location. Find a wash near you · Save more with 4-wash bundle deals" (links to /locations and /bundle-promotions).
4. **Locations** `#locations` (dark): eyebrow "03 — Locations", H2 "Never far from clean.", right text "Five locations from Richmond to Chilliwack. All open 24 hours, 7 days a week." Grid of 5 tall photo cards (height 420, radius 24, auto-fit minmax 220): photo cover + bottom gradient to `rgba(7,12,26,.92)`; mint "OPEN 24/7" label, name (Archivo 24px), row: white pill "Directions" (Google Maps link) + 44px round outline arrow button → location page.
5. **Services** `#services` (light): left column eyebrow "04 — Complete car care", H2 "More than<br>a wash.", text "Finish the job inside and out — self-serve bays, vacuums, shampoo and fragrance stations at every stop." Right: grid of 6 white cards (radius 20) each with the icon image (72×60) + bold title: Soft Cloth Automatic Wash, Touchless Automatic Wash, Self-Serve Bays, Vacuum & Shampoo Stations, Fragrance Spray, Detailing Products.
6. **App band** `#app` (dark bg, 120px top): rounded 32px panel with `radial-gradient(120% 140% at 85% 20%, #1F5FD0 0%, #0E2A66 45%, #0A1430 100%)`, 64px padding: eyebrow "Washworld App", H2 "Members wash for less.", text "Exclusive promotions, bundle deals and a faster way through the bay — all in the Washworld app." Two store buttons: white "Download on the App Store" (https://apps.apple.com/ca/app/washworld-car-wash/id1522797189) and outlined "Get it on Google Play" (https://play.google.com/store/apps/details?id=com.washworld.carwash).
7. **FAQ** `#faq` (dark): left eyebrow "05 — FAQ", H2 "Good questions.", text "Anything else? Call 604-507-0829 or email info@washworld.ca." Right: accordion, rows separated by top borders, 18px semibold questions, 40px round "+" icon that rotates 45° and turns blue when open; first item open by default.
   - What's the difference between soft cloth and touchless? → Soft cloth gives a deeper, more thorough clean. Touchless is faster, with nothing touching your paint — best for lighter dirt.
   - Which package should I choose? → Basic for a quick clean, Better for the best value, Best for premium protection and shine.
   - Are you really open 24/7? → Yes — every Washworld location is open 24 hours a day, 7 days a week.
   - Do you offer vacuums and interior cleaning? → Yes. Self-serve vacuum, shampoo and fragrance stations are available.
   - Do you offer discounts? → Yes, through promotions and bundle deals in the Washworld app.
   - How long does a wash take? → Just a few minutes, depending on the package.

### Shared sub-page hero (Bundle Deals, Locations, Contact)
Photo background at 55% opacity, horizontal overlay `linear-gradient(90deg, rgba(5,10,22,.97) 0%, rgba(5,10,22,.85) 45%, rgba(5,10,22,.35) 100%)` + bottom fade to `#070C1A`. Header on top, then content padding 96px top / 110px bottom: eyebrow, H1 Archivo stretch 118% `clamp(42px,5.6vw,76px)` lh 1 with 2nd line `#5AAEFF`, 18px paragraph.

### /bundle-promotions — Bundle Deals
1. Hero (bg photo `/images/hero-b.jpg`, position 70% 50%): eyebrow "Bundle Deals · Prepay 4 washes", H1 "Wash more.<br>Pay less.", text "Prepay for 4 washes and get better value, faster checkout and premium wash options at participating Washworld locations." Buttons: "Shop Bundle Deals" → #bundles, "Compare Wash Types" → #types.
2. Benefits row (overlaps hero by -40px): 4 dark glass cards (icon in 48px blue-tinted rounded square + title + text): Better value / Save compared to buying single washes. · Faster visits / Prepaid means quicker, easier repeat stops. · Premium options / Wax, foam arch and polish included. · Across BC / Redeem at participating locations.
3. `#bundles` (light): eyebrow "Premium bundles", H2 "The full treatment, four times.", side text "Our top-tier bundles for the deepest clean and best finish." 3 cards; then eyebrow "Value bundles", H2 "Everyday clean, better price.", side "Great everyday options that keep your car clean without breaking the bank." 2 cards (max-width 860px). Card: badge pill, title (Archivo 24), price 56px + "/ 4 washes", description, checklist with green checks, optional availability line with pin icon, full-width pill button "Get This Bundle →" (→ /locations). Featured card = inverted dark (`#0A1226`) with blue badge/button; others white with dark button.
   - 4 Best + Polish — $96 — badge "Best Value" (FEATURED) — "Our most complete soft cloth bundle, with added polish and premium finishing care." — Undercarriage blast on entry; Presoak plus tri-foam conditioner; Wheel scrub; Soft cloth scrub plus shampoo; Polish with foam cloth; Extreme shine foam arch; High pressure rinse; Body shield wax; Spot free rinse.
   - 4 No Touch — BEST — $88 — "Touch-Free Premium" — "A premium touch-free bundle for drivers who prefer a contactless wash." — Undercarriage blast on entry; 2-step presoak; Tri-foam conditioner; High pressure rinse; Extreme shine foam arch; Spot free rinse. — Availability: "Available at Surrey, Maple Ridge, Richmond & Abbotsford"
   - 4 Soft Cloth — BEST — $84 — "Popular" — "A premium soft cloth bundle with extra shine, wax and a dryer finish." — Undercarriage blast on entry; Presoak plus tri-foam conditioner; Wheel scrub; Soft cloth scrub plus shampoo; High pressure rinse; Body shield wax; Spot free rinse; Dryer on exit.
   - 4 No Touch — BETTER — $72 — "Great Value" — "Strong-value touch-free bundle with essential protection and finishing steps." — Undercarriage blast on entry; 2-step presoak; Tri-foam conditioner; High pressure rinse; Body shield wax; Spot free rinse. — same availability line.
   - 4 Soft Cloth — BETTER — $68 — "Everyday Choice" — "Value-focused soft cloth bundle with wheel wash, foam conditioner, wax and rinse protection." — Undercarriage on entry; Pre soak; Wheel wash; High pressure rinse; Triple foam conditioner; Soft cloth double pass with soap; Velocity clearcoat wax; Spot free rinse.
4. `#types` (dark): eyebrow "Understanding wash types", H2 "No Touch or Soft Cloth?" Two horizontal gradient cards with white icon tile: No Touch Wash — "A contact-free wash using powerful cleaning technology — nothing physically touches your vehicle." / Soft Cloth Wash — "A traditional automatic wash with gentle foam cloth for a thorough clean and polished finish." Note: "Package availability may vary by location."
5. FAQ (dark, same accordion style): eyebrow "Bundle FAQ", H2 "Before you buy." — Are all bundles available at every location? → Some bundle types are only available at participating Washworld locations. No Touch bundles are available at Surrey, Maple Ridge, Richmond and Abbotsford. · What's the difference between No Touch and Soft Cloth? → No Touch uses a contact-free wash process. Soft Cloth uses gentle foam cloth for a more thorough, traditional automatic wash. · Do I need the app to buy a bundle? → Bundles are redeemed through Washworld's purchase and redemption process — the Washworld app is the fastest way. · Can I buy more than one bundle? → Yes. Pick the bundle that fits how often you wash and which wash you prefer.

### /locations
1. Hero (bg `/images/richmond.jpg`): eyebrow "Locations · Open 24/7", H1 "Five stops.<br>Always open.", text "From Richmond to Chilliwack, there's a Washworld near you — open 24 hours a day, 7 days a week." Row of outline pill jump-links to each location card.
2. Stacked list of 5 large horizontal cards (radius 28, `#0D1528`): photo half (min-height 340, cover) + content half (44px padding): "01" number in blue + mint dot + "OPEN 24/7", name Archivo 40px, address line with pin icon (only if known), service tag pills, buttons "Get Directions" (white) + "Location Details →" (outline). Cards wrap to vertical on mobile.
3. Note: "Services vary by location. Call 604-507-0829 to confirm availability."

Location data (create `src/data/locations.ts`, single source for home cards, locations page, footer, detail pages, contact select):
- newton-surrey — "Newton, Surrey" — surrey.jpg — address "13231 72 Ave, Surrey BC" — tags Touchless, Self-serve, Vacuums — maps https://maps.google.com/?q=Washworld+Newton+Surrey+BC
- richmond — "Richmond" — richmond.jpg — address: null — tags Touchless, Vacuums — maps ?q=Washworld+Richmond+BC
- abbotsford — "Abbotsford" — abbotsford.jpg — address: null — tags Touchless, Vacuums — maps ?q=Washworld+Abbotsford+BC
- maple-ridge — "Maple Ridge" — maple-ridge.jpg — address: null — tags Touchless, Polisher, Vacuums — maps ?q=Washworld+Maple+Ridge+BC
- chilliwack — "Chilliwack" — chilliwack.jpg — address "7854 Vedder Rd, Chilliwack BC" — tags Soft Cloth, Detailing Products, Vacuums — maps ?q=Washworld+Chilliwack+BC
(When address is null, hide the address line.)

### /locations/:slug — location detail (one template, 5 routes)
1. Hero: location photo full-bleed with vertical overlay `linear-gradient(180deg, rgba(5,10,22,.75) 0%, rgba(5,10,22,.35) 35%, rgba(5,10,22,.92) 82%, #070C1A 100%)`, header, then padding-top 200px: "← All locations" link, H1 name (Archivo stretch 118%, clamp(44px,6vw,84px)), mint "Open now · 24/7" pill + address with pin.
2. 4 info cards: Hours "24 hours · 7 days"; Phone "604-507-0829" (tel); Single washes "From $16"; blue `#2F8CFF` card "Navigate — Get Directions →" (maps link).
3. Light section: eyebrow "At this location", H2 "What you'll find here.", text "Services vary by location — call ahead if you need something specific.", buttons "See Wash Prices" (→ /#pricing) and "Bundle Deals". Right: white service cards with icons matching this location's tags (Touchless→touchless.jpg, Soft Cloth→soft_cloth.jpg, Self-serve→self_serve_bay.jpg, Vacuums→vacuum.jpg "Vacuum & Shampoo", Detailing Products→detailing.png, Polisher→soft_cloth.jpg "Polisher") + always "Fragrance Spray" (fragrance.jpg).
4. Dark section: eyebrow "Other locations", H2 "Closer to somewhere else?", "All locations →" link; grid of the other 4 location photo cards (height 260) linking to their pages.
Unknown slug → 404.

### /contact
1. Hero (bg `/images/maple-ridge.jpg`): eyebrow "Contact", H1 "We're here<br>around the clock.", text "Questions about a wash, a bundle or a location? Reach out and our team will get back to you."
2. Two columns: left stack of cards — Call 604-507-0829, Email info@washworld.ca, Head office 13231 72 Ave, Surrey BC (Archivo 28px values), and a blue gradient card "Follow Washworld" with Facebook/Instagram/LinkedIn pills. Right: form card (`#0D1528`, radius 28, 44px padding) titled "Send us a message" / "We usually reply within one business day." Fields (2-col grid, real labels): Name, Email, Phone (optional), Location (select: Any location + 5 locations), Message (textarea, full width). Footer row: "For urgent issues at a wash, please call." + primary "Send Message" button.
   - **Form submits via Formspree**: POST to `https://formspree.io/f/YOUR_FORM_ID` (put the ID in one constant `FORMSPREE_ENDPOINT` in `src/config.ts` with a TODO comment), fetch with `Accept: application/json`, show inline success ("Thanks — we'll be in touch soon.") / error states, disable button while sending.

### 404
Full-height hero with `/images/hero-b.jpg` at 45% opacity + left overlay, header, giant "404" (Archivo stretch 125%, clamp(96px,14vw,200px), `rgba(90,174,255,.9)`), H1 "This bay is empty.", text "The page you're looking for has moved or doesn't exist. Let's get you back on the road.", buttons "Back to Home" and "Find a Location".

## 5. Technical / SEO
- Per-page `<title>` + meta description (use a small hook or react-helmet-async). Titles: "Washworld | 24/7 Car Wash in Surrey, Richmond, Abbotsford, Maple Ridge & Chilliwack", "Bundle Deals | Washworld", "Locations | Washworld", "<Name> Car Wash | Washworld", "Contact | Washworld".
- **Temporary favicon**: SVG at `/public/favicon.svg` — black square, white bold "W" centered; link it in index.html (remove any default favicon.ico reference).
- **Temporary OG image**: create `/public/og-image.jpg` by copying hero-b.jpg (1200×630 crop is fine) and add og:title, og:description, og:image (absolute path /og-image.jpg), twitter:card summary_large_image.
- **Host-conditional noindex**: in index.html `<head>`, add an inline script that, when `location.hostname` ends with `lovable.app`, `lovableproject.com`, `workers.dev`, `pages.dev` or `netlify.app`, injects `<meta name="robots" content="noindex, nofollow">`. Production domain must stay indexable. Keep robots.txt allowing all.
- Accessibility: real buttons/links, aria-labels on icon-only buttons, alt text on photos, visible focus rings, 44px min touch targets.
- No Lovable-specific badge/branding in the UI. Remove any unused template pages.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8fbe74a0-129d-4fdc-a044-9f266654d956).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
