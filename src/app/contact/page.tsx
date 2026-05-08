import BodyClass from "@/components/BodyClass";

// Contact | Negila Sene - Eco E-Commerce & BA Network
// Auto-generated from Frontend-design/contact.html
// Route: /contact
const html = `
    <section class="page-hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">/</span>
          <span>Contact</span>
        </nav>
        <h1>Contact <span>Us</span></h1>
        <p>Have questions about our products or business opportunity? We're here to help.</p>
      </div>
    </section>

    <section class="section contact-section">
      <div class="container contact-grid">
        <div class="contact-info-stack">
          <div class="contact-info-card">
            <span class="contact-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a8 8 0 0 0-8 8c0 5.5 8 12 8 12s8-6.5 8-12a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
            </span>
            <div>
              <h3>Address</h3>
              <p>123 Business Tower, MG Road, New Delhi - 110001</p>
            </div>
          </div>
          <div class="contact-info-card">
            <span class="contact-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.7 5.1 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1.3.4 2.6.6 4 .6.7 0 1.2.5 1.2 1.2v3.5c0 .7-.5 1.2-1.2 1.2C10.4 22 2 13.6 2 3.2 2 2.5 2.5 2 3.2 2h3.6C7.5 2 8 2.5 8 3.2c0 1.4.2 2.8.6 4 .1.4 0 .9-.3 1.2l-1.7 2.4z"/></svg>
            </span>
            <div>
              <h3>Phone</h3>
              <p><a href="tel:+919876543210">+91 98765 43210</a></p>
            </div>
          </div>
          <div class="contact-info-card">
            <span class="contact-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1zm9 8 8-6H4l8 6zm-3.1-.5L4 16.2V17h16v-.8l-4.9-3.7-2.5 1.9c-.4.3-.9.3-1.2 0l-2.5-1.9z"/></svg>
            </span>
            <div>
              <h3>Email</h3>
              <p><a href="mailto:support@negilasene.com">support@negilasene.com</a></p>
            </div>
          </div>
          <div class="contact-info-card">
            <span class="contact-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 11h-5V7h2v4h3v2z"/></svg>
            </span>
            <div>
              <h3>Working Hours</h3>
              <p>Mon - Sat: 9:00 AM - 7:00 PM<br>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <form class="registration-form contact-form">
          <h2>Send Us <span>A Message</span></h2>

          <div class="form-row">
            <label>
              Name
              <input type="text" name="fullname" placeholder="Your full name" required>
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@example.com" required>
            </label>
          </div>

          <div class="form-row">
            <label>
              Phone
              <input type="tel" name="phone" placeholder="+91 98765 43210" required>
            </label>
            <label>
              Subject
              <select name="subject" required>
                <option value="">Select a subject</option>
                <option>General Inquiry</option>
                <option>BA Registration</option>
                <option>Stock Point</option>
                <option>Product</option>
                <option>Complaint</option>
              </select>
            </label>
          </div>

          <label>
            Message
            <textarea name="message" rows="3" placeholder="How can we help?" required></textarea>
          </label>

          <p class="form-status" aria-live="polite"></p>

          <button class="btn-gold" type="submit">
            Send Message
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8.6 16.6 4.6-4.6-4.6-4.6L10 6l6 6-6 6z"/></svg>
          </button>
        </form>
      </div>
    </section>

    <section class="newsletter-section" id="login">
      <div class="container">
        <div class="newsletter-box">
          <span class="newsletter-blob newsletter-blob-1" aria-hidden="true"></span>
          <span class="newsletter-blob newsletter-blob-2" aria-hidden="true"></span>
          <div class="newsletter-info">
            <span class="newsletter-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M3 5h18c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1zm9 8 8-6H4l8 6zm-3.1-.5L4 16.2V17h16v-.8l-4.9-3.7-2.5 1.9c-.4.3-.9.3-1.2 0l-2.5-1.9z"/></svg>
            </span>
            <h2>Login/Register for BA Updates</h2>
            <p>Get product, income, and Stock Point updates directly from the company.</p>
          </div>
          <form class="newsletter-form">
            <label class="newsletter-field">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1zm9 8 8-6H4l8 6z"/></svg>
              <input type="email" placeholder="Enter your email address" required>
            </label>
            <button class="btn-gold" type="submit">
              Subscribe
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8.6 16.6 4.6-4.6-4.6-4.6L10 6l6 6-6 6z"/></svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  `;

export default function Page() {
  return (
    <>
      <BodyClass className="contact" />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
