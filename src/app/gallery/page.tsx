import BodyClass from "@/components/BodyClass";

// Gallery | Negila Sene - Eco E-Commerce & BA Network
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
            <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&h=500&fit=crop&q=80" alt="Wheat fields at harvest" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/700x500/2d7a2d/e89328/png?text=Wheat+Field';">
            <figcaption>
              <span class="g-tag">Farm Visits</span>
              <h3>Wheat Harvest Visit</h3>
              <p>Our team visiting Sharbati wheat fields in Madhya Pradesh.</p>
            </figcaption>
          </figure>

          <figure class="gallery-card" data-cat="factory">
            <img src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=700&h=500&fit=crop&q=80" alt="Grain quality testing" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/700x500/8a6028/ffffff/png?text=Grain+Lab';">
            <figcaption>
              <span class="g-tag">Processing</span>
              <h3>Grain Quality Lab</h3>
              <p>Every grain batch is lab-tested for purity before packaging.</p>
            </figcaption>
          </figure>

          <figure class="gallery-card" data-cat="products">
            <img src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=700&h=500&fit=crop&q=80" alt="Fresh harvest display" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/700x500/8a5e1b/ffffff/png?text=Fresh+Harvest';">
            <figcaption>
              <span class="g-tag">Produce</span>
              <h3>Fresh Harvest Display</h3>
              <p>Seasonal produce direct from our partner farms.</p>
            </figcaption>
          </figure>

          <figure class="gallery-card" data-cat="ba">
            <img src="https://images.unsplash.com/photo-1593608684636-b1bc5b9c6b48?w=700&h=500&fit=crop&q=80" alt="Farmers in the field" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/700x500/3d8a3d/ffffff/png?text=Farmers';">
            <figcaption>
              <span class="g-tag">Our Farmers</span>
              <h3>Meet Our Farmers</h3>
              <p>Partner farmers from Punjab who grow our basmati rice.</p>
            </figcaption>
          </figure>

          <figure class="gallery-card" data-cat="events">
            <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=700&h=500&fit=crop&q=80" alt="Farmer recognition gathering" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/700x500/e89328/3d1e15/png?text=Recognition';">
            <figcaption>
              <span class="g-tag">Farm Visits</span>
              <h3>Farmer Recognition Night</h3>
              <p>Honouring top harvest performers from across our farmer network.</p>
            </figcaption>
          </figure>

          <figure class="gallery-card" data-cat="factory">
            <img src="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=700&h=500&fit=crop&q=80" alt="Rice mill floor" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/700x500/2d7a2d/ffffff/png?text=Rice+Mill';">
            <figcaption>
              <span class="g-tag">Processing</span>
              <h3>Rice Mill Floor</h3>
              <p>Aged basmati being polished and packed at our partner mill.</p>
            </figcaption>
          </figure>

          <figure class="gallery-card" data-cat="ba">
            <img src="https://images.unsplash.com/photo-1592982537447-7440770faae9?w=700&h=500&fit=crop&q=80" alt="Farmer co-operative" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/700x500/8a4a32/e89328/png?text=Farmer+Co-op';">
            <figcaption>
              <span class="g-tag">Our Farmers</span>
              <h3>Farmer Co-op Visit</h3>
              <p>Community of pulse farmers in Karnataka who supply our daals.</p>
            </figcaption>
          </figure>

          <figure class="gallery-card" data-cat="products">
            <img src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=700&h=500&fit=crop&q=80" alt="Spice range display" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/700x500/d94435/ffffff/png?text=Spices';">
            <figcaption>
              <span class="g-tag">Produce</span>
              <h3>Authentic Spice Range</h3>
              <p>Hand-picked, sun-dried spices ready for dispatch.</p>
            </figcaption>
          </figure>

          <figure class="gallery-card" data-cat="events">
            <img src="https://images.unsplash.com/photo-1530507629858-e3759c1ea90c?w=700&h=500&fit=crop&q=80" alt="Field walk and inspection" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/700x500/3d8a3d/ffffff/png?text=Field+Visit';">
            <figcaption>
              <span class="g-tag">Farm Visits</span>
              <h3>Organic Field Walk</h3>
              <p>Crop inspection at our certified organic farm in Karnataka.</p>
            </figcaption>
          </figure>

          <figure class="gallery-card" data-cat="ba">
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&h=500&fit=crop&q=80" alt="Founder with farmers" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/700x500/1a4d1a/e89328/png?text=Founder+Farmers';">
            <figcaption>
              <span class="g-tag">Our Farmers</span>
              <h3>Founder With Farmers</h3>
              <p>Founder &amp; CEO meeting our partner farmer network in Maharashtra.</p>
            </figcaption>
          </figure>

          <figure class="gallery-card" data-cat="factory">
            <img src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=700&h=500&fit=crop&q=80" alt="Grain storage warehouse" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/700x500/5d2e1f/e89328/png?text=Storage';">
            <figcaption>
              <span class="g-tag">Processing</span>
              <h3>Grain Storage Facility</h3>
              <p>Climate-controlled storage for fresh produce — pan-India delivery.</p>
            </figcaption>
          </figure>

          <figure class="gallery-card" data-cat="products">
            <img src="https://images.unsplash.com/photo-1615485925763-e5be9e6cdee5?w=700&h=500&fit=crop&q=80" alt="Premium spice pack" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/700x500/e89328/ffffff/png?text=Spice+Pack';">
            <figcaption>
              <span class="g-tag">Produce</span>
              <h3>Premium Turmeric Pack</h3>
              <p>Hand-ground turmeric from Erode in our signature pouch.</p>
            </figcaption>
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
      <BodyClass className="gallery" />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
