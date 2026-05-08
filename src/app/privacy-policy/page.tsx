import BodyClass from "@/components/BodyClass";

// Privacy Policy | Negila Sene
// Auto-generated from Frontend-design/privacy-policy.html
// Route: /privacy-policy
const html = `
    <section class="page-hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span aria-hidden="true">/</span>
          <a href="/legal-documents">Legal</a><span aria-hidden="true">/</span>
          <span>Privacy Policy</span>
        </nav>
        <h1>Privacy <span>Policy</span></h1>
        <p>How Negila Sene collects, uses, stores and protects the personal information of customers, Members and Stock Points.</p>
      </div>
    </section>

    <section class="section legal-content-section">
      <div class="container">
        <article class="legal-doc">
          <p class="legal-effective">Last updated: 7 May 2026</p>

          <h2>1. Introduction</h2>
          <p>Negila Sene ("we", "our", "us") operates a nationwide agricultural e-commerce and Member network. This Privacy Policy describes how we collect, use, store and protect your personal information when you visit our website, register as a Member, place an order, or engage with our Stock Point network. We comply with the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023.</p>

          <h2>2. Information We Collect</h2>
          <p>We collect the following categories of personal information:</p>
          <ul class="legal-doc-list">
            <li><strong>Identity &amp; contact details</strong> &mdash; name, email, mobile number, postal address, and (for Members) sponsor and placement information.</li>
            <li><strong>Order &amp; transaction data</strong> &mdash; products purchased, prices, payment method, billing/shipping address, GST details (if any).</li>
            <li><strong>Account &amp; activity data</strong> &mdash; login credentials, device/browser, IP address, pages visited, items added to wishlist or cart.</li>
            <li><strong>Communication data</strong> &mdash; messages sent through our contact forms, customer-care queries, and Stock Point chat logs.</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use your data to:</p>
          <ul class="legal-doc-list">
            <li>Process and fulfil orders, dispatch products from the nearest Stock Point, and confirm delivery.</li>
            <li>Manage your Member account, calculate Activation Bonus, Repurchase Bonus and Monthly Commission, and credit earnings.</li>
            <li>Provide customer support, answer queries and resolve disputes within 90 days through our internal grievance officer.</li>
            <li>Send transactional updates (order status, payment receipts, Member payouts) and, with your consent, marketing communications about new produce and offers.</li>
            <li>Comply with statutory obligations under the IT Act, GST Act, Direct Selling Guidelines 2021 and other applicable laws.</li>
          </ul>

          <h2>4. Sharing of Information</h2>
          <p>We never sell your personal data. We share information only in the following situations:</p>
          <ul class="legal-doc-list">
            <li><strong>Stock Points &amp; logistics partners</strong> &mdash; to dispatch and deliver your order to your address.</li>
            <li><strong>Payment processors</strong> &mdash; to process transactions securely; we do not store full card or UPI credentials on our servers.</li>
            <li><strong>Statutory authorities</strong> &mdash; when required to comply with a lawful order, summons or legal process.</li>
          </ul>

          <h2>5. Data Storage &amp; Security</h2>
          <p>Your data is stored on servers located in India and is protected by industry-standard safeguards including TLS-encrypted transmission, encryption at rest, role-based access controls and regular security audits. We retain personal data only for as long as required to provide services or to satisfy legal obligations.</p>

          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul class="legal-doc-list">
            <li>Access, correct or update your personal information.</li>
            <li>Request deletion of your account and associated data, subject to applicable retention requirements.</li>
            <li>Withdraw consent for marketing communications at any time.</li>
            <li>Lodge a complaint with our Grievance Officer at <strong>privacy@negilasene.com</strong>.</li>
          </ul>

          <h2>7. Cookies &amp; Tracking</h2>
          <p>We use cookies and similar technologies to keep you signed in, remember your cart, and understand how visitors use the website. You can disable non-essential cookies through your browser settings without affecting core functionality.</p>

          <h2>8. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Material changes will be communicated via email and through a notice on this page at least 14 days before they take effect.</p>

          <h2>9. Contact</h2>
          <p>For any privacy-related question, write to <strong>privacy@negilasene.com</strong> or call <strong>+91 98765 43210</strong>. Our Grievance Officer responds within two working days.</p>

          <div class="legal-contact-note">
            <p>This Privacy Policy is effective from 7 May 2026 and supersedes any earlier version.</p>
            <a href="/contact" class="btn-gold">Contact Privacy Team
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8.6 16.6 4.6-4.6-4.6-4.6L10 6l6 6-6 6z"/></svg>
            </a>
          </div>
        </article>
      </div>
    </section>
  `;

export default function Page() {
  return (
    <>
      <BodyClass className="legal" />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
