"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

interface CartItem {
  id: string;
  name: string;
  category: string;
  price: number;
  original: number;
  off: string;
  image: string;
  qty: number;
}

const NS_STORE = { cart: "ns_cart", wishlist: "ns_wishlist" } as const;

function nsRead(key: string): CartItem[] {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

function nsWrite(key: string, data: CartItem[]) {
  localStorage.setItem(key, JSON.stringify(data));
}

function nsItemId(item: { name: string; price: number }): string {
  return (item.name + "|" + item.price)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-");
}

function nsExtractFromCard(card: Element): CartItem | null {
  if (!card) return null;
  const name = (card.querySelector("h3")?.textContent || "Product").trim();
  const category = (
    card.querySelector(".product-category")?.textContent || ""
  ).trim();
  const priceText = (
    card.querySelector(".product-price strong")?.textContent || "Rs.0"
  ).trim();
  const originalText = (
    card.querySelector(".product-price del")?.textContent || ""
  ).trim();
  const offText = (
    card.querySelector(".product-price em")?.textContent || ""
  ).trim();
  const price = Number(priceText.replace(/[^\d]/g, "")) || 0;
  const original = Number(originalText.replace(/[^\d]/g, "")) || 0;
  const image =
    (card.querySelector(".product-img img") as HTMLImageElement | null)?.src ||
    (card.querySelector(".product-photo") as HTMLImageElement | null)?.src ||
    "";
  const qtyInput = card.querySelector(
    ".qty-control input"
  ) as HTMLInputElement | null;
  let qty = qtyInput ? Number(qtyInput.value) || 0 : 1;
  if (qty < 1) {
    qty = 1;
    if (qtyInput) qtyInput.value = "1";
  }
  const item: CartItem = {
    id: "",
    name,
    category,
    price,
    original,
    off: offText,
    image,
    qty,
  };
  item.id = nsItemId(item);
  return item;
}

function nsReadOrders(): NsOrder[] {
  try {
    const raw = localStorage.getItem("ns_orders");
    return raw ? (JSON.parse(raw) as NsOrder[]) : [];
  } catch {
    return [];
  }
}

interface NsOrder {
  id: string;
  name: string;
  email: string;
  phone: string;
  address1: string;
  address2: string;
  city: string;
  pincode: string;
  state: string;
  payment: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  gst: number;
  total: number;
  placedAt: number;
}

function nsOrderStage(placedAt: number): 0 | 1 | 2 | 3 {
  const hours = (Date.now() - placedAt) / 3_600_000;
  if (hours < 1) return 0;
  if (hours < 24) return 1;
  if (hours < 72) return 2;
  return 3;
}

const NS_STAGE_LABELS = ["Ordered", "Shipped", "Out for Delivery", "Delivered"];

function nsUpdateBadges() {
  const cartCountTotal = nsRead(NS_STORE.cart).reduce(
    (sum, i) => sum + (Number(i.qty) || 1),
    0
  );
  const wishCountTotal = nsRead(NS_STORE.wishlist).length;
  const ordersCountTotal = nsReadOrders().length;
  document
    .querySelectorAll(
      'a.action-btn[href$="/cart"] b, a.action-btn[href$="/cart"] #cartCount, a.action-btn[href$="cart.html"] b, a.action-btn[href$="cart.html"] #cartCount'
    )
    .forEach((b) => {
      b.textContent = String(cartCountTotal);
    });
  document
    .querySelectorAll(
      'a.action-btn[href$="/wishlist"] b, a.action-btn[href$="wishlist.html"] b'
    )
    .forEach((b) => {
      b.textContent = String(wishCountTotal);
    });
  document
    .querySelectorAll(
      'a.action-btn[href$="/my-orders"] b, a.action-btn[href$="/my-orders"] #myOrdersCount'
    )
    .forEach((b) => {
      b.textContent = String(ordersCountTotal);
    });
}

function nsAddToCart(item: CartItem) {
  const cart = nsRead(NS_STORE.cart);
  const existing = cart.find((c) => c.id === item.id);
  if (existing) {
    existing.qty = Number(existing.qty) + Number(item.qty || 1);
  } else {
    cart.push(item);
  }
  nsWrite(NS_STORE.cart, cart);
  nsUpdateBadges();
}

function nsCardItemId(card: Element): string | null {
  if (!card) return null;
  const name = (card.querySelector("h3")?.textContent || "Product").trim();
  const priceText = (
    card.querySelector(".product-price strong")?.textContent || "Rs.0"
  ).trim();
  const price = Number(priceText.replace(/[^\d]/g, "")) || 0;
  return nsItemId({ name, price });
}

function nsCartQtyOf(id: string): number {
  const cart = nsRead(NS_STORE.cart);
  const it = cart.find((c) => c.id === id);
  return it ? Number(it.qty) || 0 : 0;
}

function nsSyncProductCards() {
  document.querySelectorAll<HTMLElement>(".product-card").forEach((card) => {
    const input = card.querySelector<HTMLInputElement>(".qty-control input");
    if (!input) return;
    const id = nsCardItemId(card);
    if (!id) return;
    input.value = String(nsCartQtyOf(id));
  });
}

function nsToggleWishlist(item: CartItem): boolean {
  const wishlist = nsRead(NS_STORE.wishlist);
  const idx = wishlist.findIndex((w) => w.id === item.id);
  if (idx >= 0) {
    wishlist.splice(idx, 1);
  } else {
    wishlist.push(item);
  }
  nsWrite(NS_STORE.wishlist, wishlist);
  nsUpdateBadges();
  return idx < 0;
}

function nsRenderCartPage() {
  if (!document.body.classList.contains("cart")) return;
  const root = document.querySelector("main .section .container");
  if (!root) return;

  const cart = nsRead(NS_STORE.cart);
  if (cart.length === 0) return;

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const totalOriginal = cart.reduce(
    (sum, i) => sum + (i.original || i.price) * i.qty,
    0
  );
  const discount = Math.max(0, totalOriginal - subtotal);
  const shipping = subtotal >= 555 ? 0 : 49;
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + gst;
  const itemCount = cart.reduce((sum, i) => sum + i.qty, 0);

  const itemsHtml = cart
    .map(
      (item) => `
    <article class="cart-item" data-id="${item.id}">
      <div class="cart-item-img">
        <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/200x200/2d7a2d/ffffff/png?text=Product';">
      </div>
      <div class="cart-item-info">
        <span class="product-category">${item.category || ""}</span>
        <h3>${item.name}</h3>
        <p class="cart-item-meta">In Stock</p>
        <button class="cart-item-remove" type="button" data-action="remove">Remove</button>
      </div>
      <div class="cart-item-qty">
        <div class="qty-control">
          <button type="button" data-action="decrement">-</button>
          <input value="${item.qty}" readonly>
          <button type="button" data-action="increment">+</button>
        </div>
      </div>
      <div class="cart-item-price">
        <strong>Rs.${item.price * item.qty}</strong>
        ${item.original ? `<del>Rs.${item.original * item.qty}</del>` : ""}
      </div>
    </article>
  `
    )
    .join("");

  root.innerHTML = `
    <div class="cart-grid">
      <div class="cart-items">
        <div class="catalog-toolbar">
          <h2>Your Cart</h2>
          <span class="result-count">${itemCount} item${itemCount > 1 ? "s" : ""}</span>
        </div>
        ${itemsHtml}
        <div class="cart-actions-row">
          <a href="/shop" class="cart-continue">&larr; Continue Shopping</a>
          <button class="cart-clear" type="button" data-action="clear">Clear Cart</button>
        </div>
      </div>

      <aside class="cart-summary">
        <h3>Order Summary</h3>
        <div class="summary-row"><span>Subtotal (${itemCount} item${itemCount > 1 ? "s" : ""})</span><strong>Rs.${subtotal}</strong></div>
        <div class="summary-row"><span>Discount</span><strong class="discount-value">- Rs.${discount}</strong></div>
        <div class="summary-row"><span>Shipping</span><strong class="${shipping === 0 ? "free-shipping" : ""}">${shipping === 0 ? "FREE" : "Rs." + shipping}</strong></div>
        <div class="summary-row"><span>GST (5%)</span><strong>Rs.${gst}</strong></div>
        <div class="summary-divider"></div>
        <div class="summary-row summary-total"><span>Total</span><strong>Rs.${total}</strong></div>
        <div class="summary-coupon">
          <label>Have a coupon code?<input type="text" placeholder="Enter code"></label>
          <button class="cart-apply" type="button">Apply</button>
        </div>
        <a href="/checkout" class="btn-gold cart-checkout">
          Proceed to Checkout
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8.6 16.6 4.6-4.6-4.6-4.6L10 6l6 6-6 6z"/></svg>
        </a>
        <div class="summary-secure">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3z"/></svg>
          100% secure checkout &middot; SSL encrypted
        </div>
      </aside>
    </div>
  `;

  root.querySelectorAll(".cart-item").forEach((row) => {
    const id = (row as HTMLElement).dataset.id || "";
    row
      .querySelector('[data-action="remove"]')
      ?.addEventListener("click", () => {
        const c = nsRead(NS_STORE.cart).filter((x) => x.id !== id);
        nsWrite(NS_STORE.cart, c);
        nsRenderCartPage();
        nsUpdateBadges();
        if (c.length === 0) window.location.reload();
      });
    row
      .querySelector('[data-action="increment"]')
      ?.addEventListener("click", () => {
        const c = nsRead(NS_STORE.cart);
        const it = c.find((x) => x.id === id);
        if (it) {
          it.qty += 1;
          nsWrite(NS_STORE.cart, c);
          nsRenderCartPage();
          nsUpdateBadges();
        }
      });
    row
      .querySelector('[data-action="decrement"]')
      ?.addEventListener("click", () => {
        let c = nsRead(NS_STORE.cart);
        const it = c.find((x) => x.id === id);
        if (!it) return;
        if (it.qty > 1) {
          it.qty -= 1;
        } else {
          c = c.filter((x) => x.id !== id);
        }
        nsWrite(NS_STORE.cart, c);
        nsUpdateBadges();
        if (c.length === 0) {
          window.location.reload();
        } else {
          nsRenderCartPage();
        }
      });
  });

  root.querySelector('[data-action="clear"]')?.addEventListener("click", () => {
    nsWrite(NS_STORE.cart, []);
    nsUpdateBadges();
    window.location.reload();
  });
}

function nsRenderProductPage() {
  if (!document.body.classList.contains("product")) return;
  const root = document.querySelector("main .section .container");
  if (!root) return;

  let item: CartItem | null = null;
  try {
    item = JSON.parse(
      sessionStorage.getItem("ns_product_view") || "null"
    ) as CartItem | null;
  } catch {}
  if (!item || !item.name) return;

  const crumb = document.getElementById("productCrumb");
  if (crumb) crumb.textContent = item.name;
  document.title = item.name + " | Negila Sene";

  const inWishlist = nsRead(NS_STORE.wishlist).some((w) => w.id === item!.id);
  const startQty = nsCartQtyOf(item.id);

  root.innerHTML = `
    <div class="product-detail">
      <div class="product-detail-img">
        <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x600/2d7a2d/ffffff/png?text=Product';">
      </div>
      <div class="product-detail-info">
        ${item.category ? `<span class="product-category">${item.category}</span>` : ""}
        <h2>${item.name}</h2>
        <div class="product-price">
          <strong>Rs.${item.price}</strong>
          ${item.original ? `<del>Rs.${item.original}</del>` : ""}
          ${item.off ? `<em>${item.off}</em>` : ""}
        </div>
        <p class="product-detail-desc">100% authentic produce sourced directly from Indian farmers. Hand-picked, traditionally processed, and delivered fresh to your door.</p>
        <ul class="product-detail-meta">
          <li><strong>Availability:</strong> <span class="in-stock">In Stock</span></li>
          <li><strong>Free Shipping:</strong> On orders above Rs.555</li>
          <li><strong>Quality:</strong> Direct from farm</li>
        </ul>
        <div class="product-detail-actions">
          <div class="qty-control">
            <button type="button" data-action="pd-decrement">-</button>
            <input value="${startQty}" readonly>
            <button type="button" data-action="pd-increment">+</button>
          </div>
          <button class="btn-gold" type="button" data-action="pd-addcart">
            Add to Cart
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM7.2 14.5h7.5c.8 0 1.5-.4 1.9-1.1L21 5H6.2L5.8 3H2v2h2.2l2.2 11c.1.9.9 1.5 1.8 1.5H19v-2H7.2l-.4-1z"/></svg>
          </button>
          <button class="product-detail-wish ${inWishlist ? "is-active" : ""}" type="button" data-action="pd-wishlist" aria-pressed="${inWishlist}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="${inWishlist ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.8"/></svg>
            ${inWishlist ? "Saved" : "Add to Wishlist"}
          </button>
        </div>
        <a href="/shop" class="cart-continue">&larr; Continue Shopping</a>
      </div>
    </div>
  `;

  const qtyInput = root.querySelector<HTMLInputElement>(".qty-control input");
  if (!qtyInput) return;
  const itemRef = item as CartItem;
  root
    .querySelector('[data-action="pd-increment"]')
    ?.addEventListener("click", () => {
      nsAddToCart({ ...itemRef, qty: 1 });
      qtyInput.value = String(nsCartQtyOf(itemRef.id));
    });
  root
    .querySelector('[data-action="pd-decrement"]')
    ?.addEventListener("click", () => {
      const cart = nsRead(NS_STORE.cart);
      const idx = cart.findIndex((c) => c.id === itemRef.id);
      if (idx < 0) return;
      cart[idx].qty = Number(cart[idx].qty) - 1;
      if (cart[idx].qty <= 0) cart.splice(idx, 1);
      nsWrite(NS_STORE.cart, cart);
      qtyInput.value = String(nsCartQtyOf(itemRef.id));
      nsUpdateBadges();
    });
  root
    .querySelector('[data-action="pd-addcart"]')
    ?.addEventListener("click", (e) => {
      nsAddToCart({ ...itemRef, qty: 1 });
      qtyInput.value = String(nsCartQtyOf(itemRef.id));
      const btn = e.currentTarget as HTMLButtonElement;
      const original = btn.innerHTML;
      btn.textContent = "Added to Cart";
      setTimeout(() => {
        btn.innerHTML = original;
      }, 1200);
    });
  root
    .querySelector('[data-action="pd-wishlist"]')
    ?.addEventListener("click", (e) => {
      const added = nsToggleWishlist(item as CartItem);
      const btn = e.currentTarget as HTMLButtonElement;
      btn.classList.toggle("is-active", added);
      btn.setAttribute("aria-pressed", String(added));
      btn.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.3 10.6 20C5.4 15.3 2 12.2 2 8.3 2 5.2 4.4 3 7.4 3c1.7 0 3.4.8 4.6 2.1C13.2 3.8 14.9 3 16.6 3 19.6 3 22 5.2 22 8.3c0 3.9-3.4 7-8.6 11.7L12 21.3z" fill="${added ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.8"/></svg> ${added ? "Saved" : "Add to Wishlist"}`;
    });
}

function nsRenderWishlistPage() {
  if (!document.body.classList.contains("wishlist")) return;
  const root = document.querySelector("main .section .container");
  if (!root) return;

  const wishlist = nsRead(NS_STORE.wishlist);
  if (wishlist.length === 0) return;

  const itemsHtml = wishlist
    .map(
      (item) => `
    <article class="wishlist-card" data-id="${item.id}">
      <div class="wishlist-img">
        <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/300x300/2d7a2d/ffffff/png?text=Product';">
      </div>
      <div class="wishlist-info">
        <span class="product-category">${item.category || ""}</span>
        <h3>${item.name}</h3>
        <div class="product-price"><strong>Rs.${item.price}</strong>${item.original ? `<del>Rs.${item.original}</del>` : ""}${item.off ? `<em>${item.off}</em>` : ""}</div>
        <p class="wishlist-stock in-stock">&#10003; In Stock</p>
      </div>
      <div class="wishlist-actions">
        <button class="btn-gold cart-btn" type="button" data-action="addcart">Add to Cart</button>
        <button class="wishlist-remove" type="button" data-action="remove" aria-label="Remove from wishlist">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3v1H4v2h1v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9zm0 5h2v10H9V8zm4 0h2v10h-2V8z"/></svg>
          Remove
        </button>
      </div>
    </article>
  `
    )
    .join("");

  root.innerHTML = `
    <div class="catalog-toolbar">
      <h2>Saved Items</h2>
      <span class="result-count">${wishlist.length} item${wishlist.length > 1 ? "s" : ""} in your wishlist</span>
    </div>
    <div class="wishlist-grid">${itemsHtml}</div>
    <div class="wishlist-cta">
      <a href="/shop" class="btn-gold">Continue Shopping
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8.6 16.6 4.6-4.6-4.6-4.6L10 6l6 6-6 6z"/></svg>
      </a>
    </div>
  `;

  root.querySelectorAll(".wishlist-card").forEach((card) => {
    const id = (card as HTMLElement).dataset.id || "";
    card
      .querySelector('[data-action="remove"]')
      ?.addEventListener("click", () => {
        const w = nsRead(NS_STORE.wishlist).filter((x) => x.id !== id);
        nsWrite(NS_STORE.wishlist, w);
        nsUpdateBadges();
        if (w.length === 0) window.location.reload();
        else nsRenderWishlistPage();
      });
    card
      .querySelector('[data-action="addcart"]')
      ?.addEventListener("click", (e) => {
        const item = nsRead(NS_STORE.wishlist).find((x) => x.id === id);
        if (!item) return;

        nsAddToCart({ ...item, qty: 1 });
        const target = e.target as HTMLButtonElement;
        target.textContent = "Added to Cart";
        target.disabled = true;

        setTimeout(() => {
          const w = nsRead(NS_STORE.wishlist).filter((x) => x.id !== id);
          nsWrite(NS_STORE.wishlist, w);
          nsUpdateBadges();
          if (w.length === 0) {
            window.location.reload();
          } else {
            nsRenderWishlistPage();
          }
        }, 700);
      });
  });
}

function nsRenderCheckoutPage() {
  if (!document.body.classList.contains("checkout")) return;
  const form = document.getElementById("checkoutForm") as HTMLFormElement | null;
  if (!form) return;

  const summaryEmpty = document.getElementById("checkoutSummaryEmpty");
  const subLabel = document.getElementById("coSubLabel");
  const subtotalEl = document.getElementById("coSubtotal");
  const discountEl = document.getElementById("coDiscount");
  const shippingEl = document.getElementById("coShipping");
  const gstEl = document.getElementById("coGst");
  const totalEl = document.getElementById("coTotal");
  const placeOrderBtn = document.getElementById(
    "placeOrderBtn"
  ) as HTMLButtonElement | null;
  const statusEl = form.querySelector(".checkout-status") as HTMLElement | null;

  const cart = nsRead(NS_STORE.cart);
  const itemCount = cart.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const totalOriginal = cart.reduce(
    (sum, i) => sum + (i.original || i.price) * i.qty,
    0
  );
  const discount = Math.max(0, totalOriginal - subtotal);
  const shipping = cart.length === 0 ? 0 : subtotal >= 555 ? 0 : 49;
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + gst;

  if (subLabel)
    subLabel.textContent = `(${itemCount} item${itemCount === 1 ? "" : "s"})`;
  if (subtotalEl) subtotalEl.textContent = "Rs." + subtotal;
  if (discountEl) discountEl.textContent = "- Rs." + discount;
  if (shippingEl)
    shippingEl.textContent = shipping === 0 ? "FREE" : "Rs." + shipping;
  if (gstEl) gstEl.textContent = "Rs." + gst;
  if (totalEl) totalEl.textContent = "Rs." + total;

  if (cart.length === 0) {
    if (summaryEmpty) summaryEmpty.hidden = false;
    if (placeOrderBtn) {
      placeOrderBtn.disabled = true;
      placeOrderBtn.style.opacity = "0.55";
      placeOrderBtn.style.cursor = "not-allowed";
    }
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (cart.length === 0) {
      if (statusEl)
        statusEl.textContent =
          "Your cart is empty. Add items before placing an order.";
      return;
    }
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const fd = new FormData(form);
    const paymentMap: Record<string, string> = {
      upi: "UPI",
      card: "Credit / Debit Card",
      netbanking: "Net Banking",
      cod: "Cash on Delivery",
    };
    const paymentVal = String(fd.get("payment") || "cod");
    const order = {
      id: "NS-" + Math.random().toString(36).slice(2, 10).toUpperCase(),
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      address1: String(fd.get("address1") || ""),
      address2: String(fd.get("address2") || ""),
      city: String(fd.get("city") || ""),
      pincode: String(fd.get("pincode") || ""),
      state: String(fd.get("state") || ""),
      payment: paymentMap[paymentVal] || paymentVal,
      items: cart,
      subtotal,
      discount,
      shipping,
      gst,
      total,
      placedAt: Date.now(),
    };
    try {
      sessionStorage.setItem("ns_last_order", JSON.stringify(order));
    } catch {}
    try {
      const raw = localStorage.getItem("ns_orders");
      const orders = raw ? (JSON.parse(raw) as unknown[]) : [];
      orders.unshift(order);
      localStorage.setItem("ns_orders", JSON.stringify(orders));
    } catch {}
    nsWrite(NS_STORE.cart, []);
    nsUpdateBadges();
    if (placeOrderBtn) {
      placeOrderBtn.disabled = true;
      placeOrderBtn.textContent = "Placing Order...";
    }
    if (statusEl) statusEl.textContent = "Redirecting to confirmation...";
    window.location.href = "/order-confirmed";
  });
}

function nsRenderOrderConfirmedPage() {
  if (!document.body.classList.contains("order-confirmed")) return;
  type LastOrder = {
    id?: string;
    name?: string;
    email?: string;
    payment?: string;
    total?: number;
  };
  let parsed: LastOrder | null = null;
  try {
    const raw = sessionStorage.getItem("ns_last_order");
    parsed = raw ? (JSON.parse(raw) as LastOrder) : null;
  } catch {}
  if (!parsed) return;
  const order: LastOrder = parsed;

  const orderIdEl = document.querySelector(".confirm-orderid");
  const totalEl = document.querySelector(".confirm-total");
  if (orderIdEl && order.id) orderIdEl.textContent = order.id;
  if (totalEl && typeof order.total === "number") {
    totalEl.textContent = "Rs." + order.total.toLocaleString("en-IN");
  }
  document.querySelectorAll(".confirm-meta-row").forEach((row) => {
    const label = row
      .querySelector(".confirm-meta-label")
      ?.textContent?.trim();
    const valueEl = row.querySelector(".confirm-meta-value");
    if (!valueEl) return;
    if (label === "Customer Name" && order.name) valueEl.textContent = order.name;
    else if (label === "Email" && order.email) valueEl.textContent = order.email;
    else if (label === "Payment Method" && order.payment)
      valueEl.textContent = order.payment;
  });
}

function nsEscape(input: string): string {
  return String(input ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function nsFormatDate(ms: number): string {
  try {
    return new Date(ms).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return new Date(ms).toString();
  }
}

function nsRenderMyOrdersPage() {
  if (!document.body.classList.contains("my-orders")) return;
  const root = document.getElementById("myOrdersRoot");
  if (!root) return;

  const orders = nsReadOrders();
  if (orders.length === 0) return;

  const cardsHtml = orders
    .map((order) => {
      const stage = nsOrderStage(order.placedAt);
      const stageLabel = NS_STAGE_LABELS[stage];
      const statusClass =
        stage === 3
          ? "status-delivered"
          : stage === 2
            ? "status-shipped"
            : stage === 1
              ? "status-processing"
              : "status-placed";

      const trackerHtml = NS_STAGE_LABELS.map((label, idx) => {
        const cls =
          idx < stage
            ? "tracker-step is-done"
            : idx === stage
              ? "tracker-step is-current"
              : "tracker-step";
        const dotInner =
          idx < stage
            ? '<svg viewBox="0 0 24 24"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19l12-12-1.4-1.4z"/></svg>'
            : String(idx + 1);
        return `
          <li class="${cls}">
            <span class="tracker-dot" aria-hidden="true">${dotInner}</span>
            <span class="tracker-label">${label}</span>
          </li>`;
      }).join("");

      const itemsHtml = (order.items || [])
        .map(
          (item) => `
        <div class="order-item">
          <div class="order-item-img">
            <img src="${nsEscape(item.image)}" alt="${nsEscape(item.name)}" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/120x120/2d7a2d/ffffff/png?text=Product';">
          </div>
          <div class="order-item-info">
            ${item.category ? `<span class="product-category">${nsEscape(item.category)}</span>` : ""}
            <h4>${nsEscape(item.name)}</h4>
            <small>Qty ${item.qty} &times; Rs.${item.price}</small>
          </div>
          <div class="order-item-total">Rs.${item.price * item.qty}</div>
        </div>`
        )
        .join("");

      const addressLine = [
        order.address1,
        order.address2,
        order.city,
        order.state,
        order.pincode,
      ]
        .filter(Boolean)
        .map(nsEscape)
        .join(", ");

      return `
      <article class="order-card" data-order-id="${nsEscape(order.id)}">
        <header class="order-card-header">
          <div class="order-card-id">
            <span class="order-id">${nsEscape(order.id)}</span>
            <span class="order-date">Placed on ${nsEscape(nsFormatDate(order.placedAt))}</span>
          </div>
          <span class="order-status ${statusClass}">${stageLabel}</span>
        </header>

        <ol class="tracker-list">${trackerHtml}</ol>

        <div class="order-section">
          <h3 class="order-section-title">Items (${(order.items || []).length})</h3>
          <div class="order-items">${itemsHtml}</div>
        </div>

        <div class="order-section">
          <h3 class="order-section-title">Order Details</h3>
          <div class="order-meta-grid">
            <div class="order-meta-cell"><span>Customer</span><strong>${nsEscape(order.name)}</strong></div>
            <div class="order-meta-cell"><span>Email</span><strong>${nsEscape(order.email)}</strong></div>
            <div class="order-meta-cell"><span>Phone</span><strong>${nsEscape(order.phone)}</strong></div>
            <div class="order-meta-cell"><span>Payment</span><strong>${nsEscape(order.payment)}</strong></div>
            <div class="order-meta-cell order-meta-cell-wide"><span>Shipping Address</span><strong>${addressLine || "&mdash;"}</strong></div>
          </div>
        </div>

        <footer class="order-card-footer">
          <div class="summary-row"><span>Subtotal</span><strong>Rs.${order.subtotal}</strong></div>
          <div class="summary-row"><span>Discount</span><strong class="discount-value">- Rs.${order.discount}</strong></div>
          <div class="summary-row"><span>Shipping</span><strong>${order.shipping === 0 ? "FREE" : "Rs." + order.shipping}</strong></div>
          <div class="summary-row"><span>GST (5%)</span><strong>Rs.${order.gst}</strong></div>
          <div class="summary-divider"></div>
          <div class="summary-row summary-total"><span>Total</span><strong>Rs.${order.total}</strong></div>
        </footer>
      </article>`;
    })
    .join("");

  root.innerHTML = `
    <div class="catalog-toolbar">
      <h2>Your Orders</h2>
      <span class="result-count">${orders.length} order${orders.length === 1 ? "" : "s"}</span>
    </div>
    <div class="orders-list">${cardsHtml}</div>
  `;
}

function nsApplySearchFilter() {
  let q = "";
  try {
    q = (new URLSearchParams(window.location.search).get("q") || "")
      .trim()
      .toLowerCase();
  } catch {
    return;
  }
  if (!q) return;

  const cards = Array.from(
    document.querySelectorAll<HTMLElement>(".product-card")
  );
  if (cards.length === 0) return;

  let visible = 0;
  cards.forEach((card) => {
    const name = (card.querySelector("h3")?.textContent || "").toLowerCase();
    const category = (
      card.querySelector(".product-category")?.textContent || ""
    ).toLowerCase();
    const badge = (
      card.querySelector(".product-badge")?.textContent || ""
    ).toLowerCase();
    const match =
      name.includes(q) || category.includes(q) || badge.includes(q);
    card.style.display = match ? "" : "none";
    if (match) visible += 1;
  });

  document
    .querySelectorAll<HTMLElement>(".pagination")
    .forEach((p) => (p.style.display = "none"));

  const resultCount = document.querySelector<HTMLElement>(".result-count");
  if (resultCount) {
    resultCount.textContent =
      visible === 0
        ? `No products match "${q}"`
        : `Showing ${visible} result${visible === 1 ? "" : "s"} for "${q}"`;
  }

  const toolbar = document.querySelector<HTMLElement>(".catalog-toolbar");
  if (toolbar && !document.querySelector(".search-clear")) {
    const clearBtn = document.createElement("a");
    clearBtn.href =
      window.location.pathname.includes("/shop") ? "/shop" : window.location.pathname;
    clearBtn.className = "search-clear";
    clearBtn.textContent = "Clear search ×";
    toolbar.appendChild(clearBtn);
  }

  document
    .querySelectorAll<HTMLAnchorElement>(".cat-list a")
    .forEach((a) => a.classList.remove("active"));
  const catLinks = Array.from(
    document.querySelectorAll<HTMLAnchorElement>(".cat-list a")
  );
  const match = catLinks.find((a) => {
    const txt = (
      a.childNodes[0]?.textContent ||
      a.textContent ||
      ""
    )
      .trim()
      .toLowerCase();
    return txt === q || txt.startsWith(q) || q.startsWith(txt);
  });
  if (match) match.classList.add("active");
}

function initPage(): () => void {
  const cleanups: Array<() => void> = [];
  const bind = <T extends Element, E extends Event>(
    el: T | null,
    type: string,
    handler: (this: T, ev: E) => void
  ) => {
    if (!el) return;
    el.addEventListener(type, handler as EventListener);
    cleanups.push(() => el.removeEventListener(type, handler as EventListener));
  };

  const slides = Array.from(
    document.querySelectorAll<HTMLElement>(".hero-slide")
  );
  const dots = Array.from(document.querySelectorAll<HTMLElement>(".dot"));
  const prev = document.querySelector<HTMLElement>(".hero-prev");
  const next = document.querySelector<HTMLElement>(".hero-next");
  const mainNav = document.querySelector<HTMLElement>("#mainNav");
  const menuToggle = document.querySelector<HTMLElement>(".mobile-menu-toggle");
  const navClose = document.querySelector<HTMLElement>(".nav-close");
  const registrationForm = document.querySelector<HTMLFormElement>(
    ".registration-form"
  );
  const newsletterForm =
    document.querySelector<HTMLFormElement>(".newsletter-form");
  const cartButtons = Array.from(
    document.querySelectorAll<HTMLButtonElement>(".cart-btn")
  );
  const cartCount = document.querySelector<HTMLElement>("#cartCount");
  let activeSlide = 0;
  let slideTimer: ReturnType<typeof setInterval> | undefined;
  let cartItems = 0;

  function showSlide(index: number) {
    if (slides.length === 0) return;
    activeSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("active", slideIndex === activeSlide);
    });
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("active", dotIndex === activeSlide);
    });
  }

  function restartCarousel() {
    if (slides.length === 0) return;
    window.clearInterval(slideTimer as unknown as number);
    slideTimer = window.setInterval(
      () => showSlide(activeSlide + 1),
      4200
    ) as unknown as ReturnType<typeof setInterval>;
  }

  dots.forEach((dot, index) => {
    bind(dot, "click", () => {
      showSlide(index);
      restartCarousel();
    });
  });

  bind(prev, "click", () => {
    showSlide(activeSlide - 1);
    restartCarousel();
  });

  bind(next, "click", () => {
    showSlide(activeSlide + 1);
    restartCarousel();
  });

  bind(menuToggle, "click", () => {
    mainNav?.classList.add("open");
    menuToggle?.setAttribute("aria-expanded", "true");
  });

  bind(navClose, "click", () => {
    mainNav?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });

  document.querySelectorAll<HTMLElement>(".nav-list a").forEach((link) => {
    bind(link, "click", () => {
      mainNav?.classList.remove("open");
      menuToggle?.setAttribute("aria-expanded", "false");
    });
  });

  document
    .querySelectorAll<HTMLElement>(".qty-control")
    .forEach((control) => {
      const minus = control.querySelector<HTMLButtonElement>(
        "button:first-child"
      );
      const plus = control.querySelector<HTMLButtonElement>(
        "button:last-child"
      );
      const input = control.querySelector<HTMLInputElement>("input");
      if (!minus || !plus || !input) return;
      const productCard = control.closest(".product-card");

      if (productCard) {
        bind(plus, "click", () => {
          const item = nsExtractFromCard(productCard);
          if (!item || !item.name) return;
          item.qty = 1;
          nsAddToCart(item);
          input.value = String(nsCartQtyOf(item.id));
        });
        bind(minus, "click", () => {
          const id = nsCardItemId(productCard);
          if (!id) return;
          const cart = nsRead(NS_STORE.cart);
          const idx = cart.findIndex((c) => c.id === id);
          if (idx < 0) return;
          cart[idx].qty = Number(cart[idx].qty) - 1;
          if (cart[idx].qty <= 0) cart.splice(idx, 1);
          nsWrite(NS_STORE.cart, cart);
          input.value = String(nsCartQtyOf(id));
          nsUpdateBadges();
        });
      } else {
        bind(minus, "click", () => {
          input.value = String(Math.max(0, Number(input.value) - 1));
        });
        bind(plus, "click", () => {
          input.value = String(Number(input.value) + 1);
        });
      }
    });

  cartButtons.forEach((button) => {
    bind(button, "click", () => {
      const card = button.closest(".product-card");
      if (card) {
        const item = nsExtractFromCard(card);
        if (item && item.name) {
          item.qty = 1;
          nsAddToCart(item);
          const input = card.querySelector<HTMLInputElement>(
            ".qty-control input"
          );
          if (input) input.value = String(nsCartQtyOf(item.id));
        }
      } else {
        cartItems += 1;
        if (cartCount) cartCount.textContent = String(cartItems);
      }
      const original = button.dataset.label || button.textContent || "";
      if (!button.dataset.label) button.dataset.label = original;
      button.textContent = "Added";
      window.setTimeout(() => {
        button.textContent = button.dataset.label || "Add to Cart";
      }, 1200);
    });
  });

  document
    .querySelectorAll<HTMLButtonElement>(".product-action")
    .forEach((button) => {
      bind(button, "click", (event: Event) => {
        event.preventDefault();
        const label = (button.getAttribute("aria-label") || "").toLowerCase();
        if (label.includes("wishlist")) {
          const card = button.closest(".product-card");
          if (card) {
            const item = nsExtractFromCard(card);
            if (item && item.name) {
              const added = nsToggleWishlist(item);
              button.classList.toggle("is-active", added);
              button.setAttribute("aria-pressed", String(added));
            }
          } else {
            window.location.href = "/wishlist";
          }
        } else if (label.includes("quick view") || label.includes("view")) {
          const card = button.closest(".product-card");
          if (card) {
            const item = nsExtractFromCard(card);
            if (item && item.name) {
              try {
                sessionStorage.setItem(
                  "ns_product_view",
                  JSON.stringify(item)
                );
              } catch {}
              window.location.href =
                "/product?id=" + encodeURIComponent(item.id);
              return;
            }
          }
          window.location.href = "/shop";
        }
      });
    });

  nsUpdateBadges();
  nsSyncProductCards();
  nsRenderCartPage();
  nsRenderWishlistPage();
  nsRenderProductPage();
  nsRenderCheckoutPage();
  nsRenderOrderConfirmedPage();
  nsRenderMyOrdersPage();

  const nsActiveQuery = (() => {
    try {
      return (
        new URLSearchParams(window.location.search).get("q") || ""
      ).trim();
    } catch {
      return "";
    }
  })();

  // Pagination
  document
    .querySelectorAll<HTMLElement>(".pagination")
    .forEach((pagination) => {
      let grid: HTMLElement | null = null;
      let items: HTMLElement[] = [];

      const catalog =
        document.querySelector<HTMLElement>(".catalog-products");
      const blogGrid = document.querySelector<HTMLElement>(".blog-grid");
      if (catalog && pagination.closest("section")?.contains(catalog)) {
        grid = catalog;
        items = Array.from(catalog.querySelectorAll(".product-card"));
      } else if (
        blogGrid &&
        pagination.closest("section")?.contains(blogGrid)
      ) {
        grid = blogGrid;
        items = Array.from(blogGrid.querySelectorAll(".blog-card"));
      }
      if (!grid || items.length === 0) return;

      const numericButtons = Array.from(
        pagination.querySelectorAll<HTMLButtonElement>(".page-btn")
      ).filter((b) => /^\d+$/.test((b.textContent || "").trim()));
      if (numericButtons.length === 0) return;

      const prevBtn = pagination.querySelector<HTMLButtonElement>(
        '[aria-label="Previous page"]'
      );
      const nextBtn = pagination.querySelector<HTMLButtonElement>(
        '[aria-label="Next page"]'
      );
      const totalPages = numericButtons.length;
      const perPage = Math.ceil(items.length / totalPages);

      function showPage(pageNum: number) {
        const start = (pageNum - 1) * perPage;
        const end = start + perPage;
        items.forEach((card, idx) => {
          card.style.display = idx >= start && idx < end ? "" : "none";
        });
        numericButtons.forEach((b) => {
          const n = Number((b.textContent || "").trim());
          b.classList.toggle("active", n === pageNum);
        });
        if (prevBtn) prevBtn.disabled = pageNum <= 1;
        if (nextBtn) nextBtn.disabled = pageNum >= totalPages;
        grid?.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      numericButtons.forEach((b) => {
        bind(b, "click", () =>
          showPage(Number((b.textContent || "").trim()))
        );
      });

      bind(prevBtn, "click", () => {
        const current = Number(
          (
            pagination.querySelector(".page-btn.active")?.textContent || "1"
          ).trim()
        );
        if (current > 1) showPage(current - 1);
      });

      bind(nextBtn, "click", () => {
        const current = Number(
          (
            pagination.querySelector(".page-btn.active")?.textContent || "1"
          ).trim()
        );
        if (current < totalPages) showPage(current + 1);
      });

      if (!nsActiveQuery) {
        const initial = Number(
          (
            pagination.querySelector(".page-btn.active")?.textContent || "1"
          ).trim()
        );
        showPage(initial);
      }
    });

  // Catalog filter
  (() => {
    const sidebar = document.querySelector<HTMLElement>(".catalog-sidebar");
    const grid = document.querySelector<HTMLElement>(".catalog-products");
    if (!sidebar || !grid) return;

    const priceMin = sidebar.querySelector<HTMLInputElement>("#priceMin");
    const priceMax = sidebar.querySelector<HTMLInputElement>("#priceMax");
    const priceRange = sidebar.querySelector<HTMLInputElement>("#priceRange");
    const checkboxes = Array.from(
      sidebar.querySelectorAll<HTMLInputElement>(
        ".filter-check input[type='checkbox']"
      )
    );
    const applyBtn = sidebar.querySelector<HTMLButtonElement>(".filter-apply");
    const cards = Array.from(
      grid.querySelectorAll<HTMLElement>(".product-card")
    );
    const resultCount = document.querySelector<HTMLElement>(".result-count");
    if (cards.length === 0) return;

    function getCardPrice(card: HTMLElement): number {
      const t = (
        card.querySelector(".product-price strong")?.textContent || "0"
      ).replace(/[^\d]/g, "");
      return Number(t) || 0;
    }

    function applyFilter(opts?: { flashButton?: boolean }) {
      opts = opts || {};
      const min = Number(priceMin?.value) || 0;
      const maxRaw = priceMax ? Number(priceMax.value) : NaN;
      const max = !isNaN(maxRaw) && maxRaw > 0 ? maxRaw : Infinity;
      const inStockChecked = checkboxes[0] ? checkboxes[0].checked : true;
      const outStockChecked = checkboxes[1] ? checkboxes[1].checked : false;
      const pagination = document.querySelector<HTMLElement>(".pagination");

      const sliderMax = priceRange ? Number(priceRange.max) || 2000 : 2000;
      const noPriceFilter = min <= 0 && max >= sliderMax;
      const noStockFilter = inStockChecked && !outStockChecked;
      const isDefault = noPriceFilter && noStockFilter;

      if (isDefault) {
        cards.forEach((c) => {
          c.style.display = "";
        });
        if (pagination) {
          pagination.style.display = "";
          const activeBtn =
            pagination.querySelector<HTMLButtonElement>(".page-btn.active") ||
            pagination.querySelector<HTMLButtonElement>(
              ".page-btn:not([aria-label])"
            );
          activeBtn?.click();
        }
        if (resultCount) {
          resultCount.textContent =
            "Showing " +
            cards.length +
            " product" +
            (cards.length === 1 ? "" : "s");
        }
        return;
      }

      let visibleCount = 0;
      cards.forEach((card) => {
        const price = getCardPrice(card);
        const priceOk = price >= min && price <= max;
        const stockOk = inStockChecked || outStockChecked;
        const show = priceOk && stockOk;
        card.style.display = show ? "" : "none";
        if (show) visibleCount++;
      });

      if (resultCount) {
        resultCount.textContent =
          visibleCount === 0
            ? "No products match your filter"
            : "Showing " +
              visibleCount +
              " product" +
              (visibleCount === 1 ? "" : "s") +
              " (filtered)";
      }

      if (pagination) pagination.style.display = "none";

      if (opts.flashButton && applyBtn) {
        const original = applyBtn.textContent || "";
        applyBtn.textContent = "Filter Applied";
        applyBtn.disabled = true;
        setTimeout(() => {
          applyBtn.textContent = original;
          applyBtn.disabled = false;
        }, 900);
      }
    }

    if (priceRange && priceMax) {
      bind(priceRange, "input", () => {
        priceMax.value = priceRange.value;
      });
      bind(priceMax, "input", () => {
        const v = Number(priceMax.value);
        if (!isNaN(v) && priceRange) {
          priceRange.value = String(
            Math.min(
              Number(priceRange.max) || v,
              Math.max(Number(priceRange.min) || 0, v)
            )
          );
        }
      });
    }

    bind(applyBtn, "click", (e: Event) => {
      e.preventDefault();
      applyFilter({ flashButton: true });
    });

    checkboxes.forEach((cb) => {
      bind(cb, "change", () => applyFilter());
    });
  })();

  // Catalog sort
  (() => {
    const select = document.querySelector<HTMLSelectElement>(
      ".sort-control select"
    );
    const grid = document.querySelector<HTMLElement>(".catalog-products");
    if (!select || !grid) return;

    const originalOrder = Array.from(
      grid.querySelectorAll<HTMLElement>(".product-card")
    );
    if (originalOrder.length === 0) return;

    function priceOf(card: HTMLElement): number {
      const t = (
        card.querySelector(".product-price strong")?.textContent || "0"
      ).replace(/[^\d]/g, "");
      return Number(t) || 0;
    }
    function ratingOf(card: HTMLElement): number {
      const stars = card.querySelector(".stars");
      if (!stars) return 0;
      const styleAttr = stars.getAttribute("style") || "";
      const m = styleAttr.match(/--rating\s*:\s*([\d.]+)/);
      return m ? Number(m[1]) : 0;
    }
    function nameOf(card: HTMLElement): string {
      return (card.querySelector("h3")?.textContent || "")
        .trim()
        .toLowerCase();
    }
    function reviewsOf(card: HTMLElement): number {
      const t = card.querySelector(".rating small")?.textContent || "(0)";
      return Number(t.replace(/[^\d]/g, "")) || 0;
    }

    function applySort(value: string) {
      const visible = originalOrder.slice();
      const v = (value || "").toLowerCase();
      if (v.includes("low to high")) {
        visible.sort((a, b) => priceOf(a) - priceOf(b));
      } else if (v.includes("high to low")) {
        visible.sort((a, b) => priceOf(b) - priceOf(a));
      } else if (v.includes("highest rated")) {
        visible.sort((a, b) => {
          const dr = ratingOf(b) - ratingOf(a);
          if (dr !== 0) return dr;
          return reviewsOf(b) - reviewsOf(a);
        });
      } else if (
        v.includes("a-z") ||
        v.includes("a to z") ||
        v.includes("name")
      ) {
        visible.sort((a, b) => nameOf(a).localeCompare(nameOf(b)));
      } else if (v.includes("newest")) {
        visible.reverse();
      } else {
        originalOrder.forEach((c) => grid?.appendChild(c));
        return;
      }
      visible.forEach((c) => grid?.appendChild(c));
    }

    bind(select, "change", (e: Event) => {
      applySort((e.target as HTMLSelectElement).value);
    });
  })();

  // Forms
  bind(registrationForm, "submit", (event: Event) => {
    event.preventDefault();
    const status = registrationForm?.querySelector(".form-status");
    if (status)
      status.textContent =
        "Registration details captured. Our team will contact you shortly.";
    registrationForm?.reset();
  });

  bind(newsletterForm, "submit", (event: Event) => {
    event.preventDefault();
    const button = newsletterForm?.querySelector("button");
    if (button) button.textContent = "Subscribed";
    newsletterForm?.reset();
    window.setTimeout(() => {
      if (button) button.textContent = "Subscribe";
    }, 1400);
  });

  restartCarousel();
  cleanups.push(() => window.clearInterval(slideTimer as unknown as number));

  // Testimonial slider
  const tTrack = document.querySelector<HTMLElement>(".testimonial-track");
  const tPrev = document.querySelector<HTMLElement>(".t-prev");
  const tNext = document.querySelector<HTMLElement>(".t-next");
  const tDots = document.querySelector<HTMLElement>(".t-dots");

  // Gallery & blog filter
  const galleryFilters = Array.from(
    document.querySelectorAll<HTMLButtonElement>(".gallery-filters .filter-btn")
  );
  const galleryCards = Array.from(
    document.querySelectorAll<HTMLElement>(".gallery-card")
  );
  const blogCards = Array.from(
    document.querySelectorAll<HTMLElement>(".blog-card[data-cat]")
  );

  galleryFilters.forEach((btn) => {
    bind(btn, "click", () => {
      const filter = btn.dataset.filter || "";
      galleryFilters.forEach((b) => b.classList.toggle("active", b === btn));

      const allCards = [...galleryCards, ...blogCards];
      const paginationEls =
        document.querySelectorAll<HTMLElement>(".pagination");

      if (filter === "all") {
        allCards.forEach((card) => {
          card.classList.remove("is-hidden");
          card.style.display = "";
        });
        paginationEls.forEach((p) => {
          p.style.display = "";
          const activeBtn =
            p.querySelector<HTMLButtonElement>(".page-btn.active");
          activeBtn?.click();
        });
      } else {
        allCards.forEach((card) => {
          const matches = card.dataset.cat === filter;
          card.classList.toggle("is-hidden", !matches);
          card.style.display = matches ? "" : "none";
        });
        paginationEls.forEach((p) => {
          p.style.display = "none";
        });
      }
    });
  });

  // Home page product filters
  document
    .querySelectorAll<HTMLElement>(".product-filters")
    .forEach((filterBar) => {
      const buttons = Array.from(
        filterBar.querySelectorAll<HTMLButtonElement>(".filter-btn")
      );
      const grid = filterBar.parentElement?.querySelector<HTMLElement>(
        ".products-grid"
      );
      if (!grid) return;
      const cards = Array.from(
        grid.querySelectorAll<HTMLElement>(".product-card")
      );

      function badgeText(card: HTMLElement) {
        return (card.querySelector(".product-badge")?.textContent || "")
          .toLowerCase()
          .trim();
      }

      function matchesFilter(card: HTMLElement, filter: string) {
        if (filter === "all") return true;
        const badge = badgeText(card);
        if (filter === "bestseller") return badge.includes("best");
        if (filter === "hot") return badge.includes("hot");
        if (filter === "new")
          return badge.includes("new") || badge.includes("just in");
        return badge.includes(filter);
      }

      buttons.forEach((btn) => {
        bind(btn, "click", () => {
          const filter = btn.dataset.filter || "all";
          buttons.forEach((b) =>
            b.classList.toggle("active", b === btn)
          );
          cards.forEach((card) => {
            const show = matchesFilter(card, filter);
            card.style.display = show ? "" : "none";
          });
        });
      });
    });

  if (tTrack && tDots) {
    const cards = Array.from(tTrack.querySelectorAll(".testimonial-card"));
    const cardsPerView = window.matchMedia("(max-width: 768px)").matches
      ? 1
      : 2;
    const pages = Math.max(1, Math.ceil(cards.length / cardsPerView));

    tDots.innerHTML = "";
    for (let i = 0; i < pages; i += 1) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", `Go to testimonials page ${i + 1}`);
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        tTrack.scrollTo({ left: i * tTrack.clientWidth, behavior: "smooth" });
      });
      tDots.appendChild(dot);
    }

    const updateActiveDot = () => {
      const page = Math.round(tTrack.scrollLeft / tTrack.clientWidth);
      Array.from(tDots.children).forEach((dot, idx) => {
        dot.classList.toggle("active", idx === page);
      });
    };

    bind(tTrack, "scroll", updateActiveDot);
    bind(tPrev, "click", () => {
      tTrack.scrollBy({ left: -tTrack.clientWidth, behavior: "smooth" });
    });
    bind(tNext, "click", () => {
      tTrack.scrollBy({ left: tTrack.clientWidth, behavior: "smooth" });
    });
  }

  if (nsActiveQuery) nsApplySearchFilter();

  return () => {
    cleanups.forEach((c) => c());
    if (slideTimer) window.clearInterval(slideTimer as unknown as number);
  };
}

export default function ClientScripts() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString();
  useEffect(() => {
    const cleanup = initPage();
    return cleanup;
  }, [pathname, search]);
  return null;
}
