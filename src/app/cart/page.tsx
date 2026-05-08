import BodyClass from "@/components/BodyClass";

// Cart | Negila Sene
// Auto-generated from Frontend-design/cart.html
// Route: /cart
const html = `
    <section class="page-hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span aria-hidden="true">/</span><span>Cart</span>
        </nav>
        <h1>Shopping <span>Cart</span></h1>
        <p>Review your selected items and proceed to checkout when you're ready.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="empty-state">
          <span class="empty-state-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM7.2 14.5h7.5c.8 0 1.5-.4 1.9-1.1L21 5H6.2L5.8 3H2v2h2.2l2.2 11c.1.9.9 1.5 1.8 1.5H19v-2H7.2l-.4-1z"/></svg>
          </span>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything yet. Browse our authentic Indian agricultural produce to get started.</p>
          <a href="/shop" class="btn-gold">
            Start Shopping
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8.6 16.6 4.6-4.6-4.6-4.6L10 6l6 6-6 6z"/></svg>
          </a>
        </div>
      </div>
    </section>
  `;

export default function Page() {
  return (
    <>
      <BodyClass className="cart" />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
