import BodyClass from "@/components/BodyClass";

// Login | Negila Sene
// Auto-generated from Frontend-design/login.html
// Route: /login
const html = `
    <section class="auth-page">
      <div class="container">
        <div class="auth-shell">
          <div class="auth-shell-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M12 12c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zm0 2c-4.4 0-8 2.2-8 5v2h16v-2c0-2.8-3.6-5-8-5z"/></svg>
          </div>
          <h1>Welcome Back</h1>
          <p class="auth-shell-sub">Login to your Negila Sene account.</p>

          <form class="auth-form auth-shell-form" id="loginForm">
            <label>Phone Number or Email
              <input type="text" name="identifier" placeholder="Enter mobile number or email" required>
            </label>
            <label>Password
              <input type="password" name="password" placeholder="Enter your password" required>
            </label>

            <div class="auth-row">
              <label class="filter-check"><input type="checkbox"> Remember me</label>
              <a href="#" class="auth-forgot">Forgot Password?</a>
            </div>

            <button class="btn-gold auth-submit" type="submit">Login
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8.6 16.6 4.6-4.6-4.6-4.6L10 6l6 6-6 6z"/></svg>
            </button>
            <p class="auth-status" aria-live="polite"></p>
          </form>

          <p class="auth-shell-switch">Don't have an account? <a href="/register">Register Now</a></p>
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
