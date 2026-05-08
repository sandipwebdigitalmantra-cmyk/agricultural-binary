import BodyClass from "@/components/BodyClass";

// Eco Products | Categories | Negila Sene
// Auto-generated from Frontend-design/categories.html
// Route: /categories
const html = `
    <section class="page-hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">/</span>
          <a href="/categories">Categories</a>
          <span aria-hidden="true">/</span>
          <span>Eco Products</span>
        </nav>
        <h1>Eco <span>Products</span></h1>
        <p>Verified, company-supplied eco essentials curated for Brand Ambassadors and Stock Points.</p>
      </div>
    </section>

    <section class="section catalog-section">
      <div class="container catalog-grid">
        <aside class="catalog-sidebar" aria-label="Filters">
          <div class="filter-block">
            <h3>Categories</h3>
            <ul class="cat-list">
              <li><a class="active" href="categories.html?cat=eco">Eco Products <span>10</span></a></li>
              <li><a href="categories.html?cat=accessories">Accessories <span>8</span></a></li>
              <li><a href="categories.html?cat=ba-tools">BA Tools <span>6</span></a></li>
              <li><a href="categories.html?cat=wellness">Wellness Range <span>5</span></a></li>
              <li><a href="categories.html?cat=health">Health Care <span>4</span></a></li>
              <li><a href="categories.html?cat=identity">Identity &amp; Badges <span>3</span></a></li>
              <li><a href="categories.html?cat=events">Events &amp; Promotion <span>4</span></a></li>
              <li><a href="categories.html?cat=stock-point">Stock Point Supply <span>2</span></a></li>
            </ul>
          </div>

          <div class="filter-block">
            <h3>Price Range</h3>
            <div class="price-filter">
              <div class="price-inputs">
                <label>
                  <span>Min</span>
                  <input type="number" id="priceMin" value="0" min="0">
                </label>
                <label>
                  <span>Max</span>
                  <input type="number" id="priceMax" value="1000" min="0">
                </label>
              </div>
              <input type="range" id="priceRange" min="0" max="2000" step="50" value="1000">
              <div class="price-bounds"><span>Rs.0</span><span>Rs.2000</span></div>
            </div>
          </div>

          <div class="filter-block">
            <h3>Availability</h3>
            <label class="filter-check"><input type="checkbox" checked> In Stock</label>
            <label class="filter-check"><input type="checkbox"> Out of Stock</label>
            <label class="filter-check"><input type="checkbox"> No PV Items</label>
          </div>

          <button class="btn-gold filter-apply" type="button">Apply Filter</button>
        </aside>

        <div class="catalog-main">
          <div class="catalog-toolbar">
            <h2>Our Products</h2>
            <div class="toolbar-right">
              <span class="result-count">Showing 8 products</span>
              <label class="sort-control">
                <span>Sort by</span>
                <select>
                  <option>Default</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Highest Rated</option>
                  <option>Name: A-Z</option>
                </select>
              </label>
            </div>
          </div>

          <div class="catalog-products">
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
                <img class="product-photo" src="https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=500&fit=crop&q=80" alt="Eco Cap" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/2d7a2d/e89328/png?text=Cap';">
              </div>
              <div class="product-info">
                <span class="product-category">Eco Accessories</span>
                <h3>Eco Cotton Cap</h3>
                <div class="rating"><span class="stars" style="--rating:5" aria-label="Rated 5 out of 5"></span><small>(124)</small></div>
                <div class="product-price"><strong>Rs.299</strong><del>Rs.399</del><em>25% off</em></div>
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
                <img class="product-photo" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop&q=80" alt="Eco T-shirt" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/8a6028/ffffff/png?text=T-shirt';">
              </div>
              <div class="product-info">
                <span class="product-category">BA Events</span>
                <h3>Organic Cotton T-shirt</h3>
                <div class="rating"><span class="stars" style="--rating:4.5" aria-label="Rated 4.5 out of 5"></span><small>(98)</small></div>
                <div class="product-price"><strong>Rs.599</strong><del>Rs.799</del><em>25% off</em></div>
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
              <div class="product-img product-tote">
                <span class="discount-tag">-30%</span>
                <img class="product-photo" src="https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&h=500&fit=crop&q=80" alt="Eco Tote Bag" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/6b5524/ffffff/png?text=Tote+Bag';">
              </div>
              <div class="product-info">
                <span class="product-category">Eco Accessories</span>
                <h3>Reusable Tote Bag</h3>
                <div class="rating"><span class="stars" style="--rating:5" aria-label="Rated 5 out of 5"></span><small>(89)</small></div>
                <div class="product-price"><strong>Rs.349</strong><del>Rs.499</del><em>30% off</em></div>
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
              <div class="product-img product-bottle">
                <span class="discount-tag">-28%</span>
                <img class="product-photo" src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop&q=80" alt="Eco Sipper Bottle" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/1f5a6b/ffffff/png?text=Bottle';">
              </div>
              <div class="product-info">
                <span class="product-category">Eco Accessories</span>
                <h3>Stainless Sipper Bottle</h3>
                <div class="rating"><span class="stars" style="--rating:4.5" aria-label="Rated 4.5 out of 5"></span><small>(38)</small></div>
                <div class="product-price"><strong>Rs.399</strong><del>Rs.549</del><em>28% off</em></div>
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
                <img class="product-photo" src="https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=500&h=500&fit=crop&q=80" alt="Eco Coffee Mug" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/5a3878/ffffff/png?text=Mug';">
              </div>
              <div class="product-info">
                <span class="product-category">BA Events</span>
                <h3>Bamboo Coffee Mug</h3>
                <div class="rating"><span class="stars" style="--rating:4.5" aria-label="Rated 4.5 out of 5"></span><small>(54)</small></div>
                <div class="product-price"><strong>Rs.249</strong><del>Rs.319</del><em>20% off</em></div>
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
              <div class="product-img product-sticker">
                <span class="discount-tag">-25%</span>
                <img class="product-photo" src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&h=500&fit=crop&q=80" alt="Eco Stickers" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/1f6b58/ffffff/png?text=Stickers';">
              </div>
              <div class="product-info">
                <span class="product-category">Promotion</span>
                <h3>Recycled Sticker Pack</h3>
                <div class="rating"><span class="stars" style="--rating:5" aria-label="Rated 5 out of 5"></span><small>(76)</small></div>
                <div class="product-price"><strong>Rs.149</strong><del>Rs.199</del><em>25% off</em></div>
                <div class="cart-row">
                  <div class="qty-control"><button type="button">-</button><input value="0" readonly><button type="button">+</button></div>
                  <button class="cart-btn" type="button">Add to Cart</button>
                </div>
              </div>
            </article>

            <article class="product-card out-of-stock">
              <span class="product-badge sold">Out of Stock</span>
              <div class="product-actions">
                <button class="product-action" type="button" aria-label="Add to wishlist">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>
                </button>
                <button class="product-action" type="button" aria-label="Quick view">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6.5 5 2 12 2 12s4.5 7 10 7 10-7 10-7-4.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
                </button>
              </div>
              <div class="product-img product-lanyard">
                <img class="product-photo" src="https://images.unsplash.com/photo-1556760544-74068565f05c?w=500&h=500&fit=crop&q=80" alt="ID Lanyard" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/6e4a14/ffffff/png?text=Lanyard';">
              </div>
              <div class="product-info">
                <span class="product-category">Identity</span>
                <h3>Eco Fabric Lanyard</h3>
                <div class="rating"><span class="stars" style="--rating:5" aria-label="Rated 5 out of 5"></span><small>(106)</small></div>
                <div class="product-price"><strong>Rs.129</strong><del>Rs.149</del><em>15% off</em></div>
                <div class="cart-row">
                  <div class="qty-control"><button type="button" disabled>-</button><input value="0" readonly><button type="button" disabled>+</button></div>
                  <button class="cart-btn" type="button" disabled>Out of Stock</button>
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
                <img class="product-photo" src="https://images.unsplash.com/photo-1559717865-a99cac1c95d8?w=500&h=500&fit=crop&q=80" alt="Eco Badge" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/8a5e1b/ffffff/png?text=Badge';">
              </div>
              <div class="product-info">
                <span class="product-category">Identity</span>
                <h3>Wooden Identity Badge</h3>
                <div class="rating"><span class="stars" style="--rating:4.5" aria-label="Rated 4.5 out of 5"></span><small>(63)</small></div>
                <div class="product-price"><strong>Rs.99</strong><del>Rs.149</del><em>34% off</em></div>
                <div class="cart-row">
                  <div class="qty-control"><button type="button">-</button><input value="0" readonly><button type="button">+</button></div>
                  <button class="cart-btn" type="button">Add to Cart</button>
                </div>
              </div>
            </article>
          </div>

          <nav class="pagination" aria-label="Products pagination">
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
      </div>
    </section>
  `;

export default function Page() {
  return (
    <>
      <BodyClass className="catalog" />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
