import type { Metadata } from "next";
import "./globals.css";
import "./legacy.css";

import TopBar from "@/components/TopBar";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ClientScripts from "@/components/ClientScripts";
import LinkInterceptor from "@/components/LinkInterceptor";

export const metadata: Metadata = {
  title: "Negila Sene | Eco E-Commerce & BA Network",
  description:
    "Authentic agricultural produce sourced directly from Indian farmers, with structured BA opportunities and Stock Point support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        <SiteHeader />
        {children}
        <SiteFooter />
        <LinkInterceptor />
        <ClientScripts />
      </body>
    </html>
  );
}
