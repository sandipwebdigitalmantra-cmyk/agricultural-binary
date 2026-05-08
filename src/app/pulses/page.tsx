import BodyClass from "@/components/BodyClass";

// Pulses | Negila Sene
// Auto-generated from Frontend-design/pulses.html
// Route: /pulses
const html = `
    <section class="page-hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span aria-hidden="true">/</span><a href="/shop">Shop</a><span aria-hidden="true">/</span><span>Pulses</span>
        </nav>
        <h1>Wholesome <span>Pulses</span></h1>
        <p>Protein-rich daals and lentils sourced from Indian pulse farms.</p>
      </div>
    </section>

    <section class="section catalog-section">
      <div class="container catalog-grid">
        <aside class="catalog-sidebar" aria-label="Filters">
          <div class="filter-block">
            <h3>Categories</h3>
            <ul class="cat-list">
              <li><a href="/shop">All Products</a></li>
              <li><a href="/seeds">Seeds</a></li>
              <li><a href="/sugar">Sugar</a></li>
              <li><a href="/rice">Rice</a></li>
              <li><a href="/wheat">Wheat</a></li>
              <li><a class="active" href="/pulses">Pulses</a></li>
              <li><a href="/spices">Spices</a></li>
              <li><a href="/oils">Oils</a></li>
              <li><a href="/tea">Tea</a></li>
            </ul>
          </div>
          <div class="filter-block">
            <h3>Price Range</h3>
            <div class="price-filter">
              <div class="price-inputs"><label><span>Min</span><input type="number" id="priceMin" value="0" min="0"></label><label><span>Max</span><input type="number" id="priceMax" value="2000" min="0"></label></div>
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
            <h2>Pulses</h2>
            <div class="toolbar-right"><span class="result-count">Showing 6 products</span><label class="sort-control"><span>Sort by</span><select><option>Default</option><option>Price: Low to High</option><option>Price: High to Low</option><option>Highest Rated</option></select></label></div>
          </div>

          <div class="catalog-products">
            <article class="product-card">
              <span class="product-badge">Best Seller</span>
              <div class="product-actions"><button class="product-action" type="button" aria-label="Add to wishlist"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg></button><button class="product-action" type="button" aria-label="Quick view"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6.5 5 2 12 2 12s4.5 7 10 7 10-7 10-7-4.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg></button></div>
              <div class="product-img"><span class="discount-tag">-20%</span><img class="product-photo" src="https://images.unsplash.com/photo-1601000785686-29eaff75feff?w=500&h=500&fit=crop&q=80" alt="Toor Daal" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/d4af37/ffffff/png?text=Toor+Daal';"></div>
              <div class="product-info">
                <span class="product-category">Lentils</span>
                <h3>Toor Daal 1kg</h3>
                <div class="rating"><span class="stars" style="--rating:5"></span><small>(167)</small></div>
                <div class="product-price"><strong>Rs.159</strong><del>Rs.199</del><em>20% off</em></div>
                <div class="pv-note">No PV | Company Sale</div>
                <div class="cart-row"><div class="qty-control"><button type="button">-</button><input value="0" readonly><button type="button">+</button></div><button class="cart-btn" type="button">Add to Cart</button></div>
              </div>
            </article>

            <article class="product-card">
              <span class="product-badge hot">Hot</span>
              <div class="product-actions"><button class="product-action" type="button" aria-label="Add to wishlist"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg></button><button class="product-action" type="button" aria-label="Quick view"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6.5 5 2 12 2 12s4.5 7 10 7 10-7 10-7-4.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg></button></div>
              <div class="product-img"><span class="discount-tag">-22%</span><img class="product-photo" src="https://images.unsplash.com/photo-1599049482093-bf6e1ddc34dd?w=500&h=500&fit=crop&q=80" alt="Moong Daal" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/2d7a2d/ffffff/png?text=Moong';"></div>
              <div class="product-info">
                <span class="product-category">Lentils</span>
                <h3>Moong Daal 1kg</h3>
                <div class="rating"><span class="stars" style="--rating:4.5"></span><small>(134)</small></div>
                <div class="product-price"><strong>Rs.139</strong><del>Rs.179</del><em>22% off</em></div>
                <div class="pv-note">No PV | Company Sale</div>
                <div class="cart-row"><div class="qty-control"><button type="button">-</button><input value="0" readonly><button type="button">+</button></div><button class="cart-btn" type="button">Add to Cart</button></div>
              </div>
            </article>

            <article class="product-card">
              <span class="product-badge">Top Pick</span>
              <div class="product-actions"><button class="product-action" type="button" aria-label="Add to wishlist"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg></button><button class="product-action" type="button" aria-label="Quick view"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6.5 5 2 12 2 12s4.5 7 10 7 10-7 10-7-4.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg></button></div>
              <div class="product-img"><span class="discount-tag">-20%</span><img class="product-photo" src="https://images.unsplash.com/photo-1601000827371-2cdc4f8eb6d2?w=500&h=500&fit=crop&q=80" alt="Chana Daal" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/d4af37/ffffff/png?text=Chana';"></div>
              <div class="product-info">
                <span class="product-category">Lentils</span>
                <h3>Chana Daal 1kg</h3>
                <div class="rating"><span class="stars" style="--rating:5"></span><small>(198)</small></div>
                <div class="product-price"><strong>Rs.119</strong><del>Rs.149</del><em>20% off</em></div>
                <div class="pv-note">No PV | Company Sale</div>
                <div class="cart-row"><div class="qty-control"><button type="button">-</button><input value="0" readonly><button type="button">+</button></div><button class="cart-btn" type="button">Add to Cart</button></div>
              </div>
            </article>

            <article class="product-card">
              <span class="product-badge new">New</span>
              <div class="product-actions"><button class="product-action" type="button" aria-label="Add to wishlist"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg></button><button class="product-action" type="button" aria-label="Quick view"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6.5 5 2 12 2 12s4.5 7 10 7 10-7 10-7-4.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg></button></div>
              <div class="product-img"><span class="discount-tag">-22%</span><img class="product-photo" src="https://images.unsplash.com/photo-1614734075297-49c4be6dde17?w=500&h=500&fit=crop&q=80" alt="Rajma" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/d94435/ffffff/png?text=Rajma';"></div>
              <div class="product-info">
                <span class="product-category">Beans</span>
                <h3>Rajma Kidney Beans 1kg</h3>
                <div class="rating"><span class="stars" style="--rating:5"></span><small>(89)</small></div>
                <div class="product-price"><strong>Rs.179</strong><del>Rs.229</del><em>22% off</em></div>
                <div class="pv-note">No PV | Company Sale</div>
                <div class="cart-row"><div class="qty-control"><button type="button">-</button><input value="0" readonly><button type="button">+</button></div><button class="cart-btn" type="button">Add to Cart</button></div>
              </div>
            </article>

            <article class="product-card">
              <span class="product-badge">Limited</span>
              <div class="product-actions"><button class="product-action" type="button" aria-label="Add to wishlist"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg></button><button class="product-action" type="button" aria-label="Quick view"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6.5 5 2 12 2 12s4.5 7 10 7 10-7 10-7-4.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg></button></div>
              <div class="product-img"><span class="discount-tag">-23%</span><img class="product-photo" src="https://images.unsplash.com/photo-1601001435957-74f0958a93c5?w=500&h=500&fit=crop&q=80" alt="Urad Daal" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/3d1e15/ffffff/png?text=Urad';"></div>
              <div class="product-info">
                <span class="product-category">Lentils</span>
                <h3>Black Urad Daal 1kg</h3>
                <div class="rating"><span class="stars" style="--rating:4.5"></span><small>(76)</small></div>
                <div class="product-price"><strong>Rs.169</strong><del>Rs.219</del><em>23% off</em></div>
                <div class="pv-note">No PV | Company Sale</div>
                <div class="cart-row"><div class="qty-control"><button type="button">-</button><input value="0" readonly><button type="button">+</button></div><button class="cart-btn" type="button">Add to Cart</button></div>
              </div>
            </article>

            <article class="product-card">
              <span class="product-badge">Best Seller</span>
              <div class="product-actions"><button class="product-action" type="button" aria-label="Add to wishlist"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg></button><button class="product-action" type="button" aria-label="Quick view"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6.5 5 2 12 2 12s4.5 7 10 7 10-7 10-7-4.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg></button></div>
              <div class="product-img"><span class="discount-tag">-24%</span><img class="product-photo" src="https://images.unsplash.com/photo-1599909533730-a6a4c5b40e94?w=500&h=500&fit=crop&q=80" alt="Masoor Daal" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/d94435/ffffff/png?text=Masoor';"></div>
              <div class="product-info">
                <span class="product-category">Lentils</span>
                <h3>Masoor Daal 1kg</h3>
                <div class="rating"><span class="stars" style="--rating:5"></span><small>(112)</small></div>
                <div class="product-price"><strong>Rs.129</strong><del>Rs.169</del><em>24% off</em></div>
                <div class="pv-note">No PV | Company Sale</div>
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
