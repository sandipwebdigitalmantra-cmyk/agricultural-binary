import BodyClass from "@/components/BodyClass";

// Checkout | Negila Sene
// Auto-generated from Frontend-design/checkout.html
// Route: /checkout
const html = `
    <section class="page-hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span aria-hidden="true">/</span>
          <a href="/cart">Cart</a><span aria-hidden="true">/</span>
          <span>Checkout</span>
        </nav>
        <h1>Secure <span>Checkout</span></h1>
        <p>Complete your order in three simple steps &mdash; contact, shipping address and payment.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <ol class="checkout-steps" aria-label="Checkout steps">
          <li class="checkout-step is-active"><span>1</span> Contact</li>
          <li class="checkout-step is-active"><span>2</span> Shipping</li>
          <li class="checkout-step is-active"><span>3</span> Payment</li>
        </ol>

        <div class="checkout-grid">
          <form class="checkout-form" id="checkoutForm">
            <section class="checkout-card">
              <h2>1. Contact Information</h2>
              <div class="checkout-row two">
                <label>Full Name<input type="text" name="name" placeholder="Your full name" required></label>
                <label>Mobile Number<input type="tel" name="phone" placeholder="+91 98765 43210" required></label>
              </div>
              <label>Email Address<input type="email" name="email" placeholder="you@example.com" required></label>
              <label class="filter-check"><input type="checkbox"> Send order updates to my WhatsApp number</label>
            </section>

            <section class="checkout-card">
              <h2>2. Shipping Address</h2>
              <label>Address Line 1<input type="text" name="address1" placeholder="House / Flat number, Street" required></label>
              <label>Address Line 2 <small>(optional)</small><input type="text" name="address2" placeholder="Landmark, Area"></label>
              <div class="checkout-row two">
                <label>City<input type="text" name="city" placeholder="City" required></label>
                <label>PIN Code<input type="tel" name="pincode" placeholder="6-digit PIN" pattern="[0-9]{6}" required></label>
              </div>
              <label>State
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
              <label class="filter-check"><input type="checkbox" checked> Save this address for future orders</label>
            </section>

            <section class="checkout-card">
              <h2>3. Payment Method</h2>
              <div class="payment-options">
                <label class="payment-option">
                  <input type="radio" name="payment" value="upi" checked>
                  <span class="payment-content">
                    <span class="payment-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24"><path d="M3 10h18v4H3z" fill="currentColor"/><path d="M3 6h18v2H3zM3 16h18v2H3z" fill="currentColor" opacity=".5"/></svg>
                    </span>
                    <span class="payment-meta">
                      <strong>UPI</strong>
                      <small>Google Pay, PhonePe, Paytm, BHIM &amp; more</small>
                    </span>
                  </span>
                </label>

                <label class="payment-option">
                  <input type="radio" name="payment" value="cod">
                  <span class="payment-content">
                    <span class="payment-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24"><path d="M3 7h18a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm9 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"/></svg>
                    </span>
                    <span class="payment-meta">
                      <strong>Cash on Delivery</strong>
                      <small>Pay in cash when your order arrives</small>
                    </span>
                  </span>
                </label>
              </div>

              <label>Order notes <small>(optional)</small><textarea name="notes" rows="3" placeholder="Delivery instructions, gate code, or anything else our Stock Point should know..."></textarea></label>
            </section>

            <p class="checkout-status" aria-live="polite"></p>
          </form>

          <aside class="checkout-summary">
            <h3>Order Summary</h3>
            <div class="checkout-summary-empty" id="checkoutSummaryEmpty" hidden>
              <p>Your cart is currently empty. Add products from the shop to continue.</p>
              <a href="/shop" class="btn-gold">
                Browse Shop
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8.6 16.6 4.6-4.6-4.6-4.6L10 6l6 6-6 6z"/></svg>
              </a>
            </div>

            <div class="summary-row"><span>Subtotal <small id="coSubLabel"></small></span><strong id="coSubtotal">Rs.0</strong></div>
            <div class="summary-row"><span>Discount</span><strong class="discount-value" id="coDiscount">- Rs.0</strong></div>
            <div class="summary-row"><span>Shipping</span><strong id="coShipping">Rs.0</strong></div>
            <div class="summary-row"><span>GST (5%)</span><strong id="coGst">Rs.0</strong></div>
            <div class="summary-divider"></div>
            <div class="summary-row summary-total"><span>Total</span><strong id="coTotal">Rs.0</strong></div>

            <div class="summary-coupon">
              <label>Have a coupon code?<input type="text" placeholder="Enter code"></label>
              <button class="cart-apply" type="button">Apply</button>
            </div>

            <button class="btn-gold cart-checkout" type="submit" form="checkoutForm" id="placeOrderBtn">
              Place Order
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8.6 16.6 4.6-4.6-4.6-4.6L10 6l6 6-6 6z"/></svg>
            </button>

            <div class="summary-secure">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3z"/></svg>
              100% secure checkout &middot; SSL encrypted
            </div>
          </aside>
        </div>
      </div>
    </section>
  `;

export default function Page() {
  return (
    <>
      <BodyClass className="checkout" />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
