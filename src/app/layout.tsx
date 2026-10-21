import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Readex_Pro } from "next/font/google";
import SiteHeader from "@/components/layout/SiteHeader";
import GlobalNavigation from "@/components/layout/GlobalNavigation";
import SupportDesk from "@/components/layout/SupportDesk";
import SiteFooter from "@/components/layout/SiteFooter";

const readexPro = Readex_Pro({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-readex",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Courthouse Computer Systems | Government Records Technology",
    template: "%s | Courthouse Computer Systems",
  },
  description: "Digitization, records software, and tailored AI and automation for government agencies.",
  openGraph: {
    title: "Courthouse Computer Systems",
    description: "A legacy of trust. A future of innovation.",
    type: "website",
  },
};

// Some translation extensions inject their tooltip UI into <head> at
// document_start. That changes Next's metadata tree before React can hydrate it.
// Run this tiny, synchronous guard before the Next runtime and remove only the
// extension's known private UI nodes.
const translatorHydrationGuard = `
(() => {
  const selector = ".translate-tooltip-mtz, .translate-button-mtz, audio.audio-for-speech";
  const clean = (root) => {
    if (root.nodeType === Node.ELEMENT_NODE && root.matches(selector)) {
      root.remove();
      return;
    }
    root.querySelectorAll?.(selector).forEach((node) => node.remove());
  };

  clean(document);

  const observer = new MutationObserver((records) => {
    for (const record of records) {
      record.addedNodes.forEach(clean);
    }
  });

  observer.observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener("load", () => {
    clean(document);
    observer.disconnect();
  }, { once: true });
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en" className={readexPro.variable}>
      <body>
        <Script
          id="translator-hydration-guard"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: translatorHydrationGuard }}
        />
        <SiteHeader />
        <GlobalNavigation />
        <SupportDesk />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
