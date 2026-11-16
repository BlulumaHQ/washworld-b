import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { useState } from "react";
import { pageHead, EMAIL, PHONE } from "@/config";
import { locations } from "@/data/locations";
import { CheckItem, Faq, Intro } from "@/components/ui-bits";

export const Route = createFileRoute("/")({
  head: () => pageHead("Washworld | 24/7 Car Wash in Surrey, Richmond, Abbotsford, Maple Ridge & Chilliwack", "Soft cloth and touchless car washes open 24/7 at five Washworld locations across the Lower Mainland and Fraser Valley. Packages from $16.", "/"),
  component: Home,
});

const softF = ["Undercarriage Blast","Presoak","Wheel Scrub","Soft Cloth Scrub + Shampoo","High Pressure Rinse","Spot Free Rinse","Dryer","Tri Foam Conditioner","Body Shield Wax","Extreme Shine Foam Arch","Polish with Foam Cloth"];
const touchF = ["Undercarriage Blast","Presoak","High Pressure Rinse","Spot Free Rinse","Dryer","Tri Foam Conditioner","Body Shield Wax","Extreme Shine Foam Arch"];
const plans = {
  soft: { f: softF, p: [["Basic",16,"Quick Clean",7],["Better",19,"Great Value",9],["Best",23,"Premium",10,1],["Best + Polish",26,"Ultimate Finish",11]] },
  touch: { f: touchF, p: [["Basic",16,"Quick Clean",5],["Better",19,"Best Value",7,1],["Best",23,"Premium Touchless",8]] },
} as const;

const stats = [["Since 2001","Serving BC drivers for 20+ years"],["5 Locations","Surrey · Richmond · Abbotsford · Maple Ridge · Chilliwack"],["24 / 7","Every location, every day"],["From $16","Soft cloth & touchless packages"]];
const services = [["/images/soft_cloth.jpg","Soft Cloth Automatic Wash"],["/images/touchless.jpg","Touchless Automatic Wash"],["/images/self_serve_bay.jpg","Self-Serve Bays"],["/images/vacuum.jpg","Vacuum & Shampoo Stations"],["/images/fragrance.jpg","Fragrance Spray"],["/images/detailing.png","Detailing Products"]];
const faqs: [string,string][] = [
  ["What's the difference between soft cloth and touchless?","Soft cloth gives a deeper, more thorough clean. Touchless is faster, with nothing touching your paint — best for lighter dirt."],
  ["Which package should I choose?","Basic for a quick clean, Better for the best value, Best for premium protection and shine."],
  ["Are you really open 24/7?","Yes — every Washworld location is open 24 hours a day, 7 days a week."],
  ["Do you offer vacuums and interior cleaning?","Yes. Self-serve vacuum, shampoo and fragrance stations are available."],
  ["Do you offer discounts?","Yes, through promotions and bundle deals in the Washworld app."],
  ["How long does a wash take?","Just a few minutes, depending on the package."],
];

function Home() {
  const [tab, setTab] = useState<"soft" | "touch">("soft");
  const plan = plans[tab];
  return (
    <>
      <section className="relative min-h-[780px] md:min-h-[900px] overflow-hidden bg-hero flex flex-col">
        <img src="/images/hero-b.jpg" alt="Car under blue LED wash arches at night" className="absolute inset-0 h-full w-full object-cover object-[72%_50%] md:object-[68%_50%]" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(5,10,22,.85) 0%, rgba(5,10,22,0) 22%, rgba(5,10,22,0) 55%, #070C1A 100%)" }} />
        <div className="absolute inset-0 md:hidden" style={{ background: "linear-gradient(90deg, rgba(5,10,22,.85), rgba(5,10,22,.35))" }} />
        <div className="absolute inset-0 max-md:hidden" style={{ background: "linear-gradient(90deg, rgba(5,10,22,.7), transparent 60%)" }} />
        <div className="container-ww relative flex-1 flex flex-col justify-end pt-36 md:pt-48 pb-14 w-full">
          <div className="max-w-[620px]">
            <span className="badge-hero"><span className="mint-dot" />Open now · 24 hours · 7 days</span>
            <h1 className="display mt-7" style={{ fontSize: "clamp(44px,6.4vw,88px)", lineHeight: .98 }}>Showroom shine.<br /><span className="text-accent2">Any hour.</span></h1>
            <p className="mt-6 max-w-[500px] text-[19px] text-body">Soft cloth or touchless, in and out in minutes. Five Washworld locations across the Lower Mainland and Fraser Valley — always open, always ready.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/locations" className="btn btn-primary"><MapPin className="h-5 w-5" />Find Your Nearest Wash</Link>
              <a href="#pricing" className="btn btn-secondary">Compare Packages<ArrowRight className="h-5 w-5" /></a>
            </div>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-[20px] bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(([a,b]) => <div key={a} className="bg-[rgba(7,12,26,.82)] p-6 backdrop-blur"><div className="display text-[30px]">{a}</div><div className="mt-2 text-[13px] text-muted-foreground">{b}</div></div>)}
          </div>
        </div>
      </section>

      <section id="wash" className="section scroll-mt-20"><div className="container-ww">
        <Intro eyebrow="01 — Choose your wash" title={<>Two ways to clean.<br />One standard of finish.</>} text="Not sure which to pick? Heavy grime calls for soft cloth. A quick refresh between details is what touchless does best." />
        <div className="grid gap-6 md:grid-cols-2">
          {[["/images/soft_cloth.jpg","DEEPEST CLEAN","Soft Cloth","Gentle foam-cloth technology lifts heavier dirt, mud and road film for a fuller, polished finish.","Best for heavy dirt, mud & buildup","4 packages · $16–$26",false],
            ["/images/touchless.jpg","NO CONTACT","Touchless","High-pressure water and premium chemistry — nothing touches your paint. Fast, safe and ideal for regular upkeep.","Best for quick maintenance washes","3 packages · $16–$23",true]].map(([img,badge,t,d,best,pk,mint]) => (
            <div key={t as string} className="card-grad lift rounded-[28px] p-11 max-sm:p-7 flex flex-col">
              <div className="flex items-start justify-between">
                <div className="icon-tile h-[76px] w-[92px]"><img src={img as string} alt="" className="h-full w-full object-contain" /></div>
                <span className={`rounded-full px-3 py-1.5 text-[11px] font-bold tracking-[.16em] ${mint ? "bg-mint/10 text-mint-text border border-mint/30" : "bg-primary/15 text-link border border-primary/40"}`}>{badge}</span>
              </div>
              <h3 className="display mt-8 text-[32px]">{t}</h3>
              <p className="mt-4 text-body">{d}</p>
              <div className="mt-auto pt-8"><div className="flex flex-wrap justify-between gap-2 border-t pt-6 text-sm"><span className="text-muted-foreground">{best}</span><span className="font-semibold text-link">{pk}</span></div></div>
            </div>))}
        </div>
      </div></section>

      <section id="pricing" className="section light scroll-mt-20"><div className="container-ww">
        <div className="text-center">
          <p className="eyebrow">02 — Wash packages</p>
          <h2 className="h2">Pick your finish.</h2>
          <p className="mx-auto mt-5 max-w-[520px] text-ink-body">Every package includes undercarriage blast, presoak, high-pressure & spot-free rinse and dryer.</p>
          <div className="mt-9 inline-flex rounded-full bg-white p-1.5 border border-line-light" role="tablist">
            {([["soft","Soft Cloth"],["touch","Touchless"]] as const).map(([k,l]) => (
              <button key={k} role="tab" aria-selected={tab===k} onClick={() => setTab(k)} className={`min-h-11 rounded-full px-7 text-sm font-semibold transition-colors ${tab===k ? "bg-ink text-white" : "text-ink-body hover:text-ink"}`}>{l}</button>))}
          </div>
        </div>
        <div className="mt-12 grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))" }}>
          {plan.p.map((p) => { const [name,price,tag,n,pop] = p as unknown as [string,number,string,number,number?]; return (
            <div key={name} className={`relative rounded-[24px] p-8 lift ${pop ? "bg-ink text-white shadow-[0_30px_80px_rgba(10,18,38,.35)]" : "bg-white border border-line-light"}`}>
              {pop && <span className="absolute right-6 top-6 rounded-full bg-primary px-3 py-1 text-[10px] font-bold tracking-[.14em] text-white">MOST POPULAR</span>}
              <div className="text-xs font-bold uppercase tracking-[.16em] text-eyebrow-light">{tag}</div>
              <div className="display mt-3 text-2xl">{name}</div>
              <div className="mt-4 flex items-baseline gap-2"><span className="display text-[56px]">${price}</span><span className={pop ? "text-white/60 text-sm" : "text-ink-body text-sm"}>per wash</span></div>
              <ul className={`mt-6 space-y-3 border-t pt-6 ${pop ? "border-white/10" : "border-line-light"}`}>{plan.f.map((f,i) => <CheckItem key={f} on={i<n} dark={!!pop}>{f}</CheckItem>)}</ul>
            </div>); })}
        </div>
        <p className="mt-10 text-center text-sm text-ink-body">Services vary by location. <Link to="/locations" className="font-semibold text-eyebrow-light hover:underline">Find a wash near you</Link> · <Link to="/bundle-promotions" className="font-semibold text-eyebrow-light hover:underline">Save more with 4-wash bundle deals</Link></p>
      </div></section>

      <section id="locations" className="section scroll-mt-20"><div className="container-ww">
        <Intro eyebrow="03 — Locations" title="Never far from clean." text="Five locations from Richmond to Chilliwack. All open 24 hours, 7 days a week." />
        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
          {locations.map((l) => (
            <div key={l.slug} className="relative h-[420px] overflow-hidden rounded-[24px] lift group">
              <img src={l.image} alt={`Washworld ${l.name}`} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 35%, rgba(7,12,26,.92) 85%)" }} />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex items-center gap-2 text-[11px] font-bold tracking-[.16em] text-mint-text"><span className="mint-dot" />OPEN 24/7</div>
                <h3 className="display mt-2 text-2xl">{l.name}</h3>
                <div className="mt-5 flex items-center gap-2">
                  <a href={l.maps} target="_blank" rel="noreferrer" className="btn btn-sm btn-white">Directions</a>
                  <Link to="/locations/$slug" params={{ slug: l.slug }} aria-label={`${l.name} details`} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 hover:bg-white/10"><ArrowUpRight className="h-4 w-4" /></Link>
                </div>
              </div>
            </div>))}
        </div>
      </div></section>

      <section id="services" className="section light scroll-mt-20"><div className="container-ww grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div><p className="eyebrow">04 — Complete car care</p><h2 className="h2">More than<br />a wash.</h2><p className="mt-6 max-w-[380px] text-ink-body">Finish the job inside and out — self-serve bays, vacuums, shampoo and fragrance stations at every stop.</p></div>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
          {services.map(([i,t]) => <div key={t} className="lift rounded-[20px] border border-line-light bg-white p-6"><img src={i} alt="" className="h-[60px] w-[72px] object-contain" /><div className="mt-5 font-bold">{t}</div></div>)}
        </div>
      </div></section>

      <section id="app" className="pt-[120px] max-sm:pt-[72px] scroll-mt-20"><div className="container-ww">
        <div className="rounded-[32px] p-16 max-md:p-8" style={{ background: "radial-gradient(120% 140% at 85% 20%, #1F5FD0 0%, #0E2A66 45%, #0A1430 100%)" }}>
          <p className="eyebrow !text-[#B9DAFF]">Washworld App</p>
          <h2 className="h2">Members wash for less.</h2>
          <p className="mt-5 max-w-[480px] text-soft">Exclusive promotions, bundle deals and a faster way through the bay — all in the Washworld app.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="https://apps.apple.com/ca/app/washworld-car-wash/id1522797189" target="_blank" rel="noreferrer" className="btn btn-white">Download on the App Store</a>
            <a href="https://play.google.com/store/apps/details?id=com.washworld.carwash" target="_blank" rel="noreferrer" className="btn btn-secondary">Get it on Google Play</a>
          </div>
        </div>
      </div></section>

      <section id="faq" className="section scroll-mt-20"><div className="container-ww grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <div><p className="eyebrow">05 — FAQ</p><h2 className="h2">Good questions.</h2><p className="mt-6 max-w-[380px] text-muted-foreground">Anything else? Call <a className="text-link" href="tel:6045070829">{PHONE}</a> or email <a className="text-link" href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p></div>
        <Faq items={faqs} />
      </div></section>
    </>
  );
}
