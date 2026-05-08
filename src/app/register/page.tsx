import BodyClass from "@/components/BodyClass";

// Register | Negila Sene
// Auto-generated from Frontend-design/register.html
// Route: /register
const html = `
    <section class="auth-page">
      <div class="container">
        <div class="auth-shell">
          <div class="auth-shell-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M15 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4z"/></svg>
          </div>
          <h1>Create Account</h1>
          <p class="auth-shell-sub">Join Negila Sene and shop authentic farm produce direct from Indian farmers.</p>

          <form class="auth-form auth-shell-form" id="registerForm">
            <label>Full Name
              <input type="text" name="name" placeholder="Your full name" required>
            </label>
            <label>Email Address
              <input type="email" name="email" placeholder="you@example.com" required>
            </label>
            <label>Mobile Number
              <input type="tel" name="phone" placeholder="+91 98765 43210" required>
            </label>
            <label>Password
              <input type="password" name="password" placeholder="Create a strong password" required>
            </label>
            <label>Confirm Password
              <input type="password" name="confirm" placeholder="Re-enter your password" required>
            </label>

            <label class="filter-check auth-terms"><input type="checkbox" required> <span>I agree to the <a href="/terms-conditions">Terms &amp; Conditions</a></span></label>

            <button class="btn-gold auth-submit" type="submit">Create Account
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8.6 16.6 4.6-4.6-4.6-4.6L10 6l6 6-6 6z"/></svg>
            </button>
            <p class="auth-status" aria-live="polite"></p>
          </form>

          <p class="auth-shell-switch">Already a member? <a href="/login">Login here</a></p>
        </div>
      </div>
    </section>
  `;

export default function Page() {
  return (
    <>
      <BodyClass className="auth" />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
