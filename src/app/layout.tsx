import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import "./legacy.css";

import TopBar from "@/components/TopBar";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ClientScripts from "@/components/ClientScripts";
import LinkInterceptor from "@/components/LinkInterceptor";
import FloatingActions from "@/components/FloatingActions";

export const metadata: Metadata = {
 title: "Negila Sene | E-Commerce & Member Network",
 description:
 "Authentic agricultural produce sourced directly from Indian farmers, with structured Member opportunities and Stock Point support.",
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
 <FloatingActions />
 <LinkInterceptor />
 <Suspense fallback={null}>
 <ClientScripts />
 </Suspense>
 </body>
 </html>
 );
}
