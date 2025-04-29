const productGrid = document.getElementById("product-grid");

const products = [
  { id: 1, name: "iPhone 15 Pro", price: 1299, image: "https://m.media-amazon.com/images/I/81CgtwSII3L._SX569_.jpg" },
  { id: 2, name: "iPhone 14 Pro", price: 1099, image: "https://m.media-amazon.com/images/I/71d7rfSl0wL._SX569_.jpg" },
  { id: 3, name: "Samsung Galaxy S24 Ultra", price: 1199, image: "https://m.media-amazon.com/images/I/71Ce2POxnNL._SX569_.jpg" },
  { id: 4, name: "Samsung Galaxy A55", price: 349, image: "https://m.media-amazon.com/images/I/71YkL0Js8kL._SX569_.jpg" },
  { id: 5, name: "Oppo Reno 11 Pro", price: 499, image: "https://m.media-amazon.com/images/I/41Fvm7HOJML.jpg" },
  { id: 6, name: "Oppo F25 Pro", price: 369, image: "https://m.media-amazon.com/images/I/81FeGlImflL._SX569_.jpg" },
  { id: 7, name: "Realme Narzo 65", price: 289, image: "https://m.media-amazon.com/images/I/71AUNTs39lL._SX569_.jpg" },
  { id: 8, name: "iQOO Z9", price: 299, image: "https://m.media-amazon.com/images/I/61pt59LW-lL._SX569_.jpg" },
  { id: 9, name: "Redmi Note 13 Pro+", price: 399, image: "https://m.media-amazon.com/images/I/71r41+TT2UL._SX569_.jpg" },
  { id: 10, name: "Vivo V30", price: 459, image: "https://m.media-amazon.com/images/I/71m7OmKyA5L._SX569_.jpg" }
];

function loadProducts() {
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    
    productGrid.appendChild(card);
  });
}

function addToCart(productId) {
  alert(`Product ${productId} added to cart!`);
}

document.addEventListener("DOMContentLoaded", loadProducts);
