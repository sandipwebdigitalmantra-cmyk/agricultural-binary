import BodyClass from "@/components/BodyClass";

// Wishlist | Negila Sene
// Auto-generated from Frontend-design/wishlist.html
// Route: /wishlist
const html = `
 <section class="page-hero">
 <div class="container">
 <nav class="breadcrumb" aria-label="Breadcrumb">
 <a href="/">Home</a><span aria-hidden="true">/</span><span>Wishlist</span>
 </nav>
 <h1>My <span>Wishlist</span></h1>
 <p>Save your favourite produce and order them whenever you're ready.</p>
 </div>
 </section>

 <section class="section">
 <div class="container">
 <div class="empty-state">
 <span class="empty-state-icon" aria-hidden="true">
 <svg viewBox="0 0 24 24"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>
 </span>
 <h2>Your wishlist is empty</h2>
 <p>Save items you love to your wishlist and find them here whenever you're ready to buy.</p>
 <a href="/shop" class="btn-gold">
 Continue Shopping
 <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8.6 16.6 4.6-4.6-4.6-4.6L10 6l6 6-6 6z"/></svg>
 </a>
 </div>
 </div>
 </section>
 `;

export default function Page() {
 return (
 <>
 <BodyClass className="wishlist" />
 <main dangerouslySetInnerHTML={{ __html: html }} />
 </>
 );
}
