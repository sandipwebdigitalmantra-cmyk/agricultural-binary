import BodyClass from "@/components/BodyClass";

// Order Confirmed | Negila Sene
// Auto-generated from Frontend-design/order-confirmed.html
// Route: /order-confirmed
const html = `
    <section class="section confirm-section">
      <div class="container">
        <div class="confirm-shell">
          <div class="confirm-success" aria-hidden="true">
            <svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="30"/><path d="M20 33l8 8 16-16" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
          <h1>Order Placed Successfully!</h1>
          <p class="confirm-tagline">Thank you for shopping with <strong>Negila Sene</strong>! Your order is being processed and will be dispatched from your nearest Stock Point.</p>

          <div class="confirm-meta">
            <div class="confirm-meta-row">
              <span class="confirm-meta-label">Order ID</span>
              <span class="confirm-meta-value confirm-orderid">NS-UORHNEBK</span>
            </div>
            <div class="confirm-meta-row">
              <span class="confirm-meta-label">Customer Name</span>
              <span class="confirm-meta-value">Admin User</span>
            </div>
            <div class="confirm-meta-row">
              <span class="confirm-meta-label">Email</span>
              <span class="confirm-meta-value">admin@example.com</span>
            </div>
            <div class="confirm-meta-row">
              <span class="confirm-meta-label">Payment Method</span>
              <span class="confirm-meta-value">COD</span>
            </div>
            <div class="confirm-meta-row total-row">
              <span class="confirm-meta-label">Total Amount</span>
              <span class="confirm-meta-value confirm-total">Rs.1,299</span>
            </div>
          </div>

          <div class="confirm-tracker" aria-label="Order status">
            <ol class="tracker-list">
              <li class="tracker-step is-done">
                <span class="tracker-dot" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19l12-12-1.4-1.4z"/></svg>
                </span>
                <span class="tracker-label">Ordered</span>
              </li>
              <li class="tracker-step is-current">
                <span class="tracker-dot" aria-hidden="true">2</span>
                <span class="tracker-label">Shipped</span>
              </li>
              <li class="tracker-step">
                <span class="tracker-dot" aria-hidden="true">3</span>
                <span class="tracker-label">Out for Delivery</span>
              </li>
              <li class="tracker-step">
                <span class="tracker-dot" aria-hidden="true">4</span>
                <span class="tracker-label">Delivered</span>
              </li>
            </ol>
          </div>

          <div class="confirm-delivery">
            <span class="confirm-delivery-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M3 4h12c.6 0 1 .4 1 1v3h3.2c.3 0 .6.1.8.4l2.8 3.6c.1.2.2.4.2.6V18c0 .6-.4 1-1 1h-1.1c-.4 1.2-1.5 2-2.9 2s-2.5-.8-2.9-2H9.9C9.5 20.2 8.4 21 7 21s-2.5-.8-2.9-2H3c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1zm13 6v4h5l-2.3-3.1c-.1-.1-.2-.1-.3-.1H16V10z"/></svg>
            </span>
            <div>
              <strong>Estimated Delivery</strong>
              <p>Your order will reach you in <strong>3 - 7 business days</strong>. We'll send tracking updates over SMS and email.</p>
            </div>
          </div>

          <div class="confirm-actions">
            <a href="/" class="btn-outline">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.4 7.4 14 6l-6 6 6 6 1.4-1.4L10.8 12z"/></svg>
              Back to Home
            </a>
            <a href="/shop" class="btn-gold">
              Continue Shopping
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8.6 16.6 4.6-4.6-4.6-4.6L10 6l6 6-6 6z"/></svg>
            </a>
          </div>

          <p class="confirm-support">
            Need help with this order? Call <strong>+91 98765 43210</strong> or email <strong>support@negilasene.com</strong>. Our team is available Mon &ndash; Sat, 9 AM &ndash; 7 PM.
          </p>
        </div>
      </div>
    </section>
  `;

export default function Page() {
  return (
    <>
      <BodyClass className="order-confirmed" />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
