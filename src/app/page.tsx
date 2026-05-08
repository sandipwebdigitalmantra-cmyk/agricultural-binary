import BodyClass from "@/components/BodyClass";

// Negila Sene | Eco E-Commerce & BA Network
// Auto-generated from Frontend-design/index.html
// Route: /
const html = `
    <section class="hero-section" aria-label="Homepage banners">
      <div class="hero-slider">
        <article class="hero-slide active">
          <img src="/assets/b1.jpeg" alt="Eco products banner">
        </article>
        <article class="hero-slide">
          <img src="/assets/b2.jpeg" alt="Join Brand Ambassador banner">
        </article>
        <article class="hero-slide">
          <img src="/assets/b3.jpeg" alt="Business opportunity banner">
        </article>
      </div>
      <button class="hero-arrow hero-prev" type="button" aria-label="Previous banner">&lt;</button>
      <button class="hero-arrow hero-next" type="button" aria-label="Next banner">&gt;</button>
      <div class="hero-dots">
        <button class="dot active" type="button" aria-label="Show Eco Products banner"></button>
        <button class="dot" type="button" aria-label="Show Join Brand Ambassador banner"></button>
        <button class="dot" type="button" aria-label="Show Business Opportunity banner"></button>
      </div>
    </section>

    <section class="features-strip">
      <div class="features-track">
        <article class="feature-item">
          <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h12c.6 0 1 .4 1 1v3h3.2c.3 0 .6.1.8.4l2.8 3.6c.1.2.2.4.2.6V18c0 .6-.4 1-1 1h-1.1c-.4 1.2-1.5 2-2.9 2s-2.5-.8-2.9-2H9.9C9.5 20.2 8.4 21 7 21s-2.5-.8-2.9-2H3c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1zm13 6v4h5l-2.3-3.1c-.1-.1-.2-.1-.3-.1H16V10zM7 19.2c.7 0 1.2-.5 1.2-1.2S7.7 16.8 7 16.8s-1.2.5-1.2 1.2.5 1.2 1.2 1.2zm11 0c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2-1.2.5-1.2 1.2.5 1.2 1.2 1.2z"/></svg></span>
          <div><h3>Company Supply</h3><p>Accessories sold directly</p></div>
        </article>
        <article class="feature-item">
          <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16v4H4V4zm0 6h7v10H4V10zm9 0h7v10h-7V10z"/></svg></span>
          <div><h3>No PV Accessories</h3><p>Cap, T-shirt, Stickers, Badge</p></div>
        </article>
        <article class="feature-item">
          <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm8-1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM8 13c-3.3 0-6 1.8-6 4v3h12v-3c0-2.2-2.7-4-6-4zm8.4-.8c-.9 0-1.7.2-2.4.5 1.3 1 2 2.5 2 4.3v3h6v-2.7c0-2.8-2.5-5.1-5.6-5.1z"/></svg></span>
          <div><h3>BA Network</h3><p>Left and Right placement</p></div>
        </article>
        <article class="feature-item">
          <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a9 9 0 0 0-9 9v4c0 1.7 1.3 3 3 3h2v-7H5a7 7 0 0 1 14 0h-3v7h2.2c-.5 1.2-1.7 2-3.2 2h-2v2h2c3.3 0 6-2.7 6-6v-5a9 9 0 0 0-9-9z"/></svg></span>
          <div><h3>Support</h3><p>Registration and SP assistance</p></div>
        </article>
        <article class="feature-item" aria-hidden="true">
          <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h12c.6 0 1 .4 1 1v3h3.2c.3 0 .6.1.8.4l2.8 3.6c.1.2.2.4.2.6V18c0 .6-.4 1-1 1h-1.1c-.4 1.2-1.5 2-2.9 2s-2.5-.8-2.9-2H9.9C9.5 20.2 8.4 21 7 21s-2.5-.8-2.9-2H3c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1zm13 6v4h5l-2.3-3.1c-.1-.1-.2-.1-.3-.1H16V10zM7 19.2c.7 0 1.2-.5 1.2-1.2S7.7 16.8 7 16.8s-1.2.5-1.2 1.2.5 1.2 1.2 1.2zm11 0c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2-1.2.5-1.2 1.2.5 1.2 1.2 1.2z"/></svg></span>
          <div><h3>Company Supply</h3><p>Accessories sold directly</p></div>
        </article>
        <article class="feature-item" aria-hidden="true">
          <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16v4H4V4zm0 6h7v10H4V10zm9 0h7v10h-7V10z"/></svg></span>
          <div><h3>No PV Accessories</h3><p>Cap, T-shirt, Stickers, Badge</p></div>
        </article>
        <article class="feature-item" aria-hidden="true">
          <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm8-1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM8 13c-3.3 0-6 1.8-6 4v3h12v-3c0-2.2-2.7-4-6-4zm8.4-.8c-.9 0-1.7.2-2.4.5 1.3 1 2 2.5 2 4.3v3h6v-2.7c0-2.8-2.5-5.1-5.6-5.1z"/></svg></span>
          <div><h3>BA Network</h3><p>Left and Right placement</p></div>
        </article>
        <article class="feature-item" aria-hidden="true">
          <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a9 9 0 0 0-9 9v4c0 1.7 1.3 3 3 3h2v-7H5a7 7 0 0 1 14 0h-3v7h2.2c-.5 1.2-1.7 2-3.2 2h-2v2h2c3.3 0 6-2.7 6-6v-5a9 9 0 0 0-9-9z"/></svg></span>
          <div><h3>Support</h3><p>Registration and SP assistance</p></div>
        </article>
      </div>
    </section>

 

    <section class="section story-section" id="founder">
      <div class="container story-grid">
        <div class="story-media">
          <img src="/assets/founder.jpeg" alt="Founder of Negila Sene" onerror="this.onerror=null;this.src='assets/b1.jpeg';">
          <span class="story-stat">
            <b>10+</b>
            <em>Years Leading Negila Sene</em>
          </span>
        </div>
        <div class="story-text">
          <span class="section-badge">Founder</span>
          <h2>Meet Our <span>Founder &amp; CEO</span></h2>
          <p>Negila Sene was started with a simple vision &mdash; bring authentic eco essentials to every Indian household while empowering committed Brand Ambassadors with a transparent income opportunity rooted in real product sales.</p>
          <p>From a single Stock Point in Karnataka, our founder has grown the network into a 28-state operation supporting thousands of active BAs, a curated catalogue of eco products, and no-PV branded accessories supplied directly by the company.</p>
          <a href="/about" class="story-cta">
            Read More 
            <span aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="m8.6 16.6 4.6-4.6-4.6-4.6L10 6l6 6-6 6z" fill="currentColor"/></svg>
            </span>
          </a>
        </div>
      </div>
    </section>

    <section class="section categories-section" id="categories">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Our Range</span>
          <h2>Shop by <span>Categories</span></h2>
          <p>Authentic agricultural produce sourced directly from Indian farmers, organised for fast discovery.</p>
        </div>

        <div class="categories-grid">
          <a href="/seeds" class="category-card">
            <span class="cat-icon">
              <img src="https://images.unsplash.com/photo-1583484963886-cfe2bff2945f?w=200&h=200&fit=crop&q=80" alt="Seeds" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/200x200/4a8a3a/ffffff/png?text=Seeds';">
            </span>
            <h3>Seeds</h3>
            <p>High-germination seeds</p>
          </a>
          <a href="/sugar" class="category-card">
            <span class="cat-icon">
              <img src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200&h=200&fit=crop&q=80" alt="Sugar" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/200x200/f5d49a/8a6028/png?text=Sugar';">
            </span>
            <h3>Sugar</h3>
            <p>Refined &amp; jaggery</p>
          </a>
          <a href="/rice" class="category-card">
            <span class="cat-icon">
              <img src="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&h=200&fit=crop&q=80" alt="Rice" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/200x200/f1ead0/8a6028/png?text=Rice';">
            </span>
            <h3>Rice</h3>
            <p>Basmati &amp; more</p>
          </a>
          <a href="/wheat" class="category-card">
            <span class="cat-icon">
              <img src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=200&h=200&fit=crop&q=80" alt="Wheat" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/200x200/c9a35a/ffffff/png?text=Wheat';">
            </span>
            <h3>Wheat</h3>
            <p>Atta &amp; whole grain</p>
          </a>
          <a href="/pulses" class="category-card">
            <span class="cat-icon">
              <img src="https://images.unsplash.com/photo-1626197031507-c17099753214?w=200&h=200&fit=crop&q=80" alt="Pulses" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/200x200/c98a4d/ffffff/png?text=Pulses';">
            </span>
            <h3>Pulses</h3>
            <p>Daals &amp; lentils</p>
          </a>
          <a href="/spices" class="category-card">
            <span class="cat-icon">
              <img src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=200&h=200&fit=crop&q=80" alt="Spices" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/200x200/c93c1c/ffffff/png?text=Spices';">
            </span>
            <h3>Spices</h3>
            <p>Authentic Indian</p>
          </a>
          <a href="/oils" class="category-card">
            <span class="cat-icon">
              <img src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=200&h=200&fit=crop&q=80" alt="Oils" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/200x200/f0a830/ffffff/png?text=Oils';">
            </span>
            <h3>Oils</h3>
            <p>Cold-pressed</p>
          </a>
          <a href="/tea" class="category-card">
            <span class="cat-icon">
              <img src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=200&h=200&fit=crop&q=80" alt="Tea" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/200x200/4a2a1a/ffffff/png?text=Tea';">
            </span>
            <h3>Tea</h3>
            <p>Single-estate teas</p>
          </a>
          <a href="/shop" class="category-card">
            <span class="cat-icon">
              <img src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=200&h=200&fit=crop&q=80" alt="Honey" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/200x200/e89328/ffffff/png?text=Honey';">
            </span>
            <h3>Honey</h3>
            <p>Pure &amp; raw</p>
          </a>
          <a href="/shop" class="category-card">
            <span class="cat-icon">
              <img src="https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=200&h=200&fit=crop&q=80" alt="Dry Fruits" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/200x200/8a5a2a/ffffff/png?text=Dry+Fruits';">
            </span>
            <h3>Dry Fruits</h3>
            <p>Nuts &amp; raisins</p>
          </a>
        </div>
      </div>
    </section>

    <section class="section products-section" id="shop">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Trending</span>
          <h2>Trending <span>Products</span></h2>
          <p>Authentic agricultural produce sourced directly from Indian farmers.</p>
        </div>

        <div class="product-filters">
          <button class="filter-btn active" type="button" data-filter="all">All</button>
          <button class="filter-btn" type="button" data-filter="bestseller">Bestsellers</button>
          <button class="filter-btn" type="button" data-filter="hot">Hot Deals</button>
          <button class="filter-btn" type="button" data-filter="new">New Arrivals</button>
        </div>

        <div class="products-grid">
          <article class="product-card">
            <span class="product-badge">Best Seller</span>
            <div class="product-actions">
              <button class="product-action" type="button" aria-label="Add to wishlist">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>
              </button>
              <button class="product-action" type="button" aria-label="Quick view">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6.5 5 2 12 2 12s4.5 7 10 7 10-7 10-7-4.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
              </button>
            </div>
            <div class="product-img product-cap">
              <span class="discount-tag">-25%</span>
              <img class="product-photo" src="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&h=500&fit=crop&q=80" alt="Basmati Rice 5kg" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/0a3d0a/d4af37/png?text=Basmati+Rice';">
            </div>
            <div class="product-info">
              <span class="product-category">Long Grain</span>
              <h3>Basmati Rice 5kg</h3>
              <div class="rating"><span class="stars" style="--rating:5" aria-label="Rated 5 out of 5"></span><small>(234)</small></div>
              <div class="product-price"><strong>Rs.599</strong><del>Rs.799</del><em>25% off</em></div>
              <div class="pv-note">100% Authentic | Direct from Farm</div>
              <div class="cart-row">
                <div class="qty-control"><button type="button">-</button><input value="0" readonly><button type="button">+</button></div>
                <button class="cart-btn" type="button">Add to Cart</button>
              </div>
            </div>
          </article>
          <article class="product-card">
            <span class="product-badge hot">Hot</span>
            <div class="product-actions">
              <button class="product-action" type="button" aria-label="Add to wishlist">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>
              </button>
              <button class="product-action" type="button" aria-label="Quick view">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6.5 5 2 12 2 12s4.5 7 10 7 10-7 10-7-4.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
              </button>
            </div>
            <div class="product-img product-tee">
              <span class="discount-tag">-25%</span>
              <img class="product-photo" src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=500&h=500&fit=crop&q=80" alt="Whole Wheat Flour 10kg" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/8a6028/ffffff/png?text=Wheat+Flour';">
            </div>
            <div class="product-info">
              <span class="product-category">Atta</span>
              <h3>Whole Wheat Flour 10kg</h3>
              <div class="rating"><span class="stars" style="--rating:4.5" aria-label="Rated 4.5 out of 5"></span><small>(312)</small></div>
              <div class="product-price"><strong>Rs.449</strong><del>Rs.549</del><em>18% off</em></div>
              <div class="pv-note">100% Authentic | Direct from Farm</div>
              <div class="cart-row">
                <div class="qty-control"><button type="button">-</button><input value="0" readonly><button type="button">+</button></div>
                <button class="cart-btn" type="button">Add to Cart</button>
              </div>
            </div>
          </article>
          <article class="product-card">
            <span class="product-badge new">New</span>
            <div class="product-actions">
              <button class="product-action" type="button" aria-label="Add to wishlist">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>
              </button>
              <button class="product-action" type="button" aria-label="Quick view">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6.5 5 2 12 2 12s4.5 7 10 7 10-7 10-7-4.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
              </button>
            </div>
            <div class="product-img product-sticker">
              <span class="discount-tag">-25%</span>
              <img class="product-photo" src="https://images.unsplash.com/photo-1601000785686-29eaff75feff?w=500&h=500&fit=crop&q=80" alt="Toor Daal 1kg" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/d4af37/ffffff/png?text=Toor+Daal';">
            </div>
            <div class="product-info">
              <span class="product-category">Lentils</span>
              <h3>Toor Daal 1kg</h3>
              <div class="rating"><span class="stars" style="--rating:5" aria-label="Rated 5 out of 5"></span><small>(167)</small></div>
              <div class="product-price"><strong>Rs.159</strong><del>Rs.199</del><em>20% off</em></div>
              <div class="pv-note">100% Authentic | Direct from Farm</div>
              <div class="cart-row">
                <div class="qty-control"><button type="button">-</button><input value="0" readonly><button type="button">+</button></div>
                <button class="cart-btn" type="button">Add to Cart</button>
              </div>
            </div>
          </article>
          <article class="product-card">
            <span class="product-badge">Official</span>
            <div class="product-actions">
              <button class="product-action" type="button" aria-label="Add to wishlist">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>
              </button>
              <button class="product-action" type="button" aria-label="Quick view">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6.5 5 2 12 2 12s4.5 7 10 7 10-7 10-7-4.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
              </button>
            </div>
            <div class="product-img product-badge-img">
              <span class="discount-tag">-34%</span>
              <img class="product-photo" src="https://images.unsplash.com/photo-1609252839979-32f2bcfa9d3a?w=500&h=500&fit=crop&q=80" alt="Refined White Sugar 5kg" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/e89328/ffffff/png?text=Sugar';">
            </div>
            <div class="product-info">
              <span class="product-category">White Sugar</span>
              <h3>Refined Sugar 5kg</h3>
              <div class="rating"><span class="stars" style="--rating:4.5" aria-label="Rated 4.5 out of 5"></span><small>(156)</small></div>
              <div class="product-price"><strong>Rs.299</strong><del>Rs.349</del><em>14% off</em></div>
              <div class="pv-note">100% Authentic | Direct from Farm</div>
              <div class="cart-row">
                <div class="qty-control"><button type="button">-</button><input value="0" readonly><button type="button">+</button></div>
                <button class="cart-btn" type="button">Add to Cart</button>
              </div>
            </div>
          </article>

          <article class="product-card">
            <span class="product-badge">Top Pick</span>
            <div class="product-actions">
              <button class="product-action" type="button" aria-label="Add to wishlist">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>
              </button>
              <button class="product-action" type="button" aria-label="Quick view">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6.5 5 2 12 2 12s4.5 7 10 7 10-7 10-7-4.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
              </button>
            </div>
            <div class="product-img product-tote">
              <span class="discount-tag">-30%</span>
              <img class="product-photo" src="https://images.unsplash.com/photo-1599909533730-a6a4c5b40e94?w=500&h=500&fit=crop&q=80" alt="Mustard Oil 1L" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/e89328/ffffff/png?text=Mustard+Oil';">
            </div>
            <div class="product-info">
              <span class="product-category">Cooking Oil</span>
              <h3>Mustard Oil 1L</h3>
              <div class="rating"><span class="stars" style="--rating:5" aria-label="Rated 5 out of 5"></span><small>(198)</small></div>
              <div class="product-price"><strong>Rs.199</strong><del>Rs.249</del><em>20% off</em></div>
              <div class="pv-note">100% Authentic | Direct from Farm</div>
              <div class="cart-row">
                <div class="qty-control"><button type="button">-</button><input value="0" readonly><button type="button">+</button></div>
                <button class="cart-btn" type="button">Add to Cart</button>
              </div>
            </div>
          </article>

          <article class="product-card">
            <span class="product-badge new">New</span>
            <div class="product-actions">
              <button class="product-action" type="button" aria-label="Add to wishlist">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>
              </button>
              <button class="product-action" type="button" aria-label="Quick view">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6.5 5 2 12 2 12s4.5 7 10 7 10-7 10-7-4.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
              </button>
            </div>
            <div class="product-img product-mug">
              <span class="discount-tag">-20%</span>
              <img class="product-photo" src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&h=500&fit=crop&q=80" alt="Pure Cow Ghee 500ml" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/e89328/ffffff/png?text=Ghee';">
            </div>
            <div class="product-info">
              <span class="product-category">Ghee</span>
              <h3>Pure Cow Ghee 500ml</h3>
              <div class="rating"><span class="stars" style="--rating:5" aria-label="Rated 5 out of 5"></span><small>(287)</small></div>
              <div class="product-price"><strong>Rs.549</strong><del>Rs.649</del><em>15% off</em></div>
              <div class="pv-note">100% Authentic | Direct from Farm</div>
              <div class="cart-row">
                <div class="qty-control"><button type="button">-</button><input value="0" readonly><button type="button">+</button></div>
                <button class="cart-btn" type="button">Add to Cart</button>
              </div>
            </div>
          </article>

          <article class="product-card">
            <span class="product-badge hot">Hot</span>
            <div class="product-actions">
              <button class="product-action" type="button" aria-label="Add to wishlist">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>
              </button>
              <button class="product-action" type="button" aria-label="Quick view">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6.5 5 2 12 2 12s4.5 7 10 7 10-7 10-7-4.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
              </button>
            </div>
            <div class="product-img product-notebook">
              <span class="discount-tag">-25%</span>
              <img class="product-photo" src="https://images.unsplash.com/photo-1597318236999-0c0a4cb04b6c?w=500&h=500&fit=crop&q=80" alt="Assam CTC Tea 500g" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/3d1e15/ffffff/png?text=Assam+Tea';">
            </div>
            <div class="product-info">
              <span class="product-category">Black Tea</span>
              <h3>Assam CTC Tea 500g</h3>
              <div class="rating"><span class="stars" style="--rating:5" aria-label="Rated 5 out of 5"></span><small>(198)</small></div>
              <div class="product-price"><strong>Rs.249</strong><del>Rs.299</del><em>17% off</em></div>
              <div class="pv-note">100% Authentic | Direct from Farm</div>
              <div class="cart-row">
                <div class="qty-control"><button type="button">-</button><input value="0" readonly><button type="button">+</button></div>
                <button class="cart-btn" type="button">Add to Cart</button>
              </div>
            </div>
          </article>

          <article class="product-card">
            <span class="product-badge">Limited</span>
            <div class="product-actions">
              <button class="product-action" type="button" aria-label="Add to wishlist">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>
              </button>
              <button class="product-action" type="button" aria-label="Quick view">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6.5 5 2 12 2 12s4.5 7 10 7 10-7 10-7-4.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
              </button>
            </div>
            <div class="product-img product-pen">
              <span class="discount-tag">-22%</span>
              <img class="product-photo" src="https://images.unsplash.com/photo-1615485925763-e5be9e6cdee5?w=500&h=500&fit=crop&q=80" alt="Turmeric Powder 500g" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/e89328/ffffff/png?text=Turmeric';">
            </div>
            <div class="product-info">
              <span class="product-category">Powder Spice</span>
              <h3>Turmeric Powder 500g</h3>
              <div class="rating"><span class="stars" style="--rating:5" aria-label="Rated 5 out of 5"></span><small>(234)</small></div>
              <div class="product-price"><strong>Rs.149</strong><del>Rs.199</del><em>25% off</em></div>
              <div class="pv-note">100% Authentic | Direct from Farm</div>
              <div class="cart-row">
                <div class="qty-control"><button type="button">-</button><input value="0" readonly><button type="button">+</button></div>
                <button class="cart-btn" type="button">Add to Cart</button>
              </div>
            </div>
          </article>

          <article class="product-card">
            <span class="product-badge new">New</span>
            <div class="product-actions">
              <button class="product-action" type="button" aria-label="Add to wishlist">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>
              </button>
              <button class="product-action" type="button" aria-label="Quick view">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6.5 5 2 12 2 12s4.5 7 10 7 10-7 10-7-4.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
              </button>
            </div>
            <div class="product-img product-bottle">
              <span class="discount-tag">-28%</span>
              <img class="product-photo" src="https://images.unsplash.com/photo-1601493700518-9d9d8e9f1f24?w=500&h=500&fit=crop&q=80" alt="Red Chilli Powder 500g" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/d94435/ffffff/png?text=Chilli';">
            </div>
            <div class="product-info">
              <span class="product-category">Powder Spice</span>
              <h3>Red Chilli Powder 500g</h3>
              <div class="rating"><span class="stars" style="--rating:4.5" aria-label="Rated 4.5 out of 5"></span><small>(187)</small></div>
              <div class="product-price"><strong>Rs.169</strong><del>Rs.219</del><em>23% off</em></div>
              <div class="pv-note">100% Authentic | Direct from Farm</div>
              <div class="cart-row">
                <div class="qty-control"><button type="button">-</button><input value="0" readonly><button type="button">+</button></div>
                <button class="cart-btn" type="button">Add to Cart</button>
              </div>
            </div>
          </article>

          <article class="product-card">
            <span class="product-badge">Best Seller</span>
            <div class="product-actions">
              <button class="product-action" type="button" aria-label="Add to wishlist">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>
              </button>
              <button class="product-action" type="button" aria-label="Quick view">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6.5 5 2 12 2 12s4.5 7 10 7 10-7 10-7-4.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
              </button>
            </div>
            <div class="product-img product-lanyard">
              <span class="discount-tag">-15%</span>
              <img class="product-photo" src="https://images.unsplash.com/photo-1582281298055-e25b84a30b0b?w=500&h=500&fit=crop&q=80" alt="Hybrid Tomato Seeds" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/2d7a2d/ffffff/png?text=Tomato+Seeds';">
            </div>
            <div class="product-info">
              <span class="product-category">Vegetable Seeds</span>
              <h3>Hybrid Tomato Seeds</h3>
              <div class="rating"><span class="stars" style="--rating:5" aria-label="Rated 5 out of 5"></span><small>(86)</small></div>
              <div class="product-price"><strong>Rs.149</strong><del>Rs.199</del><em>25% off</em></div>
              <div class="pv-note">100% Authentic | Direct from Farm</div>
              <div class="cart-row">
                <div class="qty-control"><button type="button">-</button><input value="0" readonly><button type="button">+</button></div>
                <button class="cart-btn" type="button">Add to Cart</button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>


    <section class="section why-section" id="why">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Why Choose Us</span>
          <h2>Built for <span>BA Network</span></h2>
          <p>Eco accessories, structured income, and Stock Point support in one place.</p>
        </div>
        <div class="why-grid">
          <article class="why-card" data-num="01">
            <span class="why-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3zm-1 14-4-4 1.4-1.4L11 13.2l4.6-4.6L17 10l-6 6z"/></svg></span>
            <div class="why-content">
              <h3>Verified Eco</h3>
              <p>Authentic eco products supplied directly by the company.</p>
            </div>
          </article>
          <article class="why-card" data-num="02">
            <span class="why-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm8-1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM8 13c-3.3 0-6 1.8-6 4v3h12v-3c0-2.2-2.7-4-6-4zm8.4-.8c-.9 0-1.7.2-2.4.5 1.3 1 2 2.5 2 4.3v3h6v-2.7c0-2.8-2.5-5.1-5.6-5.1z"/></svg></span>
            <div class="why-content">
              <h3>BA Placement</h3>
              <p>Clear left and right placement for sustainable growth.</p>
            </div>
          </article>
          <article class="why-card" data-num="03">
            <span class="why-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1 3 5v6c0 5 3.8 9.7 9 11 5.2-1.3 9-6 9-11V5l-9-4zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 14c-2.5 0-4.7-1.3-6-3.3.1-1.9 4-3 6-3s5.9 1.1 6 3c-1.3 2-3.5 3.3-6 3.3z"/></svg></span>
            <div class="why-content">
              <h3>No PV Accessories</h3>
              <p>Caps, T-shirts, stickers and badges with company sale.</p>
            </div>
          </article>
          <article class="why-card" data-num="04">
            <span class="why-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a9 9 0 0 0-9 9v4c0 1.7 1.3 3 3 3h2v-7H5a7 7 0 0 1 14 0h-3v7h2.2c-.5 1.2-1.7 2-3.2 2h-2v2h2c3.3 0 6-2.7 6-6v-5a9 9 0 0 0-9-9z"/></svg></span>
            <div class="why-content">
              <h3>Real Support</h3>
              <p>Registration, SP guidance and ongoing assistance.</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section products-section just-in-section" id="just-in">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Just In</span>
          <h2>New Arrivals</h2>
          <p>Freshly harvested produce ready to ship from our farmer network.</p>
        </div>
        <div class="products-grid">
          <article class="product-card">
            <span class="product-badge new">Just In</span>
            <div class="product-actions">
              <button class="product-action" type="button" aria-label="Add to wishlist">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>
              </button>
              <button class="product-action" type="button" aria-label="Quick view">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6.5 5 2 12 2 12s4.5 7 10 7 10-7 10-7-4.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
              </button>
            </div>
            <div class="product-img product-cap">
              <img src="https://images.unsplash.com/photo-1586201375800-744e6e9f4ec0?w=600&auto=format&fit=crop&q=70" alt="Premium Basmati Rice 5kg" loading="lazy">
            </div>
            <div class="product-info">
              <span class="product-category">Long Grain</span>
              <h3>Premium Basmati 5kg</h3>
              <div class="rating"><span class="stars" style="--rating:5" aria-label="Rated 5 out of 5"></span><small>(64)</small></div>
              <div class="product-tags">
                <span class="product-tag">Aged</span>
                <span class="product-tag">Aromatic</span>
                <span class="product-tag gold">Premium</span>
              </div>
              <div class="product-price"><strong>Rs.699</strong><del>Rs.899</del><em>22% off</em></div>
              <div class="pv-note">100% Authentic | Direct from Farm</div>
              <div class="cart-row">
                <div class="qty-control"><button type="button">-</button><input value="0" readonly><button type="button">+</button></div>
                <button class="cart-btn" type="button">Add to Cart</button>
              </div>
            </div>
          </article>
          <article class="product-card">
            <span class="product-badge new">Just In</span>
            <div class="product-actions">
              <button class="product-action" type="button" aria-label="Add to wishlist">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>
              </button>
              <button class="product-action" type="button" aria-label="Quick view">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6.5 5 2 12 2 12s4.5 7 10 7 10-7 10-7-4.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
              </button>
            </div>
            <div class="product-img product-tee">
              <img src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&auto=format&fit=crop&q=70" alt="Stone-Ground Atta 10kg" loading="lazy">
            </div>
            <div class="product-info">
              <span class="product-category">Atta</span>
              <h3>Stone-Ground Atta 10kg</h3>
              <div class="rating"><span class="stars" style="--rating:4.5" aria-label="Rated 4.5 out of 5"></span><small>(78)</small></div>
              <div class="product-tags">
                <span class="product-tag">Whole Grain</span>
                <span class="product-tag">Sharbati</span>
                <span class="product-tag warm">Limited</span>
              </div>
              <div class="product-price"><strong>Rs.499</strong><del>Rs.649</del><em>23% off</em></div>
              <div class="pv-note">100% Authentic | Direct from Farm</div>
              <div class="cart-row">
                <div class="qty-control"><button type="button">-</button><input value="0" readonly><button type="button">+</button></div>
                <button class="cart-btn" type="button">Add to Cart</button>
              </div>
            </div>
          </article>
          <article class="product-card">
            <span class="product-badge new">Just In</span>
            <div class="product-actions">
              <button class="product-action" type="button" aria-label="Add to wishlist">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>
              </button>
              <button class="product-action" type="button" aria-label="Quick view">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6.5 5 2 12 2 12s4.5 7 10 7 10-7 10-7-4.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
              </button>
            </div>
            <div class="product-img product-sticker">
              <img src="https://images.unsplash.com/photo-1631292784640-2b24be784d5d?w=600&auto=format&fit=crop&q=70" alt="Pure A2 Cow Ghee 500ml" loading="lazy">
            </div>
            <div class="product-info">
              <span class="product-category">Ghee</span>
              <h3>Pure A2 Cow Ghee 500ml</h3>
              <div class="rating"><span class="stars" style="--rating:5" aria-label="Rated 5 out of 5"></span><small>(54)</small></div>
              <div class="product-tags">
                <span class="product-tag">A2 Milk</span>
                <span class="product-tag">Bilona</span>
                <span class="product-tag gold">Hand Churned</span>
              </div>
              <div class="product-price"><strong>Rs.629</strong><del>Rs.879</del><em>28% off</em></div>
              <div class="pv-note">100% Authentic | Direct from Farm</div>
              <div class="cart-row">
                <div class="qty-control"><button type="button">-</button><input value="0" readonly><button type="button">+</button></div>
                <button class="cart-btn" type="button">Add to Cart</button>
              </div>
            </div>
          </article>
          <article class="product-card">
            <span class="product-badge new">Just In</span>
            <div class="product-actions">
              <button class="product-action" type="button" aria-label="Add to wishlist">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>
              </button>
              <button class="product-action" type="button" aria-label="Quick view">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6.5 5 2 12 2 12s4.5 7 10 7 10-7 10-7-4.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
              </button>
            </div>
            <div class="product-img product-badge-img">
              <img src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=70" alt="Single-Estate Darjeeling 250g" loading="lazy">
            </div>
            <div class="product-info">
              <span class="product-category">Black Tea</span>
              <h3>Darjeeling First Flush 250g</h3>
              <div class="rating"><span class="stars" style="--rating:4.5" aria-label="Rated 4.5 out of 5"></span><small>(42)</small></div>
              <div class="product-tags">
                <span class="product-tag">Single Estate</span>
                <span class="product-tag">First Flush</span>
                <span class="product-tag gold">Premium</span>
              </div>
              <div class="product-price"><strong>Rs.469</strong><del>Rs.669</del><em>30% off</em></div>
              <div class="pv-note">100% Authentic | Direct from Farm</div>
              <div class="cart-row">
                <div class="qty-control"><button type="button">-</button><input value="0" readonly><button type="button">+</button></div>
                <button class="cart-btn" type="button">Add to Cart</button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

  
  

    <section class="section testimonials-section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Testimonials</span>
          <h2>What Our <span>BA Network</span> Says</h2>
        </div>

        <div class="testimonial-slider">
          <div class="testimonial-track" role="region" aria-label="BA testimonials">
            <article class="testimonial-card">
              <span class="t-quote">"</span>
              <div class="rating"><span class="stars" style="--rating:5" aria-label="Rated 5 out of 5"></span></div>
              <p>The eco accessories helped our local campaign look professional. Customers trusted the branding from day one.</p>
              <div class="t-author">
                <span class="t-avatar" data-color="g">RK</span>
                <div>
                  <strong>Rajesh Kumar</strong>
                  <span>Brand Ambassador, Delhi</span>
                </div>
              </div>
            </article>
            <article class="testimonial-card">
              <span class="t-quote">"</span>
              <div class="rating"><span class="stars" style="--rating:5" aria-label="Rated 5 out of 5"></span></div>
              <p>BA registration and placement flow is clear and easy to explain to new joiners. Activation Bonus credited fast.</p>
              <div class="t-author">
                <span class="t-avatar" data-color="o">PS</span>
                <div>
                  <strong>Priya Sharma</strong>
                  <span>Brand Ambassador, Mumbai</span>
                </div>
              </div>
            </article>
            <article class="testimonial-card">
              <span class="t-quote">"</span>
              <div class="rating"><span class="stars" style="--rating:4.5" aria-label="Rated 4.5 out of 5"></span></div>
              <p>The Stock Point concept makes product support easier for our area. Inventory replenishment is straightforward.</p>
              <div class="t-author">
                <span class="t-avatar" data-color="b">AM</span>
                <div>
                  <strong>Amit Mehta</strong>
                  <span>Stock Point, Pune</span>
                </div>
              </div>
            </article>
            <article class="testimonial-card">
              <span class="t-quote">"</span>
              <div class="rating"><span class="stars" style="--rating:5" aria-label="Rated 5 out of 5"></span></div>
              <p>Monthly commission landed on time and the income structure is genuinely transparent. Easy to plan around.</p>
              <div class="t-author">
                <span class="t-avatar" data-color="r">SN</span>
                <div>
                  <strong>Sneha Nair</strong>
                  <span>Brand Ambassador, Bengaluru</span>
                </div>
              </div>
            </article>
            <article class="testimonial-card">
              <span class="t-quote">"</span>
              <div class="rating"><span class="stars" style="--rating:5" aria-label="Rated 5 out of 5"></span></div>
              <p>Caps and tees with no PV are perfect for events. We could focus on conversations instead of paperwork.</p>
              <div class="t-author">
                <span class="t-avatar" data-color="g">VS</span>
                <div>
                  <strong>Vikram Singh</strong>
                  <span>Brand Ambassador, Jaipur</span>
                </div>
              </div>
            </article>
            <article class="testimonial-card">
              <span class="t-quote">"</span>
              <div class="rating"><span class="stars" style="--rating:4.5" aria-label="Rated 4.5 out of 5"></span></div>
              <p>The Repurchase Bonus on 500 PV both legs really kept the team motivated through the quarter.</p>
              <div class="t-author">
                <span class="t-avatar" data-color="o">DJ</span>
                <div>
                  <strong>Deepa Joshi</strong>
                  <span>Stock Point, Hyderabad</span>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div class="t-controls">
          <button class="t-nav t-prev" type="button" aria-label="Previous testimonials">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.4 7.4 14 6l-6 6 6 6 1.4-1.4L10.8 12z"/></svg>
          </button>
          <div class="t-dots" aria-hidden="true"></div>
          <button class="t-nav t-next" type="button" aria-label="Next testimonials">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8.6 16.6 4.6-4.6-4.6-4.6L10 6l6 6-6 6z"/></svg>
          </button>
        </div>
      </div>
    </section>

  

   

    <section class="section blog-section" id="blog">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Latest Updates</span>
          <h2>From Our Blog</h2>
          <p>Farming tips, traditional recipes, healthy-living guides and stories from our farmer community.</p>
        </div>
        <div class="blog-grid">
          <article class="blog-card">
            <div class="blog-thumb product-cap">
              <img src="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&auto=format&fit=crop&q=70" alt="Basmati buying guide" loading="lazy">
            </div>
            <div class="blog-info">
              <div class="blog-meta"><span>By Admin</span><span>15 Apr 2026</span></div>
              <h3>Basmati buying guide: grain length, ageing, aroma</h3>
              <div class="blog-tags">
                <span class="blog-tag">Rice</span>
                <span class="blog-tag">Buying Guide</span>
                <span class="blog-tag gold">5 min read</span>
              </div>
              <p>What to look for when buying authentic Indian basmati rice for everyday cooking.</p>
              <a href="/rice">Read article -&gt;</a>
            </div>
          </article>
          <article class="blog-card">
            <div class="blog-thumb product-tee">
              <img src="https://images.unsplash.com/photo-1601000785686-29eaff75feff?w=800&auto=format&fit=crop&q=70" alt="Toor Daal Khichdi recipe" loading="lazy">
            </div>
            <div class="blog-info">
              <div class="blog-meta"><span>By Admin</span><span>12 Apr 2026</span></div>
              <h3>Authentic Toor Daal Khichdi: a one-pot classic</h3>
              <div class="blog-tags">
                <span class="blog-tag">Pulses</span>
                <span class="blog-tag">Recipe</span>
                <span class="blog-tag gold">4 min read</span>
              </div>
              <p>A wholesome khichdi recipe using our farm-fresh toor daal and basmati rice.</p>
              <a href="/pulses">Read article -&gt;</a>
            </div>
          </article>
          <article class="blog-card">
            <div class="blog-thumb product-sticker">
              <img src="https://images.unsplash.com/photo-1615485925763-e5be9e6cdee5?w=800&auto=format&fit=crop&q=70" alt="Turmeric health benefits" loading="lazy">
            </div>
            <div class="blog-info">
              <div class="blog-meta"><span>By Admin</span><span>03 Apr 2026</span></div>
              <h3>Why turmeric belongs in every Indian kitchen</h3>
              <div class="blog-tags">
                <span class="blog-tag">Spices</span>
                <span class="blog-tag">Wellness</span>
                <span class="blog-tag warm">Trending</span>
              </div>
              <p>The everyday health benefits of pure, high-curcumin turmeric powder.</p>
              <a href="/spices">Read article -&gt;</a>
            </div>
          </article>
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
            <h2>Login/Register for BA Updates</h2>
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
      <BodyClass className="home" />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
