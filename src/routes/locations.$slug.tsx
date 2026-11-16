import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Clock, MapPin, Navigation, Phone, Tag } from "lucide-react";
import { pageHead, PHONE, PHONE_HREF } from "@/config";
import { getLocation, locations, tagService } from "@/data/locations";

export const Route = createFileRoute("/locations/$slug")({
  loader: ({ params }) => { const l = getLocation(params.slug); if (!l) throw notFound(); return l; },
  head: ({ loaderData, params }) => loaderData
    ? pageHead(`${loaderData.name} Car Wash | Washworld`, `Washworld ${loaderData.name}: soft cloth, touchless and self-serve car care open 24 hours, 7 days a week.`, `/locations/${params.slug}`)
    : { meta: [{ title: "Location not found | Washworld" }, { name: "robots", content: "noindex" }] },
  component: Detail,
});

function Detail() {
  const l = Route.useLoaderData();
  const svc = [...l.tags.flatMap((t) => (tagService[t] ? [tagService[t]] : [])), { icon: "/images/fragrance.jpg", title: "Fragrance Spray" }];
  const others = locations.filter((o) => o.slug !== l.slug);
  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <img src={l.image} alt={`Washworld ${l.name}`} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(5,10,22,.75) 0%, rgba(5,10,22,.35) 35%, rgba(5,10,22,.92) 82%, #070C1A 100%)" }} />
        <div className="container-ww relative pt-[200px] pb-16">
          <Link to="/locations" className="inline-flex min-h-11 items-center gap-2 text-sm text-link hover:text-white"><ArrowLeft className="h-4 w-4" />All locations</Link>
          <h1 className="display mt-4" style={{ fontSize: "clamp(44px,6vw,84px)" }}>{l.name}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="badge-hero !text-mint-text !border-mint/30 !bg-mint/10"><span className="mint-dot" />Open now · 24/7</span>
            {l.address && <span className="flex items-center gap-2 text-body"><MapPin className="h-4 w-4" />{l.address}</span>}
          </div>
        </div>
      </section>
      <div className="container-ww grid gap-4 sm:grid-cols-2 lg:grid-cols-4 pb-20">
        {[[Clock,"Hours","24 hours · 7 days"],[Phone,"Phone",PHONE],[Tag,"Single washes","From $16"]].map(([I,k,v]) => { const Ic = I as typeof Clock; const inner = <><Ic className="h-5 w-5 text-accent2" /><div className="mt-4 text-xs uppercase tracking-[.16em] text-muted-foreground">{k as string}</div><div className="display mt-1 text-xl">{v as string}</div></>;
          return k === "Phone" ? <a key="p" href={PHONE_HREF} className="lift rounded-[20px] border bg-surface p-6">{inner}</a> : <div key={k as string} className="rounded-[20px] border bg-surface p-6">{inner}</div>; })}
        <a href={l.maps} target="_blank" rel="noreferrer" className="lift rounded-[20px] bg-primary p-6 shadow-[0_12px_40px_rgba(47,140,255,.45)]"><Navigation className="h-5 w-5" /><div className="mt-4 text-xs uppercase tracking-[.16em] text-white/75">Navigate</div><div className="display mt-1 text-xl flex items-center gap-2">Get Directions <ArrowRight className="h-5 w-5" /></div></a>
      </div>
      <section className="section light"><div className="container-ww grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <div><p className="eyebrow">At this location</p><h2 className="h2">What you'll find here.</h2><p className="mt-6 max-w-[380px] text-ink-body">Services vary by location — call ahead if you need something specific.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Link to="/" hash="pricing" className="btn btn-dark">See Wash Prices</Link><Link to="/bundle-promotions" className="btn btn-outline-light">Bundle Deals</Link></div></div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">{svc.map((s) => <div key={s.title} className="rounded-[20px] border border-line-light bg-white p-6"><img src={s.icon} alt="" className="h-[60px] w-[72px] object-contain" /><div className="mt-5 font-bold">{s.title}</div></div>)}</div>
      </div></section>
      <section className="section"><div className="container-ww">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">Other locations</p><h2 className="h2">Closer to somewhere else?</h2></div><Link to="/locations" className="flex items-center gap-2 font-semibold text-link hover:text-white">All locations <ArrowRight className="h-4 w-4" /></Link></div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{others.map((o) => (
          <Link key={o.slug} to="/locations/$slug" params={{ slug: o.slug }} className="lift relative block h-[260px] overflow-hidden rounded-[24px]">
            <img src={o.image} alt={`Washworld ${o.name}`} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(7,12,26,.92))" }} />
            <div className="absolute bottom-0 p-5"><div className="flex items-center gap-2 text-[11px] font-bold tracking-[.16em] text-mint-text"><span className="mint-dot" />OPEN 24/7</div><div className="display mt-1 text-xl">{o.name}</div></div>
          </Link>))}</div>
      </div></section>
    </>
  );
}
