import BodyClass from "@/components/BodyClass";

// Terms &amp; Conditions | Negila Sene
// Auto-generated from Frontend-design/terms-conditions.html
// Route: /terms-conditions
const html = `
 <section class="page-hero">
 <div class="container">
 <nav class="breadcrumb" aria-label="Breadcrumb">
 <a href="/">Home</a><span aria-hidden="true">/</span>
 <a href="/legal-documents">Legal</a><span aria-hidden="true">/</span>
 <span>Terms &amp; Conditions</span>
 </nav>
 <h1>Terms &amp; <span>Conditions</span></h1>
 <p>The binding terms that govern your use of the Negila Sene website, your Member membership, and every product purchase made through our network.</p>
 </div>
 </section>

 <section class="section legal-content-section">
 <div class="container">
 <article class="legal-doc">
 <p class="legal-effective">Last updated: 7 May 2026</p>

 <h2>1. Acceptance of Terms</h2>
 <p>By accessing the Negila Sene website, registering as a Member, or placing an order through any Stock Point, you agree to these Terms &amp; Conditions, our Privacy Policy, and the Member Code of Conduct. If you do not accept these terms, please do not use our services.</p>

 <h2>2. Eligibility</h2>
 <p>You must be at least 18 years old and a resident of India to register as a Member or purchase products. By accepting these terms you confirm that the information you provide is accurate and complete.</p>

 <h2>3. Account &amp; Member Registration</h2>
 <ul class="legal-doc-list">
 <li>Member registration is <strong>free</strong>; no joining fee or compulsory product purchase is required.</li>
 <li>You are responsible for keeping your login credentials confidential and for all activity under your account.</li>
 <li>Each user may hold only one active Member account at any time.</li>
 </ul>

 <h2>4. Products &amp; Pricing</h2>
 <p>All product descriptions, prices and availability are subject to change without prior notice. produce and agricultural products may vary slightly in colour, weight or texture due to natural variation, which is not a manufacturing defect. Prices are inclusive of applicable GST unless stated otherwise.</p>

 <h2>5. Orders &amp; Payment</h2>
 <ul class="legal-doc-list">
 <li>An order is confirmed only after successful payment and a confirmation email/SMS from Negila Sene.</li>
 <li>We accept UPI, debit cards, credit cards, net banking and select wallets through our secure payment gateway.</li>
 <li>We reserve the right to cancel an order if we suspect fraudulent activity, pricing errors, or unavailability at the dispatching Stock Point.</li>
 </ul>

 <h2>6. Shipping &amp; Delivery</h2>
 <p>Orders are dispatched from the nearest Stock Point across our 28-state network. Standard delivery is 3&ndash;7 working days depending on location. Free shipping applies to orders above Rs.555. Detailed shipping rules are listed in our Shipping Policy.</p>

 <h2>7. Returns &amp; Refunds</h2>
 <ul class="legal-doc-list">
 <li>products and Member tools may be returned in original, saleable condition within <strong>30 days</strong> of delivery through your local Stock Point.</li>
 <li>Refunds are credited to the original payment method within 7&ndash;10 working days of receiving the returned item.</li>
 <li>Perishable produce and personalised items are non-returnable except in case of damage in transit.</li>
 </ul>

 <h2>8. Member Income Plan</h2>
 <p>Members earn through three components &mdash; the <strong>Activation Bonus (2:1)</strong> on every matching pair in the placement tree, a <strong>Repurchase Bonus</strong> on every 500 points achieved on Left and Right legs, and a <strong>Monthly Commission</strong> for Members maintaining a minimum of <strong>50 points</strong> per month. All earnings are tied to genuine product sales; recruitment alone does not generate income. Detailed disclosures are available in the Income Disclosure document.</p>

 <h2>9. Code of Conduct</h2>
 <p>Members must not make false income claims, charge upfront fees, misrepresent products, defame competitors or fellow members, or operate any pyramid-style scheme. Violations may lead to suspension or termination of your Member account.</p>

 <h2>10. Intellectual Property</h2>
 <p>All content on this website &mdash; including the Negila Sene logo, product photographs, copy and graphics &mdash; is the property of Negila Sene or its licensors. You may not reproduce, distribute or use any of this content for commercial purposes without our prior written consent.</p>

 <h2>11. Limitation of Liability</h2>
 <p>Negila Sene's total liability for any claim arising out of or connected with these Terms is limited to the value of the order in question. We are not liable for any indirect, incidental, or consequential damages.</p>

 <h2>12. Dispute Resolution</h2>
 <p>Any dispute will first be referred to our internal Grievance Officer, who will resolve the matter within 90 days. If unresolved, disputes are subject to the exclusive jurisdiction of the courts at New Delhi, India.</p>

 <h2>13. Changes to These Terms</h2>
 <p>We may revise these Terms &amp; Conditions at any time. The "Last updated" date at the top of this page will reflect the most recent change. Continued use of the website after changes constitutes acceptance of the revised Terms.</p>

 <h2>14. Contact</h2>
 <p>For any question about these Terms, write to <strong>legal@negilasene.com</strong> or call <strong>+91 98765 43210</strong>. We respond within two working days.</p>

 <div class="legal-contact-note">
 <p>These Terms &amp; Conditions are effective from 7 May 2026 and supersede any earlier version.</p>
 <a href="/contact" class="btn-gold">Contact Legal Team
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
