import BodyClass from "@/components/BodyClass";

const html = `
    <section class="page-hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span aria-hidden="true">/</span>
          <span>My Orders</span>
        </nav>
        <h1>My <span>Orders</span></h1>
        <p>Track the status of recent orders and review the items you've purchased.</p>
      </div>
    </section>

    <section class="section">
      <div class="container" id="myOrdersRoot">
        <div class="empty-state">
          <span class="empty-state-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M21 11.01 19 4H5L3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9zM5.5 6h13l1.27 4.5H4.23L5.5 6zM5 19v-7h14v7H5zm4-4h6v2H9v-2z"/></svg>
          </span>
          <h2>No orders yet</h2>
          <p>You haven't placed any orders. Browse our authentic Indian agricultural produce and place your first order.</p>
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
      <BodyClass className="my-orders" />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
