import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react";
import { EMAIL, PHONE, PHONE_HREF, SOCIALS } from "@/config";
import { locations } from "@/data/locations";
import { Logo } from "./Header";

const icons = [Facebook, Instagram, Linkedin];
export function Footer() {
  return (
    <footer className="bg-deep border-t">
      <div className="container-ww py-20 max-sm:py-14">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-14 border-b">
          <h2 className="display" style={{ fontSize: "clamp(36px,5vw,72px)" }}>Your car,<br /><span className="text-accent2">clean tonight.</span></h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/locations" className="btn btn-primary">Find a Location</Link>
            <a href={PHONE_HREF} className="btn btn-secondary">Call {PHONE}</a>
          </div>
        </div>
        <div className="grid gap-10 pt-14 md:grid-cols-2 lg:grid-cols-4">
          <div><Logo /><p className="mt-5 text-sm text-muted-foreground max-w-[260px]">Your 24/7 destination for premium car care across BC since 2001.</p></div>
          <div className="max-md:hidden">
            <h3 className="text-xs font-bold tracking-[.2em] uppercase text-accent2 mb-5">Menu</h3>
            <ul className="space-y-3 text-sm text-body">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/" hash="pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link to="/bundle-promotions" className="hover:text-white">Bundle Deals</Link></li>
              <li><Link to="/" hash="services" className="hover:text-white">Services</Link></li>
              <li><Link to="/" hash="faq" className="hover:text-white">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div className="max-md:hidden">
            <h3 className="text-xs font-bold tracking-[.2em] uppercase text-accent2 mb-5">Locations</h3>
            <ul className="space-y-3 text-sm text-body">
              {locations.map((l) => <li key={l.slug}><Link to="/locations/$slug" params={{ slug: l.slug }} className="hover:text-white">{l.short}</Link></li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold tracking-[.2em] uppercase text-accent2 mb-5">Contact</h3>
            <ul className="space-y-3 text-sm text-body">
              <li><a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-white"><Mail className="h-4 w-4" />{EMAIL}</a></li>
              <li><a href={PHONE_HREF} className="flex items-center gap-2 hover:text-white"><Phone className="h-4 w-4" />{PHONE}</a></li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" />13231 72 Ave, Surrey BC</li>
            </ul>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map((s, i) => { const I = icons[i]; return <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="flex h-11 w-11 items-center justify-center rounded-full border hover:border-primary hover:text-accent2"><I className="h-4 w-4" /></a>; })}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container-ww flex flex-col sm:flex-row justify-between gap-2 py-6 text-xs text-muted-foreground">
          <span>© 2026 Washworld. All rights reserved.</span>
          <span>Web design by <a href="https://sonykundesign.com" target="_blank" rel="noreferrer" className="text-link hover:text-white">Sonykun Design</a></span>
        </div>
      </div>
    </footer>
  );
}
