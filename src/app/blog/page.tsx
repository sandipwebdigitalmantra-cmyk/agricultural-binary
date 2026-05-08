import BodyClass from "@/components/BodyClass";

// Blog | Negila Sene - E-Commerce & Member Network
// Auto-generated from Frontend-design/blog.html
// Route: /blog
const html = `
 <section class="page-hero">
 <div class="container">
 <nav class="breadcrumb" aria-label="Breadcrumb">
 <a href="/">Home</a>
 <span aria-hidden="true">/</span>
 <span>Blog</span>
 </nav>
 <h1>Our <span>Blog</span></h1>
 <p>Farming tips, traditional recipes, healthy-living guides and stories from our farmer community.</p>
 </div>
 </section>

 <section class="section blog-section">
 <div class="container">
 <div class="gallery-filters">
 <button class="filter-btn active" type="button" data-filter="all">All</button>
 <button class="filter-btn" type="button" data-filter="ba">Farming Tips</button>
 <button class="filter-btn" type="button" data-filter="income">Recipes</button>
 <button class="filter-btn" type="button" data-filter="eco">Healthy Living</button>
 <button class="filter-btn" type="button" data-filter="stories">Farmer Stories</button>
 <button class="filter-btn" type="button" data-filter="events">News &amp; Events</button>
 </div>

 <div class="blog-grid">
 <article class="blog-card" data-cat="ba">
 <div class="blog-thumb product-cap">
 <img class="product-photo" src="/assets/products/tomato-seeds.jpg" alt="Choosing seeds for kitchen garden" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x400/2d7a2d/ffffff/png?text=Seeds+Guide';">
 </div>
 <div class="blog-info">
 <div class="blog-meta"><span>By Admin</span><span>20 Apr 2026</span></div>
 <h3>Choosing the right seeds for your kitchen garden</h3>
 <p>A simple guide to picking high-germination tomato, chilli and herb seeds for home growing.</p>
 <a href="/seeds">Read article -&gt;</a>
 </div>
 </article>

 <article class="blog-card" data-cat="ba">
 <div class="blog-thumb product-cap">
 <img class="product-photo" src="/assets/products/basmati-rice.jpg" alt="How to choose basmati rice" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x400/2d7a2d/e89328/png?text=Basmati+Guide';">
 </div>
 <div class="blog-info">
 <div class="blog-meta"><span>By Admin</span><span>15 Apr 2026</span></div>
 <h3>Basmati buying guide: grain length, ageing, aroma</h3>
 <p>What to look for when buying authentic Indian basmati rice for everyday cooking.</p>
 <a href="/rice">Read article -&gt;</a>
 </div>
 </article>

 <article class="blog-card" data-cat="income">
 <div class="blog-thumb product-tee">
 <img class="product-photo" src="/assets/products/toor-daal.jpg" alt="Toor Daal Khichdi recipe" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x400/d4af37/ffffff/png?text=Toor+Daal';">
 </div>
 <div class="blog-info">
 <div class="blog-meta"><span>By Admin</span><span>12 Apr 2026</span></div>
 <h3>Authentic Toor Daal Khichdi: a one-pot classic</h3>
 <p>A wholesome khichdi recipe using our farm-fresh toor daal and basmati rice.</p>
 <a href="/pulses">Read article -&gt;</a>
 </div>
 </article>

 <article class="blog-card" data-cat="income">
 <div class="blog-thumb product-tee">
 <img class="product-photo" src="/assets/products/darjeeling-tea.jpg" alt="Brewing perfect Darjeeling tea" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x400/3d1e15/ffffff/png?text=Darjeeling';">
 </div>
 <div class="blog-info">
 <div class="blog-meta"><span>By Admin</span><span>08 Apr 2026</span></div>
 <h3>How to brew the perfect Darjeeling cup</h3>
 <p>Water temperature, steeping time and pour technique for single-estate Darjeeling tea.</p>
 <a href="/tea">Read article -&gt;</a>
 </div>
 </article>

 <article class="blog-card" data-cat="eco">
 <div class="blog-thumb product-sticker">
 <img class="product-photo" src="/assets/products/turmeric-powder.jpg" alt="Turmeric health benefits" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x400/e89328/ffffff/png?text=Turmeric';">
 </div>
 <div class="blog-info">
 <div class="blog-meta"><span>By Admin</span><span>03 Apr 2026</span></div>
 <h3>Why turmeric belongs in every Indian kitchen</h3>
 <p>The everyday health benefits of pure, high-curcumin turmeric powder.</p>
 <a href="/spices">Read article -&gt;</a>
 </div>
 </article>

 <article class="blog-card" data-cat="eco">
 <div class="blog-thumb product-sticker">
 <img class="product-photo" src="/assets/products/mustard-oil.jpg" alt="Cold-pressed mustard oil benefits" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x400/e89328/ffffff/png?text=Mustard+Oil';">
 </div>
 <div class="blog-info">
 <div class="blog-meta"><span>By Admin</span><span>28 Mar 2026</span></div>
 <h3>Cold-pressed mustard oil: why it beats refined</h3>
 <p>Health benefits of traditional kachi-ghani mustard oil over mass-refined alternatives.</p>
 <a href="/oils">Read article -&gt;</a>
 </div>
 </article>

 <article class="blog-card" data-cat="eco">
 <div class="blog-thumb product-tee">
 <img class="product-photo" src="/assets/products/stone-atta.jpg" alt="Stone-ground atta nutrition" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x400/8a6028/ffffff/png?text=Atta+Guide';">
 </div>
 <div class="blog-info">
 <div class="blog-meta"><span>By Admin</span><span>22 Mar 2026</span></div>
 <h3>Stone-ground atta vs regular: a nutrition guide</h3>
 <p>Why slow-stone-ground wheat retains more fibre and minerals than mill-ground atta.</p>
 <a href="/wheat">Read article -&gt;</a>
 </div>
 </article>

 <article class="blog-card" data-cat="eco">
 <div class="blog-thumb product-cap">
 <img class="product-photo" src="/assets/products/jaggery.jpg" alt="Jaggery vs sugar comparison" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x400/8a5e1b/ffffff/png?text=Jaggery';">
 </div>
 <div class="blog-info">
 <div class="blog-meta"><span>By Admin</span><span>15 Mar 2026</span></div>
 <h3>Jaggery vs refined sugar: which is healthier?</h3>
 <p>Comparing nutrition, glycemic impact and traditional uses of these two sweeteners.</p>
 <a href="/sugar">Read article -&gt;</a>
 </div>
 </article>

 <article class="blog-card" data-cat="stories">
 <div class="blog-thumb product-sticker">
 <img class="product-photo" src="/assets/products/basmati-rice.jpg" alt="Ramesh's basmati farm story" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x400/2d7a2d/e89328/png?text=Farmer+Story';">
 </div>
 <div class="blog-info">
 <div class="blog-meta"><span>By Admin</span><span>02 Feb 2026</span></div>
 <h3>From small farm to big harvest: Ramesh's basmati journey</h3>
 <p>How one Punjab farmer doubled his basmati yield with sustainable practices.</p>
 <a href="/rice">Read article -&gt;</a>
 </div>
 </article>
 </div>

 <nav class="pagination" aria-label="Blog pagination">
 <button class="page-btn" type="button" aria-label="Previous page" disabled>
 <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.4 7.4 14 6l-6 6 6 6 1.4-1.4L10.8 12z"/></svg>
 </button>
 <button class="page-btn active" type="button">1</button>
 <button class="page-btn" type="button">2</button>
 <button class="page-btn" type="button">3</button>
 <button class="page-btn" type="button" aria-label="Next page">
 <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8.6 16.6 4.6-4.6-4.6-4.6L10 6l6 6-6 6z"/></svg>
 </button>
 </nav>
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
 <BodyClass className="blog" />
 <main dangerouslySetInnerHTML={{ __html: html }} />
 </>
 );
}
