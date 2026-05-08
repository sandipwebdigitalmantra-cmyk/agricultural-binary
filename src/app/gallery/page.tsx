import BodyClass from "@/components/BodyClass";

// Gallery | Negila Sene - E-Commerce & Member Network
// Auto-generated from Frontend-design/gallery.html
// Route: /gallery
const html = `
 <section class="page-hero">
 <div class="container">
 <nav class="breadcrumb" aria-label="Breadcrumb">
 <a href="/">Home</a>
 <span aria-hidden="true">/</span>
 <span>Gallery</span>
 </nav>
 <h1>Our <span>Gallery</span></h1>
 <p>Moments from our farms, processing units, farmer network and harvest festivals across India.</p>
 </div>
 </section>

 <section class="section gallery-section">
 <div class="container">
 <div class="gallery-filters">
 <button class="filter-btn active" type="button" data-filter="all">All</button>
 <button class="filter-btn" type="button" data-filter="events">Farm Visits</button>
 <button class="filter-btn" type="button" data-filter="factory">Processing</button>
 <button class="filter-btn" type="button" data-filter="ba">Our Farmers</button>
 <button class="filter-btn" type="button" data-filter="products">Produce</button>
 </div>

 <div class="gallery-grid">
 <figure class="gallery-card" data-cat="events">
 <img src="/assets/products/wheat-seeds.jpg" alt="Wheat fields at harvest" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/700x500/2d7a2d/e89328/png?text=Wheat+Field';">
 </figure>

 <figure class="gallery-card" data-cat="factory">
 <img src="/assets/products/stone-atta.jpg" alt="Grain quality testing" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/700x500/8a6028/ffffff/png?text=Grain+Lab';">
 </figure>

 <figure class="gallery-card" data-cat="products">
 <img src="/assets/gallery/harvest.jpg" alt="Fresh harvest display" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/700x500/8a5e1b/ffffff/png?text=Fresh+Harvest';">
 </figure>

 <figure class="gallery-card" data-cat="ba">
 <img src="/assets/gallery/farmers.jpg" alt="Farmers in the field" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/700x500/3d8a3d/ffffff/png?text=Farmers';">
 </figure>

 <figure class="gallery-card" data-cat="events">
 <img src="/assets/gallery/recognition.jpg" alt="Farmer recognition gathering" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/700x500/e89328/3d1e15/png?text=Recognition';">
 </figure>

 <figure class="gallery-card" data-cat="factory">
 <img src="/assets/products/basmati-rice.jpg" alt="Rice mill floor" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/700x500/2d7a2d/ffffff/png?text=Rice+Mill';">
 </figure>

 <figure class="gallery-card" data-cat="ba">
 <img src="/assets/products/marigold-seeds.jpg" alt="Farmer co-operative" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/700x500/8a4a32/e89328/png?text=Farmer+Co-op';">
 </figure>

 <figure class="gallery-card" data-cat="products">
 <img src="/assets/categories/spices.jpg" alt="Spice range display" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/700x500/d94435/ffffff/png?text=Spices';">
 </figure>

 <figure class="gallery-card" data-cat="events">
 <img src="/assets/gallery/field-walk.jpg" alt="Field walk and inspection" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/700x500/3d8a3d/ffffff/png?text=Field+Visit';">
 </figure>

 <figure class="gallery-card" data-cat="ba">
 <img src="/assets/gallery/founder.jpg" alt="Founder with farmers" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/700x500/1a4d1a/e89328/png?text=Founder+Farmers';">
 </figure>

 <figure class="gallery-card" data-cat="factory">
 <img src="/assets/gallery/storage.jpg" alt="Grain storage warehouse" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/700x500/5d2e1f/e89328/png?text=Storage';">
 </figure>

 <figure class="gallery-card" data-cat="products">
 <img src="/assets/products/garam-masala.jpg" alt="Premium spice pack" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/700x500/e89328/ffffff/png?text=Spice+Pack';">
 </figure>
 </div>
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
 <h2>Login/Register for Member Updates</h2>
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
 <BodyClass className="gallery" />
 <main dangerouslySetInnerHTML={{ __html: html }} />
 </>
 );
}
