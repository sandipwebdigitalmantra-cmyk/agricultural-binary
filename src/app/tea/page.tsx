import BodyClass from "@/components/BodyClass";

// Tea | Negila Sene
// Auto-generated from Frontend-design/tea.html
// Route: /tea
const html = `
    <section class="page-hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span aria-hidden="true">/</span><a href="/shop">Shop</a><span aria-hidden="true">/</span><span>Tea</span>
        </nav>
        <h1>Premium <span>Tea</span></h1>
        <p>Single-estate Indian teas from Assam, Darjeeling and the Nilgiris.</p>
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
              <li><a href="/pulses">Pulses</a></li>
              <li><a href="/spices">Spices</a></li>
              <li><a href="/oils">Oils</a></li>
              <li><a class="active" href="/tea">Tea</a></li>
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
            <h2>Tea</h2>
            <div class="toolbar-right"><span class="result-count">Showing 6 products</span><label class="sort-control"><span>Sort by</span><select><option>Default</option><option>Price: Low to High</option><option>Price: High to Low</option><option>Highest Rated</option></select></label></div>
          </div>

          <div class="catalog-products">
            <article class="product-card">
              <span class="product-badge">Best Seller</span>
              <div class="product-actions"><button class="product-action" type="button" aria-label="Add to wishlist"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg></button><button class="product-action" type="button" aria-label="Quick view"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6.5 5 2 12 2 12s4.5 7 10 7 10-7 10-7-4.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg></button></div>
              <div class="product-img"><span class="discount-tag">-17%</span><img class="product-photo" src="https://images.unsplash.com/photo-1597318236999-0c0a4cb04b6c?w=500&h=500&fit=crop&q=80" alt="Assam Tea" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/3d1e15/ffffff/png?text=Assam';"></div>
              <div class="product-info">
                <span class="product-category">Black Tea</span>
                <h3>Assam CTC Tea 500g</h3>
                <div class="rating"><span class="stars" style="--rating:5"></span><small>(198)</small></div>
                <div class="product-price"><strong>Rs.249</strong><del>Rs.299</del><em>17% off</em></div>
                <div class="cart-row"><div class="qty-control"><button type="button">-</button><input value="0" readonly><button type="button">+</button></div><button class="cart-btn" type="button">Add to Cart</button></div>
              </div>
            </article>

            <article class="product-card">
              <span class="product-badge hot">Hot</span>
              <div class="product-actions"><button class="product-action" type="button" aria-label="Add to wishlist"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg></button><button class="product-action" type="button" aria-label="Quick view"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6.5 5 2 12 2 12s4.5 7 10 7 10-7 10-7-4.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg></button></div>
              <div class="product-img"><span class="discount-tag">-18%</span><img class="product-photo" src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&h=500&fit=crop&q=80" alt="Darjeeling Tea" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/3d1e15/ffffff/png?text=Darjeeling';"></div>
              <div class="product-info">
                <span class="product-category">Black Tea</span>
                <h3>Darjeeling First Flush 250g</h3>
                <div class="rating"><span class="stars" style="--rating:5"></span><small>(156)</small></div>
                <div class="product-price"><strong>Rs.449</strong><del>Rs.549</del><em>18% off</em></div>
                <div class="cart-row"><div class="qty-control"><button type="button">-</button><input value="0" readonly><button type="button">+</button></div><button class="cart-btn" type="button">Add to Cart</button></div>
              </div>
            </article>

            <article class="product-card">
              <span class="product-badge">Top Pick</span>
              <div class="product-actions"><button class="product-action" type="button" aria-label="Add to wishlist"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg></button><button class="product-action" type="button" aria-label="Quick view"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6.5 5 2 12 2 12s4.5 7 10 7 10-7 10-7-4.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg></button></div>
              <div class="product-img"><span class="discount-tag">-20%</span><img class="product-photo" src="https://images.unsplash.com/photo-1597318236999-0c0a4cb04b6c?w=500&h=500&fit=crop&q=80" alt="Masala Chai" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/8a3838/ffffff/png?text=Masala+Chai';"></div>
              <div class="product-info">
                <span class="product-category">Spiced Tea</span>
                <h3>Masala Chai Blend 250g</h3>
                <div class="rating"><span class="stars" style="--rating:5"></span><small>(234)</small></div>
                <div class="product-price"><strong>Rs.199</strong><del>Rs.249</del><em>20% off</em></div>
                <div class="cart-row"><div class="qty-control"><button type="button">-</button><input value="0" readonly><button type="button">+</button></div><button class="cart-btn" type="button">Add to Cart</button></div>
              </div>
            </article>

            <article class="product-card">
              <span class="product-badge new">New</span>
              <div class="product-actions"><button class="product-action" type="button" aria-label="Add to wishlist"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg></button><button class="product-action" type="button" aria-label="Quick view"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6.5 5 2 12 2 12s4.5 7 10 7 10-7 10-7-4.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg></button></div>
              <div class="product-img"><span class="discount-tag">-21%</span><img class="product-photo" src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&h=500&fit=crop&q=80" alt="Green Tea" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/2d7a2d/ffffff/png?text=Green+Tea';"></div>
              <div class="product-info">
                <span class="product-category">Green Tea</span>
                <h3>Green Tea Leaves 250g</h3>
                <div class="rating"><span class="stars" style="--rating:4.5"></span><small>(124)</small></div>
                <div class="product-price"><strong>Rs.299</strong><del>Rs.379</del><em>21% off</em></div>
                <div class="cart-row"><div class="qty-control"><button type="button">-</button><input value="0" readonly><button type="button">+</button></div><button class="cart-btn" type="button">Add to Cart</button></div>
              </div>
            </article>

            <article class="product-card">
              <span class="product-badge">Limited</span>
              <div class="product-actions"><button class="product-action" type="button" aria-label="Add to wishlist"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg></button><button class="product-action" type="button" aria-label="Quick view"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6.5 5 2 12 2 12s4.5 7 10 7 10-7 10-7-4.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg></button></div>
              <div class="product-img"><span class="discount-tag">-25%</span><img class="product-photo" src="https://images.unsplash.com/photo-1597318236999-0c0a4cb04b6c?w=500&h=500&fit=crop&q=80" alt="Tulsi Tea" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/2d7a2d/ffffff/png?text=Tulsi';"></div>
              <div class="product-info">
                <span class="product-category">Herbal Tea</span>
                <h3>Tulsi Herbal Tea 100g</h3>
                <div class="rating"><span class="stars" style="--rating:4.5"></span><small>(89)</small></div>
                <div class="product-price"><strong>Rs.149</strong><del>Rs.199</del><em>25% off</em></div>
                <div class="cart-row"><div class="qty-control"><button type="button">-</button><input value="0" readonly><button type="button">+</button></div><button class="cart-btn" type="button">Add to Cart</button></div>
              </div>
            </article>

            <article class="product-card">
              <span class="product-badge">Best Seller</span>
              <div class="product-actions"><button class="product-action" type="button" aria-label="Add to wishlist"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg></button><button class="product-action" type="button" aria-label="Quick view"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6.5 5 2 12 2 12s4.5 7 10 7 10-7 10-7-4.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg></button></div>
              <div class="product-img"><span class="discount-tag">-21%</span><img class="product-photo" src="https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=500&h=500&fit=crop&q=80" alt="Nilgiri Tea" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/3d1e15/ffffff/png?text=Nilgiri';"></div>
              <div class="product-info">
                <span class="product-category">Black Tea</span>
                <h3>Nilgiri Tea 500g</h3>
                <div class="rating"><span class="stars" style="--rating:5"></span><small>(112)</small></div>
                <div class="product-price"><strong>Rs.329</strong><del>Rs.419</del><em>21% off</em></div>
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
