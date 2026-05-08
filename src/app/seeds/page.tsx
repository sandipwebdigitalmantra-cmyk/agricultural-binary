import BodyClass from "@/components/BodyClass";

// Seeds | Negila Sene
// Auto-generated from Frontend-design/seeds.html
// Route: /seeds
const html = `
    <section class="page-hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">/</span>
          <a href="/shop">Shop</a>
          <span aria-hidden="true">/</span>
          <span>Seeds</span>
        </nav>
        <h1>Premium <span>Seeds</span></h1>
        <p>High-germination, lab-tested seeds sourced from verified farms across India.</p>
      </div>
    </section>

    <section class="section catalog-section">
      <div class="container catalog-grid">
        <aside class="catalog-sidebar" aria-label="Filters">
          <div class="filter-block">
            <h3>Categories</h3>
            <ul class="cat-list">
              <li><a href="/shop">All Products</a></li>
              <li><a class="active" href="/seeds">Seeds</a></li>
              <li><a href="/sugar">Sugar</a></li>
              <li><a href="/rice">Rice</a></li>
              <li><a href="/wheat">Wheat</a></li>
              <li><a href="/pulses">Pulses</a></li>
              <li><a href="/spices">Spices</a></li>
              <li><a href="/oils">Oils</a></li>
              <li><a href="/tea">Tea</a></li>
            </ul>
          </div>
          <div class="filter-block">
            <h3>Price Range</h3>
            <div class="price-filter">
              <div class="price-inputs">
                <label><span>Min</span><input type="number" id="priceMin" value="0" min="0"></label>
                <label><span>Max</span><input type="number" id="priceMax" value="2000" min="0"></label>
              </div>
              <input type="range" id="priceRange" min="0" max="2000" step="50" value="2000">
              <div class="price-bounds"><span>Rs.0</span><span>Rs.2000</span></div>
            </div>
          </div>
          <div class="filter-block">
            <h3>Availability</h3>
            <label class="filter-check"><input type="checkbox" checked> In Stock</label>
            <label class="filter-check"><input type="checkbox"> Out of Stock</label>
          </div>
          <button class="btn-gold filter-apply" type="button">Apply Filter</button>
        </aside>

        <div class="catalog-main">
          <div class="catalog-toolbar">
            <h2>Seeds</h2>
            <div class="toolbar-right">
              <span class="result-count">Showing 6 products</span>
              <label class="sort-control"><span>Sort by</span><select><option>Default</option><option>Price: Low to High</option><option>Price: High to Low</option><option>Highest Rated</option></select></label>
            </div>
          </div>

          <div class="catalog-products">
            <article class="product-card">
              <span class="product-badge">Best Seller</span>
              <div class="product-actions">
                <button class="product-action" type="button" aria-label="Add to wishlist"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg></button>
                <button class="product-action" type="button" aria-label="Quick view"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6.5 5 2 12 2 12s4.5 7 10 7 10-7 10-7-4.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg></button>
              </div>
              <div class="product-img">
                <span class="discount-tag">-25%</span>
                <img class="product-photo" src="https://images.unsplash.com/photo-1582281298055-e25b84a30b0b?w=500&h=500&fit=crop&q=80" alt="Hybrid Tomato Seeds" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/2d7a2d/ffffff/png?text=Tomato+Seeds';">
              </div>
              <div class="product-info">
                <span class="product-category">Vegetable Seeds</span>
                <h3>Hybrid Tomato Seeds</h3>
                <div class="rating"><span class="stars" style="--rating:5" aria-label="Rated 5 out of 5"></span><small>(86)</small></div>
                <div class="product-price"><strong>Rs.149</strong><del>Rs.199</del><em>25% off</em></div>
                <div class="cart-row"><div class="qty-control"><button type="button">-</button><input value="0" readonly><button type="button">+</button></div><button class="cart-btn" type="button">Add to Cart</button></div>
              </div>
            </article>

            <article class="product-card">
              <span class="product-badge hot">Hot</span>
              <div class="product-actions">
                <button class="product-action" type="button" aria-label="Add to wishlist"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg></button>
                <button class="product-action" type="button" aria-label="Quick view"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6.5 5 2 12 2 12s4.5 7 10 7 10-7 10-7-4.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg></button>
              </div>
              <div class="product-img">
                <span class="discount-tag">-17%</span>
                <img class="product-photo" src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&h=500&fit=crop&q=80" alt="Organic Wheat Seeds" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/2d7a2d/ffffff/png?text=Wheat+Seeds';">
              </div>
              <div class="product-info">
                <span class="product-category">Cereal Seeds</span>
                <h3>Organic Wheat Seeds 1kg</h3>
                <div class="rating"><span class="stars" style="--rating:4.5" aria-label="Rated 4.5 out of 5"></span><small>(64)</small></div>
                <div class="product-price"><strong>Rs.249</strong><del>Rs.299</del><em>17% off</em></div>
                <div class="cart-row"><div class="qty-control"><button type="button">-</button><input value="0" readonly><button type="button">+</button></div><button class="cart-btn" type="button">Add to Cart</button></div>
              </div>
            </article>

            <article class="product-card">
              <span class="product-badge new">New</span>
              <div class="product-actions">
                <button class="product-action" type="button" aria-label="Add to wishlist"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg></button>
                <button class="product-action" type="button" aria-label="Quick view"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6.5 5 2 12 2 12s4.5 7 10 7 10-7 10-7-4.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg></button>
              </div>
              <div class="product-img">
                <span class="discount-tag">-33%</span>
                <img class="product-photo" src="https://images.unsplash.com/photo-1583484963886-cfe2bff2945f?w=500&h=500&fit=crop&q=80" alt="Chilli Seed Pack" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/2d7a2d/ffffff/png?text=Chilli+Seeds';">
              </div>
              <div class="product-info">
                <span class="product-category">Vegetable Seeds</span>
                <h3>Chilli Seed Pack</h3>
                <div class="rating"><span class="stars" style="--rating:5" aria-label="Rated 5 out of 5"></span><small>(102)</small></div>
                <div class="product-price"><strong>Rs.99</strong><del>Rs.149</del><em>33% off</em></div>
                <div class="cart-row"><div class="qty-control"><button type="button">-</button><input value="0" readonly><button type="button">+</button></div><button class="cart-btn" type="button">Add to Cart</button></div>
              </div>
            </article>

            <article class="product-card">
              <span class="product-badge">Top Pick</span>
              <div class="product-actions">
                <button class="product-action" type="button" aria-label="Add to wishlist"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg></button>
                <button class="product-action" type="button" aria-label="Quick view"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6.5 5 2 12 2 12s4.5 7 10 7 10-7 10-7-4.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg></button>
              </div>
              <div class="product-img">
                <span class="discount-tag">-25%</span>
                <img class="product-photo" src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=500&h=500&fit=crop&q=80" alt="Marigold Flower Seeds" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/2d7a2d/ffffff/png?text=Marigold';">
              </div>
              <div class="product-info">
                <span class="product-category">Flower Seeds</span>
                <h3>Marigold Flower Seeds</h3>
                <div class="rating"><span class="stars" style="--rating:4.5" aria-label="Rated 4.5 out of 5"></span><small>(47)</small></div>
                <div class="product-price"><strong>Rs.89</strong><del>Rs.119</del><em>25% off</em></div>
                <div class="cart-row"><div class="qty-control"><button type="button">-</button><input value="0" readonly><button type="button">+</button></div><button class="cart-btn" type="button">Add to Cart</button></div>
              </div>
            </article>

            <article class="product-card">
              <span class="product-badge">Limited</span>
              <div class="product-actions">
                <button class="product-action" type="button" aria-label="Add to wishlist"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg></button>
                <button class="product-action" type="button" aria-label="Quick view"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6.5 5 2 12 2 12s4.5 7 10 7 10-7 10-7-4.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg></button>
              </div>
              <div class="product-img">
                <span class="discount-tag">-25%</span>
                <img class="product-photo" src="https://images.unsplash.com/photo-1604908554049-b2d6cf2b4f3d?w=500&h=500&fit=crop&q=80" alt="Cucumber Seeds" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/2d7a2d/ffffff/png?text=Cucumber';">
              </div>
              <div class="product-info">
                <span class="product-category">Vegetable Seeds</span>
                <h3>Cucumber Seeds</h3>
                <div class="rating"><span class="stars" style="--rating:4.5" aria-label="Rated 4.5 out of 5"></span><small>(38)</small></div>
                <div class="product-price"><strong>Rs.119</strong><del>Rs.159</del><em>25% off</em></div>
                <div class="cart-row"><div class="qty-control"><button type="button">-</button><input value="0" readonly><button type="button">+</button></div><button class="cart-btn" type="button">Add to Cart</button></div>
              </div>
            </article>

            <article class="product-card">
              <span class="product-badge">Best Seller</span>
              <div class="product-actions">
                <button class="product-action" type="button" aria-label="Add to wishlist"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg></button>
                <button class="product-action" type="button" aria-label="Quick view"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6.5 5 2 12 2 12s4.5 7 10 7 10-7 10-7-4.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg></button>
              </div>
              <div class="product-img">
                <span class="discount-tag">-18%</span>
                <img class="product-photo" src="https://images.unsplash.com/photo-1631292784640-2b24be784d5d?w=500&h=500&fit=crop&q=80" alt="Mustard Seeds" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/2d7a2d/ffffff/png?text=Mustard';">
              </div>
              <div class="product-info">
                <span class="product-category">Oil Seeds</span>
                <h3>Mustard Seeds 500g</h3>
                <div class="rating"><span class="stars" style="--rating:5" aria-label="Rated 5 out of 5"></span><small>(73)</small></div>
                <div class="product-price"><strong>Rs.179</strong><del>Rs.219</del><em>18% off</em></div>
                <div class="cart-row"><div class="qty-control"><button type="button">-</button><input value="0" readonly><button type="button">+</button></div><button class="cart-btn" type="button">Add to Cart</button></div>
              </div>
            </article>
          </div>
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
