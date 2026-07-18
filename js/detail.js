// ======================================
// DETAIL.JS
// ======================================

// Ambil ID dari URL
const params = new URLSearchParams(window.location.search);
const productId = Number(params.get("id"));

// Ambil data dari JSON
fetch("../data/products.json")
.then(response => response.json())
.then(products => {

    const product = products.find(item => item.id === productId);

    if (!product) {
        document.getElementById("detailTitle").textContent = "Produk tidak ditemukan";
        return;
    }

    // Isi data produk
    document.getElementById("detailImage").src = "../" + product.image;
    document.getElementById("detailImage").alt = product.title;

    document.getElementById("detailTitle").textContent = product.title;
    document.getElementById("detailCategory").textContent = product.category;
    document.getElementById("detailPrice").textContent = product.price;
    document.getElementById("detailRating").textContent = product.rating;
    document.getElementById("detailDescription").textContent = product.description;

    // Tombol WhatsApp
    document.getElementById("buyButton").onclick = function () {

        const nomor = "6288294460513";

        const pesan =
            "Halo Admin Dvan Shop.%0A%0ASaya ingin membeli ebook:%0A" +
            product.title;

        window.open(
            "https://wa.me/" + nomor + "?text=" + pesan,
            "_blank"
        );

    };

    // Produk lainnya
    const related = products
    .filter(item => item.id !== product.id)
    .slice(0, 4);

document.getElementById("relatedProducts").innerHTML =
related.map(item => `
<div class="card">

<img src="../${item.image}" alt="${item.title}">

<div class="card-body">

<span class="category">${item.category}</span>

<h3>${item.title}</h3>

<div class="price">${item.price}</div>

<div class="rating">${item.rating}</div>

<div class="button-group">

<a href="detail.html?id=${item.id}" class="btn">
Detail
</a>

<button onclick="buyProduct('${item.title}')">
WhatsApp
</button>

</div>

</div>

</div>
`).join("");

})
.catch(error => {

    console.error(error);

});