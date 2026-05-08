"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Intercepts clicks on internal anchor tags (href ending in .html or starting with /)
 * inside the document body and routes them through the Next.js client-side router
 * so that page-specific content rendered via dangerouslySetInnerHTML still gets
 * the same SPA behavior provided by next/link in static components.
 */
export default function LinkInterceptor() {
  const router = useRouter();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return;
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest("a");
      if (!anchor) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;

      const rawHref = anchor.getAttribute("href");
      if (!rawHref) return;

      // Pure hash links: let the browser handle the smooth scroll.
      if (rawHref.startsWith("#")) return;

      // External or protocol-prefixed links: let the browser handle.
      if (/^[a-z][a-z0-9+.-]*:/i.test(rawHref)) return;
      if (rawHref.startsWith("//")) return;

      let href = rawHref;
      if (href.endsWith(".html")) {
        const file = href.replace(/^\.?\/?/, "").replace(/\.html$/, "");
        href = file === "index" || file === "" ? "/" : "/" + file;
      } else if (!href.startsWith("/")) {
        href = "/" + href.replace(/^\.?\/?/, "");
      }

      e.preventDefault();
      router.push(href);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [router]);

  return null;
}
