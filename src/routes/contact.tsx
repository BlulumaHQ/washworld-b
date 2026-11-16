import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { EMAIL, FORMSPREE_ENDPOINT, pageHead, PHONE, PHONE_HREF, SOCIALS } from "@/config";
import { locations } from "@/data/locations";
import { SubHero } from "@/components/ui-bits";

export const Route = createFileRoute("/contact")({
  head: () => pageHead("Contact | Washworld", "Questions about a wash, a bundle or a location? Call 604-507-0829, email info@washworld.ca or send Washworld a message.", "/contact"),
  component: Contact,
});

const field = "mt-2 w-full rounded-2xl border border-white/10 bg-[#070C1A] px-4 py-3.5 text-white placeholder:text-muted-foreground focus:border-primary focus:outline-none";

function Contact() {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); const form = e.currentTarget; setState("sending");
    try {
      const r = await fetch(FORMSPREE_ENDPOINT, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      if (!r.ok) throw new Error(); setState("ok"); form.reset();
    } catch { setState("err"); }
  }
  return (
    <>
      <SubHero image="/images/maple-ridge.webp" eyebrow="Contact" l1="We're here" l2="around the clock." text="Questions about a wash, a bundle or a location? Reach out and our team will get back to you." />
      <section className="pb-[120px] max-sm:pb-[72px]"><div className="container-ww grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4">
          {[[Phone,"Call",PHONE,PHONE_HREF],[Mail,"Email",EMAIL,`mailto:${EMAIL}`],[MapPin,"Head office","13231 72 Ave, Surrey BC",null]].map(([I,k,v,h]) => { const Ic = I as typeof Phone; const c = <><Ic className="h-5 w-5 text-accent2" /><div className="mt-4 text-xs uppercase tracking-[.16em] text-muted-foreground">{k as string}</div><div className="display mt-1 text-[28px] max-sm:text-2xl break-words">{v as string}</div></>;
            return h ? <a key={k as string} href={h as string} className="lift block rounded-[24px] border bg-surface p-7">{c}</a> : <div key={k as string} className="rounded-[24px] border bg-surface p-7">{c}</div>; })}
          <div className="rounded-[24px] p-7" style={{ background: "radial-gradient(120% 140% at 85% 20%, #1F5FD0 0%, #0E2A66 55%, #0A1430 100%)" }}>
            <div className="display text-2xl">Follow Washworld</div>
            <div className="mt-5 flex flex-wrap gap-2">{SOCIALS.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="btn btn-sm btn-secondary">{s.label}</a>)}</div>
          </div>
        </div>
        <form onSubmit={submit} className="rounded-[28px] border bg-surface p-11 max-sm:p-6">
          <h2 className="display text-3xl">Send us a message</h2>
          <p className="mt-2 text-muted-foreground">We usually reply within one business day.</p>
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold">Name<input required name="name" className={field} /></label>
            <label className="text-sm font-semibold">Email<input required type="email" name="email" className={field} /></label>
            <label className="text-sm font-semibold">Phone (optional)<input type="tel" name="phone" className={field} /></label>
            <label className="text-sm font-semibold">Location<select name="location" className={field}><option>Any location</option>{locations.map((l) => <option key={l.slug}>{l.name}</option>)}</select></label>
            <label className="text-sm font-semibold sm:col-span-2">Message<textarea required name="message" rows={5} className={field} /></label>
          </div>
          {state === "ok" && <p className="mt-6 rounded-2xl bg-mint/10 p-4 text-mint-text" role="status">Thanks — we'll be in touch soon.</p>}
          {state === "err" && <p className="mt-6 rounded-2xl bg-destructive/15 p-4 text-[#FFB4B4]" role="alert">Something went wrong. Please try again or call {PHONE}.</p>}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t pt-6">
            <p className="text-sm text-muted-foreground">For urgent issues at a wash, please call.</p>
            <button type="submit" disabled={state === "sending"} className="btn btn-primary disabled:opacity-60">{state === "sending" ? "Sending…" : "Send Message"}</button>
          </div>
        </form>
      </div></section>
    </>
  );
}
