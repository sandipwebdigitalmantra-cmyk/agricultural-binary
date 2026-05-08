import BodyClass from "@/components/BodyClass";

// Shop | Negila Sene
// Auto-generated from Frontend-design/shop.html
// Route: /shop
const html = `
 <section class="page-hero">
 <div class="container">
 <nav class="breadcrumb" aria-label="Breadcrumb">
 <a href="/">Home</a>
 <span aria-hidden="true">/</span>
 <span>Shop</span>
 </nav>
 <h1>Shop <span>All Products</span></h1>
 <p>Browse the full Negila Sene catalogue — products, branded accessories and Member tools, all available with company-direct pricing.</p>
 </div>
 </section>

 <section class="section catalog-section">
 <div class="container catalog-grid">
 <aside class="catalog-sidebar" aria-label="Filters">
 <div class="filter-block">
 <h3>Categories</h3>
 <ul class="cat-list">
 <li><a class="active" href="/shop">All Products <span>12</span></a></li>
 <li><a href="/seeds">Seeds <span>6</span></a></li>
 <li><a href="/sugar">Sugar <span>6</span></a></li>
 <li><a href="/rice">Rice <span>6</span></a></li>
 <li><a href="/wheat">Wheat <span>6</span></a></li>
 <li><a href="/pulses">Pulses <span>6</span></a></li>
 <li><a href="/spices">Spices <span>6</span></a></li>
 <li><a href="/oils">Oils <span>6</span></a></li>
 <li><a href="/tea">Tea <span>6</span></a></li>
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
 <input type="number" id="priceMax" value="2000" min="0">
 </label>
 </div>
 <input type="range" id="priceRange" min="0" max="2000" step="50" value="2000">
 <div class="price-bounds"><span>Rs.0</span><span>Rs.2000</span></div>
 </div>
 </div>

 <div class="filter-block">
 <h3>Availability</h3>
 <label class="filter-check"><input type="checkbox" checked> In Stock</label>
 <label class="filter-check"><input type="checkbox"> Out of Stock</label>
 <label class="filter-check"><input type="checkbox"> Branded Items</label>
 </div>

 <div class="filter-block">
 <h3>Tags</h3>
 <div class="filter-tags">
 <span class="filter-tag-chip">Organic</span>
 <span class="filter-tag-chip">Premium</span>
 <span class="filter-tag-chip">Bestseller</span>
 <span class="filter-tag-chip">New Arrival</span>
 <span class="filter-tag-chip">Hot Deal</span>
 <span class="filter-tag-chip">Limited Stock</span>
 </div>
 </div>

 <button class="btn-gold filter-apply" type="button">Apply Filter</button>
 </aside>

 <div class="catalog-main">
 <div class="catalog-toolbar">
 <h2>All Products</h2>
 <div class="toolbar-right">
 <span class="result-count">Showing 12 products</span>
 <label class="sort-control">
 <span>Sort by</span>
 <select>
 <option>Default</option>
 <option>Price: Low to High</option>
 <option>Price: High to Low</option>
 <option>Highest Rated</option>
 <option>Newest First</option>
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
 <img class="product-photo" src="/assets/products/basmati-rice.jpg" alt="Basmati Rice 5kg" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/2d7a2d/ffffff/png?text=Basmati';">
 </div>
 <div class="product-info">
 <span class="product-category">Long Grain</span>
 <h3>Basmati Rice 5kg</h3>
 <div class="rating"><span class="stars" style="--rating:5" aria-label="Rated 5 out of 5"></span><small>(234)</small></div>
 <div class="product-tags">
 <span class="product-tag">Aged</span>
 <span class="product-tag">Aromatic</span>
 <span class="product-tag gold">Premium</span>
 </div>
 <div class="product-price"><strong>Rs.599</strong><del>Rs.799</del><em>25% off</em></div>
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
 <img class="product-photo" src="/assets/products/wheat-flour.jpg" alt="Whole Wheat Flour 10kg" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/8a6028/ffffff/png?text=Wheat+Flour';">
 </div>
 <div class="product-info">
 <span class="product-category">Atta</span>
 <h3>Whole Wheat Flour 10kg</h3>
 <div class="rating"><span class="stars" style="--rating:4.5" aria-label="Rated 4.5 out of 5"></span><small>(312)</small></div>
 <div class="product-tags">
 <span class="product-tag">Whole Grain</span>
 <span class="product-tag">Sharbati</span>
 <span class="product-tag warm">Stone Ground</span>
 </div>
 <div class="product-price"><strong>Rs.449</strong><del>Rs.549</del><em>18% off</em></div>
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
 <img class="product-photo" src="/assets/products/toor-daal.jpg" alt="Toor Daal 1kg" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/d4af37/ffffff/png?text=Toor+Daal';">
 </div>
 <div class="product-info">
 <span class="product-category">Lentils</span>
 <h3>Toor Daal 1kg</h3>
 <div class="rating"><span class="stars" style="--rating:5" aria-label="Rated 5 out of 5"></span><small>(167)</small></div>
 <div class="product-tags">
 <span class="product-tag">Unpolished</span>
 <span class="product-tag">Sun-Dried</span>
 <span class="product-tag gold">High Protein</span>
 </div>
 <div class="product-price"><strong>Rs.159</strong><del>Rs.199</del><em>20% off</em></div>
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
 <img class="product-photo" src="/assets/products/moong-daal.jpg" alt="Moong Daal 1kg" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/2d7a2d/ffffff/png?text=Moong+Daal';">
 </div>
 <div class="product-info">
 <span class="product-category">Lentils</span>
 <h3>Moong Daal 1kg</h3>
 <div class="rating"><span class="stars" style="--rating:5" aria-label="Rated 5 out of 5"></span><small>(134)</small></div>
 <div class="product-tags">
 <span class="product-tag">Split</span>
 <span class="product-tag">Yellow</span>
 <span class="product-tag gold">Easy Cook</span>
 </div>
 <div class="product-price"><strong>Rs.139</strong><del>Rs.179</del><em>22% off</em></div>
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
 <img class="product-photo" src="/assets/products/refined-sugar.jpg" alt="Refined White Sugar 5kg" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/e89328/ffffff/png?text=Sugar';">
 </div>
 <div class="product-info">
 <span class="product-category">White Sugar</span>
 <h3>Refined White Sugar 5kg</h3>
 <div class="rating"><span class="stars" style="--rating:4.5" aria-label="Rated 4.5 out of 5"></span><small>(156)</small></div>
 <div class="product-tags">
 <span class="product-tag">Crystal</span>
 <span class="product-tag">Pure</span>
 <span class="product-tag gold">Family Pack</span>
 </div>
 <div class="product-price"><strong>Rs.299</strong><del>Rs.349</del><em>14% off</em></div>
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
 <img class="product-photo" src="/assets/products/mustard-oil.jpg" alt="Mustard Oil 1L" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/e89328/ffffff/png?text=Mustard+Oil';">
 </div>
 <div class="product-info">
 <span class="product-category">Cooking Oil</span>
 <h3>Mustard Oil 1L</h3>
 <div class="rating"><span class="stars" style="--rating:4.5" aria-label="Rated 4.5 out of 5"></span><small>(198)</small></div>
 <div class="product-tags">
 <span class="product-tag">Cold Pressed</span>
 <span class="product-tag">Kachi Ghani</span>
 <span class="product-tag gold">Pure</span>
 </div>
 <div class="product-price"><strong>Rs.199</strong><del>Rs.249</del><em>20% off</em></div>
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
 <span class="discount-tag">-15%</span>
 <img class="product-photo" src="/assets/products/cow-ghee.jpg" alt="Pure Cow Ghee 500ml" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/e89328/ffffff/png?text=Ghee';">
 </div>
 <div class="product-info">
 <span class="product-category">Ghee</span>
 <h3>Pure Cow Ghee 500ml</h3>
 <div class="rating"><span class="stars" style="--rating:5" aria-label="Rated 5 out of 5"></span><small>(287)</small></div>
 <div class="product-tags">
 <span class="product-tag">A2 Milk</span>
 <span class="product-tag">Bilona</span>
 <span class="product-tag gold">Hand Churned</span>
 </div>
 <div class="product-price"><strong>Rs.549</strong><del>Rs.649</del><em>15% off</em></div>
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
 <span class="discount-tag">-22%</span>
 <img class="product-photo" src="/assets/products/assam-tea.jpg" alt="Assam CTC Tea 500g" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/3d1e15/ffffff/png?text=Assam+Tea';">
 </div>
 <div class="product-info">
 <span class="product-category">Black Tea</span>
 <h3>Assam CTC Tea 500g</h3>
 <div class="rating"><span class="stars" style="--rating:4.5" aria-label="Rated 4.5 out of 5"></span><small>(198)</small></div>
 <div class="product-tags">
 <span class="product-tag">Strong</span>
 <span class="product-tag">Single Estate</span>
 <span class="product-tag gold">Premium</span>
 </div>
 <div class="product-price"><strong>Rs.249</strong><del>Rs.299</del><em>17% off</em></div>
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
 <div class="product-img product-pen">
 <span class="discount-tag">-18%</span>
 <img class="product-photo" src="/assets/products/turmeric-powder.jpg" alt="Turmeric Powder 500g" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/e89328/ffffff/png?text=Turmeric';">
 </div>
 <div class="product-info">
 <span class="product-category">Powder Spice</span>
 <h3>Turmeric Powder 500g</h3>
 <div class="rating"><span class="stars" style="--rating:5" aria-label="Rated 5 out of 5"></span><small>(234)</small></div>
 <div class="product-tags">
 <span class="product-tag">High Curcumin</span>
 <span class="product-tag">Pure</span>
 <span class="product-tag gold">Lab Tested</span>
 </div>
 <div class="product-price"><strong>Rs.149</strong><del>Rs.199</del><em>25% off</em></div>
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
 <div class="product-img product-lanyard">
 <span class="discount-tag">-28%</span>
 <img class="product-photo" src="/assets/products/chilli-powder.jpg" alt="Red Chilli Powder 500g" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/d94435/ffffff/png?text=Chilli';">
 </div>
 <div class="product-info">
 <span class="product-category">Powder Spice</span>
 <h3>Red Chilli Powder 500g</h3>
 <div class="rating"><span class="stars" style="--rating:4.5" aria-label="Rated 4.5 out of 5"></span><small>(187)</small></div>
 <div class="product-tags">
 <span class="product-tag">Sun Dried</span>
 <span class="product-tag">Spicy</span>
 <span class="product-tag gold">Pure</span>
 </div>
 <div class="product-price"><strong>Rs.169</strong><del>Rs.219</del><em>23% off</em></div>
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
 <div class="product-img product-tee">
 <span class="discount-tag">-25%</span>
 <img class="product-photo" src="/assets/products/tomato-seeds.jpg" alt="Hybrid Tomato Seeds" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/2d7a2d/ffffff/png?text=Tomato+Seeds';">
 </div>
 <div class="product-info">
 <span class="product-category">Vegetable Seeds</span>
 <h3>Hybrid Tomato Seeds</h3>
 <div class="rating"><span class="stars" style="--rating:5" aria-label="Rated 5 out of 5"></span><small>(86)</small></div>
 <div class="product-tags">
 <span class="product-tag">High Yield</span>
 <span class="product-tag">Lab Tested</span>
 <span class="product-tag warm">F1 Hybrid</span>
 </div>
 <div class="product-price"><strong>Rs.149</strong><del>Rs.199</del><em>25% off</em></div>
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
 <div class="product-img product-cap">
 <span class="discount-tag">-22%</span>
 <img class="product-photo" src="/assets/products/darjeeling-tea.jpg" alt="Darjeeling First Flush 250g" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/500x500/2d7a2d/3d1e15/png?text=Darjeeling';">
 </div>
 <div class="product-info">
 <span class="product-category">Black Tea</span>
 <h3>Darjeeling First Flush 250g</h3>
 <div class="rating"><span class="stars" style="--rating:4.5" aria-label="Rated 4.5 out of 5"></span><small>(156)</small></div>
 <div class="product-tags">
 <span class="product-tag">Single Estate</span>
 <span class="product-tag">First Flush</span>
 <span class="product-tag gold">Champagne of Teas</span>
 </div>
 <div class="product-price"><strong>Rs.449</strong><del>Rs.549</del><em>18% off</em></div>
 <div class="cart-row">
 <div class="qty-control"><button type="button">-</button><input value="0" readonly><button type="button">+</button></div>
 <button class="cart-btn" type="button">Add to Cart</button>
 </div>
 </div>
 </article>
 </div>

 <nav class="pagination" aria-label="Shop pagination">
 <button class="page-btn" type="button" aria-label="Previous page" disabled>
 <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.4 7.4 14 6l-6 6 6 6 1.4-1.4L10.8 12z"/></svg>
 </button>
 <button class="page-btn active" type="button">1</button>
 <button class="page-btn" type="button">2</button>
 <button class="page-btn" type="button">3</button>
 <button class="page-btn" type="button" aria-label="Next page">
 <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.6 7.4 10 6l6 6-6 6-1.4-1.4L13.2 12z"/></svg>
 </button>
 </nav>
 </div>
 </div>
 </section>
 `;

export default function Page() {
 return (
 <>
 <BodyClass className="shop" />
 <main dangerouslySetInnerHTML={{ __html: html }} />
 </>
 );
}
