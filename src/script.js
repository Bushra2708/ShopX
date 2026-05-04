let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* NAVIGATION */
function goHome() {
  location.href = "index.html";
}
function goCart() {
  location.href = "cart.html";
}

/* LOAD PRODUCTS */
function loadProducts(filter = "all") {
  const container = document.getElementById("products");
  if (!container) return;

  container.innerHTML = "";

  const filtered = products.filter(p =>
    filter === "all" || p.category === filter
  );

  filtered.forEach(p => {
    container.innerHTML += `
      <div class="product-card" onclick="viewProduct(${p.id})">

        ${p.badge ? `<span class="badge">${p.badge}</span>` : ""}

        <img src="${p.image}">

        <h3>${p.name}</h3>

        <div class="rating">
          ⭐ ${p.rating} <span>(${p.reviews})</span>
        </div>

        <div class="price">
          ₹${p.price}
          <span class="old-price">₹${p.originalPrice}</span>
        </div>

        <button onclick="event.stopPropagation(); addToCart(${p.id})">
          Add to Cart
        </button>
      </div>
    `;
  });
}

/* SEARCH */
function searchProducts() {
  const q = document.getElementById("searchInput").value.toLowerCase();
  const container = document.getElementById("products");

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(q)
  );

  container.innerHTML = "";

  filtered.forEach(p => {
    container.innerHTML += `
      <div class="product-card" onclick="viewProduct(${p.id})">

        ${p.badge ? `<span class="badge">${p.badge}</span>` : ""}

        <img src="${p.image}">

        <h3>${p.name}</h3>

        <div class="rating">
          ⭐ ${p.rating} (${p.reviews})
        </div>

        <div class="price">
          ₹${p.price}
          <span class="old-price">₹${p.originalPrice}</span>
        </div>

        <button onclick="event.stopPropagation(); addToCart(${p.id})">
          Add to Cart
        </button>
      </div>
    `;
  });
}

/* FILTER */
function filterCategory(cat) {
  loadProducts(cat);
}

/* VIEW PRODUCT */
function viewProduct(id) {
  localStorage.setItem("productId", id);
  location.href = "product.html";
}

/* PRODUCT PAGE */
function loadProductPage() {
  const id = localStorage.getItem("productId");
  const p = products.find(x => x.id == id);

  document.getElementById("product-details").innerHTML = `
    <div class="product-page">

      <img src="${p.image}" class="product-img">

      <div>
        <h2>${p.name}</h2>

        <div class="rating">
          ⭐ ${p.rating} (${p.reviews} reviews)
        </div>

        <p class="price">
          ₹${p.price}
          <span class="old-price">₹${p.originalPrice}</span>
        </p>

        ${p.badge ? `<span class="badge">${p.badge}</span>` : ""}

        <button onclick="addToCart(${p.id})" class="buy-btn">
          Add to Cart
        </button>
      </div>
    </div>
  `;
}

/* ADD TO CART */
function addToCart(id) {
  const p = products.find(x => x.id === id);
  const exist = cart.find(x => x.id === id);

  if (exist) exist.qty++;
  else cart.push({ ...p, qty: 1 });

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Added to cart");
}

/* CART PAGE */
function loadCartPage() {
  const container = document.getElementById("cart-items");
  if (!container) return;

  let total = 0;
  container.innerHTML = "";

  cart.forEach((item, i) => {
    total += item.price * item.qty;

    container.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}">
        <div>
          <p>${item.name}</p>
          <p>₹${item.price}</p>
          <p>Qty: ${item.qty}</p>
        </div>
        <button onclick="removeItem(${i})">Remove</button>
      </div>
    `;
  });

  document.getElementById("total").innerText = total;
}

/* REMOVE ITEM */
function removeItem(i) {
  cart.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCartPage();
  updateCartCount();
}

/* CART COUNT */
function updateCartCount() {
  const el = document.getElementById("cart-count");
  if (el) el.innerText = cart.length;
}
function placeOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert("Order placed successfully! 🎉");

  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));

  loadCartPage();
  updateCartCount();
}