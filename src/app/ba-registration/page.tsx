import BodyClass from "@/components/BodyClass";

// Become a Brand Ambassador | BA Registration | Negila Sene
// Auto-generated from Frontend-design/ba-registration.html
// Route: /ba-registration
const html = `
    <section class="page-hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">/</span>
          <span>Become BA</span>
        </nav>
        <h1>Become a <span>Brand Ambassador</span></h1>
        <p>Join the Negila Sene network. Activate with company-supplied accessories and start earning through structured Left/Right placement.</p>
      </div>
    </section>

    <section class="section">
      <div class="container ba-grid">
        <form class="registration-form">
          <span class="section-badge">BA Registration</span>
          <h2>Register <span>Your Profile</span></h2>
          <p>Complete the form below and our Stock Point team will activate your BA account within 24 hours.</p>

          <label>
            Full Name
            <input type="text" name="fullname" placeholder="Enter your full name" required>
          </label>

          <label>
            Email Address
            <input type="email" name="email" placeholder="you@example.com" required>
          </label>

          <label>
            Mobile Number
            <input type="tel" name="phone" placeholder="+91 98765 43210" required>
          </label>

          <label>
            City
            <input type="text" name="city" placeholder="Your city" required>
          </label>

          <label>
            State
            <select name="state" required>
              <option value="">Select your state</option>
              <option>Andhra Pradesh</option>
              <option>Karnataka</option>
              <option>Kerala</option>
              <option>Tamil Nadu</option>
              <option>Telangana</option>
              <option>Maharashtra</option>
              <option>Gujarat</option>
              <option>Delhi</option>
              <option>Uttar Pradesh</option>
              <option>West Bengal</option>
              <option>Other</option>
            </select>
          </label>

          <label>
            Sponsor BA ID <small>(optional)</small>
            <input type="text" name="sponsor" placeholder="e.g. NS-12345">
          </label>

          <fieldset>
            <legend>Placement Side</legend>
            <label><input type="radio" name="side" value="left" required> Left</label>
            <label><input type="radio" name="side" value="right" required> Right</label>
          </fieldset>

          <label class="filter-check">
            <input type="checkbox" required>
            I agree to the Terms &amp; Conditions and BA Code of Conduct.
          </label>

          <button class="btn-gold" type="submit">
            Submit Registration
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8.6 16.6 4.6-4.6-4.6-4.6L10 6l6 6-6 6z"/></svg>
          </button>
        </form>

        <aside>
          <span class="section-badge">BA Benefits</span>
          <h2>Why <span>Join Us</span></h2>
          <p>Negila Sene Brand Ambassadors enjoy a clear, company-backed earning structure plus full Stock Point support.</p>

          <div class="term-grid">
            <article>
              <strong>Activation Bonus (2:1)</strong>
              <p>Earn an Activation Bonus on every 2:1 matching pair in your placement tree.</p>
            </article>
            <article>
              <strong>Repurchase Bonus on 500 PV</strong>
              <p>Repurchase Bonus credited on every 500 PV achieved on Left and Right legs.</p>
            </article>
            <article>
              <strong>Monthly Commission</strong>
              <p>Stay active with minimum 50 PV per month to qualify for the Monthly Commission pool.</p>
            </article>
            <article>
              <strong>No-PV Accessories</strong>
              <p>Cap, T-shirt, Stickers, Badges and more supplied directly by the company.</p>
            </article>
            <article>
              <strong>Stock Point Support</strong>
              <p>Local SPs handle your inventory, training and onboarding queries.</p>
            </article>
            <article>
              <strong>Need Help?</strong>
              <p>Call <strong>+91 98765 43210</strong> or email <strong>support@negilasene.com</strong> &mdash; our BA care team responds within one working day.</p>
            </article>
          </div>
        </aside>
      </div>
    </section>
  `;

export default function Page() {
  return (
    <>
      <BodyClass className="ba-reg" />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
