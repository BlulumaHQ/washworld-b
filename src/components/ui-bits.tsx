import { Check, Minus, Plus } from "lucide-react";
import { useState, type ReactNode } from "react";

export function SubHero({ image, pos = "50% 50%", eyebrow, l1, l2, text, children }: { image: string; pos?: string; eyebrow: string; l1: string; l2: string; text: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-hero">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55" style={{ objectPosition: pos }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(5,10,22,.97) 0%, rgba(5,10,22,.85) 45%, rgba(5,10,22,.35) 100%)" }} />
      <div className="absolute inset-x-0 bottom-0 h-40" style={{ background: "linear-gradient(180deg, transparent, #070C1A)" }} />
      <div className="container-ww relative pt-[176px] pb-[110px]">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display" style={{ fontSize: "clamp(42px,5.6vw,76px)", lineHeight: 1 }}>{l1}<br /><span className="text-accent2">{l2}</span></h1>
        <p className="mt-6 max-w-[560px] text-lg text-body">{text}</p>
        {children}
      </div>
    </section>
  );
}

export function Intro({ eyebrow, title, text, light }: { eyebrow: string; title: ReactNode; text?: string; light?: boolean }) {
  return (
    <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
      <div><p className="eyebrow">{eyebrow}</p><h2 className="h2">{title}</h2></div>
      {text && <p className={`max-w-[380px] ${light ? "text-ink-body" : "text-muted-foreground"}`}>{text}</p>}
    </div>
  );
}

export function CheckItem({ on = true, children, dark }: { on?: boolean; children: ReactNode; dark?: boolean }) {
  return (
    <li className={`flex items-start gap-3 text-sm ${on ? "" : "line-through " + (dark ? "text-white/35" : "text-[#9AA3B5]")}`}>
      {on ? <Check className="h-4 w-4 mt-0.5 shrink-0 text-check" /> : <Minus className="h-4 w-4 mt-0.5 shrink-0 text-[#9AA3B5]" />}
      <span>{children}</span>
    </li>
  );
}

export function Faq({ items }: { items: [string, string][] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="border-b">
      {items.map(([q, a], i) => (
        <div key={q} className="border-t">
          <button className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
            {q}
            <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all ${open === i ? "rotate-45 bg-primary border-primary" : ""}`}><Plus className="h-4 w-4" /></span>
          </button>
          {open === i && <p className="pb-6 pr-16 text-body">{a}</p>}
        </div>
      ))}
    </div>
  );
}
