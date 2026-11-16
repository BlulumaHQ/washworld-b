import { Link, useLocation } from "@tanstack/react-router";
import { Droplet, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { PHONE, PHONE_HREF } from "@/config";

const nav = [
  { label: "Wash Types", to: "/", hash: "wash" },
  { label: "Pricing", to: "/", hash: "pricing" },
  { label: "Bundle Deals", to: "/bundle-promotions" },
  { label: "Locations", to: "/locations" },
  { label: "Contact", to: "/contact" },
] as const;

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Washworld home">
      <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full border-2 border-[#3B9BFF] shadow-[0_0_16px_rgba(59,155,255,.6)]">
        <Droplet className="h-4 w-4 text-accent2" />
      </span>
      <span className="wordmark">WASHWORLD</span>
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f(); window.addEventListener("scroll", f); return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => setOpen(false), [pathname]);
  const active = (to: string, hash?: string) => !hash && to !== "/" && pathname.startsWith(to);
  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-colors ${scrolled ? "bg-[#070C1A]/90 backdrop-blur-lg border-b" : "bg-transparent"}`}>
        <div className="container-ww flex h-20 items-center justify-between gap-6">
          <Logo />
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main">
            {nav.map((n) => (
              <Link key={n.label} to={n.to} {...("hash" in n ? { hash: n.hash } : {})}
                className={`py-2 text-sm font-medium border-b-2 transition-colors ${active(n.to, "hash" in n ? n.hash : undefined) ? "text-white border-primary" : "text-nav border-transparent hover:text-white"}`}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-5">
            <a href={PHONE_HREF} className="flex items-center gap-2 text-sm font-semibold text-soft hover:text-white"><Phone className="h-4 w-4" />{PHONE}</a>
            <Link to="/locations" className="btn btn-sm btn-white">Find a Location</Link>
          </div>
          <button className="lg:hidden flex h-11 w-11 items-center justify-center rounded-full border" aria-label="Open menu" onClick={() => setOpen(true)}><Menu className="h-5 w-5" /></button>
        </div>
      </header>
      {open && (
        <div className="fixed inset-0 z-[60] bg-[#070C1A] flex flex-col">
          <div className="container-ww flex h-20 items-center justify-between w-full">
            <Logo />
            <button className="flex h-11 w-11 items-center justify-center rounded-full border" aria-label="Close menu" onClick={() => setOpen(false)}><X className="h-5 w-5" /></button>
          </div>
          <nav className="container-ww flex flex-col gap-2 pt-8 w-full" aria-label="Mobile">
            {nav.map((n) => (
              <Link key={n.label} to={n.to} {...("hash" in n ? { hash: n.hash } : {})} onClick={() => setOpen(false)} className="display text-3xl py-3 border-b">{n.label}</Link>
            ))}
            <a href={PHONE_HREF} className="mt-8 flex items-center gap-2 text-lg font-semibold"><Phone className="h-5 w-5" />{PHONE}</a>
            <Link to="/locations" className="btn btn-primary mt-6">Find a Location</Link>
          </nav>
        </div>
      )}
    </>
  );
}
