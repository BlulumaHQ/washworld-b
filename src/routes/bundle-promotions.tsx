import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeDollarSign, MapPin, Sparkles, Zap } from "lucide-react";
import { pageHead } from "@/config";
import { CheckItem, Faq, Intro, SubHero } from "@/components/ui-bits";

export const Route = createFileRoute("/bundle-promotions")({
  head: () => pageHead("Bundle Deals | Washworld", "Prepay 4 washes and save. Soft cloth and No Touch wash bundles from $68 at participating Washworld locations in BC.", "/bundle-promotions"),
  component: Bundles,
});

const avail = "Available at Surrey, Maple Ridge, Richmond & Abbotsford";
type B = { title: string; price: number; badge: string; desc: string; items: string[]; avail?: string; featured?: boolean };
const premium: B[] = [
  { title: "4 Best + Polish", price: 96, badge: "Best Value", featured: true, desc: "Our most complete soft cloth bundle, with added polish and premium finishing care.", items: ["Undercarriage blast on entry","Presoak plus tri-foam conditioner","Wheel scrub","Soft cloth scrub plus shampoo","Polish with foam cloth","Extreme shine foam arch","High pressure rinse","Body shield wax","Spot free rinse"] },
  { title: "4 No Touch — BEST", price: 88, badge: "Touch-Free Premium", desc: "A premium touch-free bundle for drivers who prefer a contactless wash.", items: ["Undercarriage blast on entry","2-step presoak","Tri-foam conditioner","High pressure rinse","Extreme shine foam arch","Spot free rinse"], avail },
  { title: "4 Soft Cloth — BEST", price: 84, badge: "Popular", desc: "A premium soft cloth bundle with extra shine, wax and a dryer finish.", items: ["Undercarriage blast on entry","Presoak plus tri-foam conditioner","Wheel scrub","Soft cloth scrub plus shampoo","High pressure rinse","Body shield wax","Spot free rinse","Dryer on exit"] },
];
const value: B[] = [
  { title: "4 No Touch — BETTER", price: 72, badge: "Great Value", desc: "Strong-value touch-free bundle with essential protection and finishing steps.", items: ["Undercarriage blast on entry","2-step presoak","Tri-foam conditioner","High pressure rinse","Body shield wax","Spot free rinse"], avail },
  { title: "4 Soft Cloth — BETTER", price: 68, badge: "Everyday Choice", desc: "Value-focused soft cloth bundle with wheel wash, foam conditioner, wax and rinse protection.", items: ["Undercarriage on entry","Pre soak","Wheel wash","High pressure rinse","Triple foam conditioner","Soft cloth double pass with soap","Velocity clearcoat wax","Spot free rinse"] },
];

function Card({ b }: { b: B }) {
  const f = b.featured;
  return (
    <div className={`lift flex flex-col rounded-[24px] p-8 ${f ? "bg-ink text-white shadow-[0_30px_80px_rgba(10,18,38,.35)]" : "bg-white border border-line-light"}`}>
      <span className={`self-start rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[.14em] ${f ? "bg-primary text-white" : "bg-[#EAF2FF] text-eyebrow-light"}`}>{b.badge}</span>
      <h3 className="display mt-5 text-2xl">{b.title}</h3>
      <div className="mt-3 flex items-baseline gap-2"><span className="display text-[56px]">${b.price}</span><span className={`text-sm ${f ? "text-white/60" : "text-ink-body"}`}>/ 4 washes</span></div>
      <p className={`mt-3 text-sm ${f ? "text-body" : "text-ink-body"}`}>{b.desc}</p>
      <ul className={`mt-6 space-y-3 border-t pt-6 ${f ? "border-white/10" : "border-line-light"}`}>{b.items.map((i) => <CheckItem key={i}>{i}</CheckItem>)}</ul>
      {b.avail && <p className={`mt-5 flex gap-2 text-xs ${f ? "text-body" : "text-ink-body"}`}><MapPin className="h-4 w-4 shrink-0" />{b.avail}</p>}
      <div className="mt-auto pt-8"><Link to="/locations" className={`btn w-full ${f ? "btn-primary" : "btn-dark"}`}>Get This Bundle <ArrowRight className="h-4 w-4" /></Link></div>
    </div>
  );
}

const benefits = [[BadgeDollarSign,"Better value","Save compared to buying single washes."],[Zap,"Faster visits","Prepaid means quicker, easier repeat stops."],[Sparkles,"Premium options","Wax, foam arch and polish included."],[MapPin,"Across BC","Redeem at participating locations."]] as const;

function Bundles() {
  return (
    <>
      <SubHero image="/images/hero-b.webp" pos="70% 50%" eyebrow="Bundle Deals · Prepay 4 washes" l1="Wash more." l2="Pay less." text="Prepay for 4 washes and get better value, faster checkout and premium wash options at participating Washworld locations.">
        <div className="mt-9 flex flex-wrap gap-3"><a href="#bundles" className="btn btn-primary">Shop Bundle Deals</a><a href="#types" className="btn btn-secondary">Compare Wash Types</a></div>
      </SubHero>
      <div className="container-ww relative z-10 -mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 pb-16">
        {benefits.map(([I,t,d]) => <div key={t} className="rounded-[20px] border bg-[rgba(13,21,40,.85)] backdrop-blur-lg p-6"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-accent2"><I className="h-5 w-5" /></span><div className="mt-4 font-bold">{t}</div><p className="mt-1 text-sm text-muted-foreground">{d}</p></div>)}
      </div>
      <section id="bundles" className="section light scroll-mt-20"><div className="container-ww">
        <Intro light eyebrow="Premium bundles" title="The full treatment, four times." text="Our top-tier bundles for the deepest clean and best finish." />
        <div className="grid gap-5 md:grid-cols-3">{premium.map((b) => <Card key={b.title} b={b} />)}</div>
        <div className="mt-24"><Intro light eyebrow="Value bundles" title="Everyday clean, better price." text="Great everyday options that keep your car clean without breaking the bank." /></div>
        <div className="grid gap-5 md:grid-cols-2 max-w-[860px]">{value.map((b) => <Card key={b.title} b={b} />)}</div>
      </div></section>
      <section id="types" className="section scroll-mt-20"><div className="container-ww">
        <Intro eyebrow="Understanding wash types" title="No Touch or Soft Cloth?" />
        <div className="grid gap-5 lg:grid-cols-2">
          {[["/images/touchless.jpg","No Touch Wash","A contact-free wash using powerful cleaning technology — nothing physically touches your vehicle."],["/images/soft_cloth.jpg","Soft Cloth Wash","A traditional automatic wash with gentle foam cloth for a thorough clean and polished finish."]].map(([i,t,d]) => (
            <div key={t} className="card-grad flex flex-col sm:flex-row gap-6 rounded-[28px] p-8"><div className="icon-tile h-[76px] w-[92px] shrink-0"><img src={i} alt="" className="h-full w-full object-contain" /></div><div><h3 className="display text-2xl">{t}</h3><p className="mt-3 text-body">{d}</p></div></div>))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">Package availability may vary by location.</p>
      </div></section>
      <section className="section pt-0"><div className="container-ww grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <div><p className="eyebrow">Bundle FAQ</p><h2 className="h2">Before you buy.</h2></div>
        <Faq items={[
          ["Are all bundles available at every location?","Some bundle types are only available at participating Washworld locations. No Touch bundles are available at Surrey, Maple Ridge, Richmond and Abbotsford."],
          ["What's the difference between No Touch and Soft Cloth?","No Touch uses a contact-free wash process. Soft Cloth uses gentle foam cloth for a more thorough, traditional automatic wash."],
          ["Do I need the app to buy a bundle?","Bundles are redeemed through Washworld's purchase and redemption process — the Washworld app is the fastest way."],
          ["Can I buy more than one bundle?","Yes. Pick the bundle that fits how often you wash and which wash you prefer."],
        ]} />
      </div></section>
    </>
  );
}
