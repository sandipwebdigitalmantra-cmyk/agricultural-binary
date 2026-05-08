import BodyClass from "@/components/BodyClass";

const html = `
    <section class="page-hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span aria-hidden="true">/</span><a href="/shop">Shop</a><span aria-hidden="true">/</span><span id="productCrumb">Product</span>
        </nav>
        <h1>Product <span>Details</span></h1>
        <p>Take a closer look at this hand-picked product before adding it to your cart.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="empty-state" id="productEmpty">
          <span class="empty-state-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M12 5C6.5 5 2 12 2 12s4.5 7 10 7 10-7 10-7-4.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg>
          </span>
          <h2>No product selected</h2>
          <p>Please pick a product from the shop to see its details here.</p>
          <a href="/shop" class="btn-gold">
            Browse Shop
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8.6 16.6 4.6-4.6-4.6-4.6L10 6l6 6-6 6z"/></svg>
          </a>
        </div>
      </div>
    </section>
  `;

export default function Page() {
  return (
    <>
      <BodyClass className="product" />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
