import BodyClass from "@/components/BodyClass";

// Category | Negila Sene
// Auto-generated from Frontend-design/category.html
// Route: /category
const html = `
    <section class="page-hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">/</span>
          <a href="/shop">Shop</a>
          <span aria-hidden="true">/</span>
          <span id="catBreadcrumb">Category</span>
        </nav>
        <h1 id="catTitle">Category</h1>
        <p id="catDesc">Browse our range of authentic agricultural products sourced directly from verified Indian farmers and suppliers.</p>
      </div>
    </section>

    <section class="section catalog-section">
      <div class="container catalog-grid">
        <aside class="catalog-sidebar" aria-label="Filters">
          <div class="filter-block">
            <h3>Categories</h3>
            <ul class="cat-list" id="catSidebar">
              <li><a href="/shop">All Products</a></li>
              <li><a href="category.html?cat=seeds" data-cat="seeds">Seeds</a></li>
              <li><a href="category.html?cat=sugar" data-cat="sugar">Sugar</a></li>
              <li><a href="category.html?cat=rice" data-cat="rice">Rice</a></li>
              <li><a href="category.html?cat=wheat" data-cat="wheat">Wheat</a></li>
              <li><a href="category.html?cat=pulses" data-cat="pulses">Pulses</a></li>
              <li><a href="category.html?cat=spices" data-cat="spices">Spices</a></li>
              <li><a href="category.html?cat=oils" data-cat="oils">Oils</a></li>
              <li><a href="category.html?cat=tea" data-cat="tea">Tea</a></li>
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
          </div>

          <button class="btn-gold filter-apply" type="button">Apply Filter</button>
        </aside>

        <div class="catalog-main">
          <div class="catalog-toolbar">
            <h2 id="catToolbarTitle">Category</h2>
            <div class="toolbar-right">
              <span class="result-count" id="catResultCount">Showing 6 products</span>
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

          <div class="catalog-products" id="catProducts">
            <!-- Products injected by JS -->
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
