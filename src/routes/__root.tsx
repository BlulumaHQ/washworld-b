import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts, type ErrorComponentProps } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const noindex = `(function(){var h=location.hostname;if(/(lovable\\.app|lovableproject\\.com|workers\\.dev|pages\\.dev|netlify\\.app)$/.test(h)){var m=document.createElement('meta');m.name='robots';m.content='noindex, nofollow';document.head.appendChild(m);}})();`;

function NotFoundComponent() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-hero flex items-center">
      <img src="/images/hero-b.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-45" style={{ objectPosition: "70% 50%" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(5,10,22,.97) 0%, rgba(5,10,22,.8) 50%, rgba(5,10,22,.3) 100%)" }} />
      <div className="container-ww relative w-full pt-24">
        <div className="display" style={{ fontStretch: "125%", fontSize: "clamp(96px,14vw,200px)", color: "rgba(90,174,255,.9)", lineHeight: 1 }}>404</div>
        <h1 className="h2 mt-4">This bay is empty.</h1>
        <p className="mt-5 max-w-[480px] text-lg text-body">The page you're looking for has moved or doesn't exist. Let's get you back on the road.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/" className="btn btn-primary">Back to Home</Link>
          <Link to="/locations" className="btn btn-secondary">Find a Location</Link>
        </div>
      </div>
    </section>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center px-4 text-center">
      <div><h1 className="h2">This page didn't load</h1>
        <button onClick={() => { router.invalidate(); reset(); }} className="btn btn-primary mt-6">Try again</button></div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Washworld | 24/7 Car Wash in BC" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Washworld" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@100..125,400..900&family=Inter:wght@400;500;600;700&display=swap" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    ],
    scripts: [{ children: noindex }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (<html lang="en"><head><HeadContent /></head><body>{children}<Scripts /></body></html>);
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main><Outlet /></main>
      <Footer />
    </QueryClientProvider>
  );
}
