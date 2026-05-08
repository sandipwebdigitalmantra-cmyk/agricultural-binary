import BodyClass from "@/components/BodyClass";

// Business Opportunity | Member Income Plan | Negila Sene
// Auto-generated from Frontend-design/business-opportunity.html
// Route: /business-opportunity
const html = `
    <section class="page-hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">/</span>
          <span>Business Opportunity</span>
        </nav>
        <h1>Member <span>Earning Structure</span></h1>
        <p>A transparent, three-stage income plan built for committed Members.</p>
      </div>
    </section>

    <section class="section income-section" id="income">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Income Info</span>
          <h2>Member <span>Earning Structure</span></h2>
          <p>Displayed clearly for Member onboarding.</p>
        </div>
        <div class="income-grid">
          <article class="income-card"><b>01</b><h3>Activation Bonus</h3><p>Activation Bonus (2:1).</p></article>
          <article class="income-card"><b>02</b><h3>Repurchase Bonus</h3><p>Repurchase Bonus on 500 points Left &amp; Right.</p></article>
          <article class="income-card"><b>03</b><h3>Monthly Commission</h3><p>Monthly Commission eligibility requires minimum 50 points.</p></article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Eligibility &amp; Rules</span>
          <h2>How <span>You Qualify</span></h2>
          <p>Simple, transparent conditions every Member must meet to remain active and earn from the plan.</p>
        </div>
        <div class="term-grid">
          <article>
            <strong>Active Member Status</strong>
            <p>Maintain a minimum of 50 points in personal repurchase every calendar month to stay active.</p>
          </article>
          <article>
            <strong>Activation Bonus (2:1)</strong>
            <p>Sponsor at least one Left and one Right Member. The Activation Bonus is paid on every 2:1 matching pair built in your placement tree.</p>
          </article>
          <article>
            <strong>Repurchase Bonus</strong>
            <p>Repurchase Bonus is calculated on every 500 points achieved on the Left leg and 500 points on the Right leg. Carry-forward applies to unmatched volume.</p>
          </article>
          <article>
            <strong>Monthly Commission</strong>
            <p>Active Members with minimum 50 points qualify for the Monthly Commission pool, distributed on the 10th of every month.</p>
          </article>
          <article>
            <strong>Stock Point Support</strong>
            <p>All bonuses, commissions and accessory orders are processed through your local Stock Point for transparent tracking.</p>
          </article>
          <article>
            <strong>Code of Conduct</strong>
            <p>Members must follow the Negila Sene Code of Conduct. Misrepresentation of the income plan can result in deactivation.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="newsletter-section" id="login">
      <div class="container">
        <div class="newsletter-box">
          <span class="newsletter-blob newsletter-blob-1" aria-hidden="true"></span>
          <span class="newsletter-blob newsletter-blob-2" aria-hidden="true"></span>
          <div class="newsletter-info">
            <span class="newsletter-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3zm-1 14-4-4 1.4-1.4L11 13.2l4.6-4.6L17 10l-6 6z"/></svg>
            </span>
            <h2>Ready to start? Register as a Member</h2>
            <p>Join the Negila Sene network today or talk to a Stock Point near you for guided onboarding.</p>
          </div>
          <div class="newsletter-form">
            <a class="btn-gold" href="/ba-registration">
              Register Now
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8.6 16.6 4.6-4.6-4.6-4.6L10 6l6 6-6 6z"/></svg>
            </a>
            <a class="btn-gold" href="/stock-point">
              Talk to a SP
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8.6 16.6 4.6-4.6-4.6-4.6L10 6l6 6-6 6z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;

export default function Page() {
  return (
    <>
      <BodyClass className="biz" />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
