import Link from "next/link";
import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <Image
              src="/assets/Negila Sene Logo.png"
              alt="Negila Sene logo"
              width={180}
              height={60}
              unoptimized
            />
          </div>
          <p>
            Negila Sene is a premium agricultural e-commerce network, sourcing
            authentic produce directly from Indian farmers.
          </p>
          <div className="footer-social" aria-label="Social links">
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 8h3V4h-3c-3.1 0-5 1.9-5 5v2H6v4h3v7h4v-7h3.3l.7-4h-4V9c0-.7.3-1 1-1z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.5 2h9C19.5 2 22 4.5 22 7.5v9c0 3-2.5 5.5-5.5 5.5h-9C4.5 22 2 19.5 2 16.5v-9C2 4.5 4.5 2 7.5 2zm0 2C5.6 4 4 5.6 4 7.5v9C4 18.4 5.6 20 7.5 20h9c1.9 0 3.5-1.6 3.5-3.5v-9C20 5.6 18.4 4 16.5 4h-9zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.2-2.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21.6 7.2c-.2-1.1-1.1-1.9-2.1-2.1C17.7 4.7 12 4.7 12 4.7s-5.7 0-7.5.4c-1 .2-1.9 1-2.1 2.1C2 9 2 12 2 12s0 3 .4 4.8c.2 1.1 1.1 1.9 2.1 2.1 1.8.4 7.5.4 7.5.4s5.7 0 7.5-.4c1-.2 1.9-1 2.1-2.1.4-1.8.4-4.8.4-4.8s0-3-.4-4.8zM10 15.3V8.7l5.7 3.3-5.7 3.3z" />
              </svg>
            </a>
            <a href="#" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.1 2C6.6 2 2.2 6.4 2.2 11.9c0 1.8.5 3.5 1.4 5L2 22l5.3-1.5c1.4.8 3.1 1.2 4.8 1.2 5.5 0 9.9-4.4 9.9-9.9S17.6 2 12.1 2zm0 17.8c-1.5 0-2.9-.4-4.1-1.2l-.3-.2-3.1.9.9-3-.2-.3c-.8-1.2-1.3-2.7-1.3-4.2C4 7.5 7.6 3.9 12.1 3.9s8 3.6 8 8-3.6 7.9-8 7.9zm4.5-5.9c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.2.2-.3.2-.6.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.3 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.2-.3-.2-.5-.3z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/shop">All Products</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

        <div className="footer-col">
          <h3>Categories</h3>
          <Link href="/seeds">Seeds</Link>
          <Link href="/sugar">Sugar</Link>
          <Link href="/rice">Rice</Link>
          <Link href="/wheat">Wheat</Link>
          <Link href="/pulses">Pulses</Link>
          <Link href="/spices">Spices</Link>
          <Link href="/oils">Oils</Link>
          <Link href="/tea">Tea</Link>
        </div>

        <div className="footer-col">
          <h3>Legal</h3>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-conditions">Terms &amp; Conditions</Link>
          <Link href="/legal-documents">Legal Documents</Link>
          <Link href="/contact">Contact Support</Link>
        </div>

        <div className="footer-col footer-contact">
          <h3>Contact Info</h3>
          <p>
            <span className="footer-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2a8 8 0 0 0-8 8c0 5.5 8 12 8 12s8-6.5 8-12a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
            </span>
            123 Business Tower, MG Road, New Delhi - 110001
          </p>
          <p>
            <span className="footer-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.7 5.1 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1.3.4 2.6.6 4 .6.7 0 1.2.5 1.2 1.2v3.5c0 .7-.5 1.2-1.2 1.2C10.4 22 2 13.6 2 3.2 2 2.5 2.5 2 3.2 2h3.6C7.5 2 8 2.5 8 3.2c0 1.4.2 2.8.6 4 .1.4 0 .9-.3 1.2l-1.7 2.4z" />
              </svg>
            </span>
            +91 98765 43210
          </p>
          <p>
            <span className="footer-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 5h18c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1zm9 8 8-6H4l8 6z" />
              </svg>
            </span>
            support@negilasene.com
          </p>
          <p>
            <span className="footer-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 11h-5V7h2v4h3v2z" />
              </svg>
            </span>
            Mon - Sat: 9:00 AM - 7:00 PM
          </p>
        </div>
      </div>

      <div className="footer-bottom container">
        <span>
          &copy; 2026 Negila Sene. All Rights Reserved. Designed By Web Digital
          Mantra pvt ltd
        </span>
        <div className="footer-pay" aria-label="Accepted payment methods">
          <span className="pay-chip" aria-label="Visa">
            <svg viewBox="0 0 48 16" aria-hidden="true">
              <text
                x="24"
                y="13"
                textAnchor="middle"
                fontFamily="Arial Black, Arial, sans-serif"
                fontSize="13"
                fontWeight="900"
                fontStyle="italic"
                fill="#1a1f71"
                letterSpacing="1"
              >
                VISA
              </text>
            </svg>
          </span>
          <span className="pay-chip" aria-label="Mastercard">
            <svg viewBox="0 0 40 24" aria-hidden="true">
              <circle cx="16" cy="12" r="8" fill="#eb001b" />
              <circle cx="24" cy="12" r="8" fill="#f79e1b" fillOpacity="0.92" />
              <path
                d="M20 6.4a8 8 0 0 1 0 11.2 8 8 0 0 1 0-11.2z"
                fill="#ff5f00"
              />
            </svg>
          </span>
          <span className="pay-chip" aria-label="PayPal">
            <svg viewBox="0 0 60 16" aria-hidden="true">
              <text
                x="30"
                y="13"
                textAnchor="middle"
                fontFamily="Arial, sans-serif"
                fontSize="12"
                fontWeight="900"
                fontStyle="italic"
              >
                <tspan fill="#003087">Pay</tspan>
                <tspan fill="#009cde">Pal</tspan>
              </text>
            </svg>
          </span>
          <span className="pay-chip" aria-label="Google Pay">
            <svg viewBox="0 0 60 16" aria-hidden="true">
              <text x="6" y="13" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700">
                <tspan fill="#4285F4">G</tspan>
                <tspan fill="#EA4335"> </tspan>
                <tspan fill="#5f6368" fontSize="11" fontWeight="500" dx="2">
                  Pay
                </tspan>
              </text>
            </svg>
          </span>
        </div>
      </div>

      <a href="#home" className="back-to-top" aria-label="Back to top">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 4 4 12h5v8h6v-8h5z" />
        </svg>
      </a>
    </footer>
  );
}
