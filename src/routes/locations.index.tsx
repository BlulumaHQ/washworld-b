import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { pageHead } from "@/config";
import { locations } from "@/data/locations";
import { SubHero } from "@/components/ui-bits";

export const Route = createFileRoute("/locations/")({
  head: () => pageHead("Locations | Washworld", "Five Washworld car washes in Surrey, Richmond, Abbotsford, Maple Ridge and Chilliwack — all open 24 hours, 7 days a week.", "/locations"),
  component: Locations,
});

function Locations() {
  return (
    <>
      <SubHero image="/images/richmond.jpg" eyebrow="Locations · Open 24/7" l1="Five stops." l2="Always open." text="From Richmond to Chilliwack, there's a Washworld near you — open 24 hours a day, 7 days a week.">
        <div className="mt-9 flex flex-wrap gap-2">{locations.map((l) => <a key={l.slug} href={`#${l.slug}`} className="btn btn-sm btn-secondary">{l.name}</a>)}</div>
      </SubHero>
      <section className="pb-[120px] max-sm:pb-[72px]"><div className="container-ww space-y-6">
        {locations.map((l, i) => (
          <article id={l.slug} key={l.slug} className="scroll-mt-24 grid overflow-hidden rounded-[28px] border bg-surface md:grid-cols-2">
            <img src={l.image} alt={`Washworld ${l.name}`} className="h-full min-h-[340px] w-full object-cover" />
            <div className="p-11 max-sm:p-7 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-xs font-bold tracking-[.16em]"><span className="display text-primary text-base">0{i + 1}</span><span className="mint-dot" /><span className="text-mint-text">OPEN 24/7</span></div>
              <h2 className="display mt-4 text-[40px] max-sm:text-[32px]">{l.name}</h2>
              {l.address && <p className="mt-3 flex items-center gap-2 text-body"><MapPin className="h-4 w-4" />{l.address}</p>}
              <div className="mt-5 flex flex-wrap gap-2">{l.tags.map((t) => <span key={t} className="rounded-full border px-3 py-1.5 text-xs text-nav">{t}</span>)}</div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={l.maps} target="_blank" rel="noreferrer" className="btn btn-sm btn-white">Get Directions</a>
                <Link to="/locations/$slug" params={{ slug: l.slug }} className="btn btn-sm btn-secondary">Location Details <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
          </article>))}
        <p className="pt-4 text-sm text-muted-foreground">Services vary by location. Call <a href="tel:6045070829" className="text-link">604-507-0829</a> to confirm availability.</p>
      </div></section>
    </>
  );
}
