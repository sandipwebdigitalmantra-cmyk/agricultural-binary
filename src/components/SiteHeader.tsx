"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/legal-documents", label: "Legal Documents" },
  { href: "/shop", label: "Shop" },
];

const categoryLinks = [
  { href: "/seeds", label: "Seeds" },
  { href: "/sugar", label: "Sugar" },
  { href: "/rice", label: "Rice" },
  { href: "/wheat", label: "Wheat" },
  { href: "/pulses", label: "Pulses" },
  { href: "/spices", label: "Spices" },
  { href: "/oils", label: "Oils" },
  { href: "/tea", label: "Tea" },
];

const tailNav = [
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="header" id="home">
      <div className="container header-wrapper">
        <Link href="/" className="brand-logo" aria-label="Negila Sene home">
          <Image
            src="/assets/Negila Sene Logo.png"
            alt="Negila Sene logo"
            width={180}
            height={60}
            priority
            unoptimized
          />
        </Link>

        <form className="search-bar" role="search">
          <input
            type="search"
            placeholder="Search eco products, BA tools, accessories..."
          />
          <button type="submit" aria-label="Search">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M10.5 3a7.5 7.5 0 0 1 5.9 12.1l4.2 4.2-1.4 1.4-4.2-4.2A7.5 7.5 0 1 1 10.5 3zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11z" />
            </svg>
          </button>
        </form>

        <div className="header-actions">
          <Link href="/login" className="action-btn">
            <span className="action-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 12c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zm0 2c-4.4 0-8 2.2-8 5v2h16v-2c0-2.8-3.6-5-8-5z" />
              </svg>
            </span>
            <span>Login</span>
          </Link>
          <Link href="/wishlist" className="action-btn">
            <span className="action-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" />
              </svg>
            </span>
            <span>Wishlist</span>
            <b>0</b>
          </Link>
          <Link href="/cart" className="action-btn">
            <span className="action-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM7.2 14.5h7.5c.8 0 1.5-.4 1.9-1.1L21 5H6.2L5.8 3H2v2h2.2l2.2 11c.1.9.9 1.5 1.8 1.5H19v-2H7.2l-.4-1z" />
              </svg>
            </span>
            <span>Cart</span>
            <b id="cartCount">0</b>
          </Link>
          <button
            className="mobile-menu-toggle"
            type="button"
            aria-expanded="false"
            aria-controls="mainNav"
          >
            Menu
          </button>
        </div>
      </div>

      <nav className="main-nav" id="mainNav" aria-label="Primary navigation">
        <button className="nav-close" type="button" aria-label="Close menu">
          X
        </button>
        <div className="container">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={pathname === item.href ? "active" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="has-dropdown">
              <Link href="/eco-products">Categories</Link>
              <div className="dropdown-menu">
                {categoryLinks.map((c) => (
                  <Link key={c.href} href={c.href}>
                    {c.label}
                  </Link>
                ))}
              </div>
            </li>
            {tailNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={pathname === item.href ? "active" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
