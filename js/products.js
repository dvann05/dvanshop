// =====================================
// Dvan Shop - products.js
// =====================================

let products = [];

// Element
const latestProducts = document.getElementById("latestProducts");
const popularProducts = document.getElementById("popularProducts");
const allProducts = document.getElementById("allProducts");

// Card
function createCard(product){

return `
<div class="card">

<img src="${product.image}" alt="${product.title}">

<div class="card-body">

<span class="category">${product.category}</span>

<h3>${product.title}</h3>

<div class="price">${product.price}</div>

<div class="rating">${product.rating}</div>

<div class="button-group">

<a href="pages/detail.html?id=${product.id}" class="btn">
Detail
</a>

<button onclick="buyProduct('${product.title}')">
WhatsApp
</button>

</div>

</div>

</div>
`;

}

// Render
function renderProducts(){

if(latestProducts){

latestProducts.innerHTML =
products.slice(0,3).map(createCard).join("");

}

if(popularProducts){

popularProducts.innerHTML =
products.slice(3,6).map(createCard).join("");

}

if(allProducts){

allProducts.innerHTML =
products.map(createCard).join("");

}

}

// Load JSON
fetch("data/products.json")
.then(response => response.json())
.then(data => {

products = data;

// Supaya detail.js bisa mengakses
window.products = products;

renderProducts();

})
.catch(error => {

console.error("Gagal memuat products.json", error);

});