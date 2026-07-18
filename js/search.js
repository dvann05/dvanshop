/* ==========================================
   DVAN SHOP - SEARCH.JS
   ========================================== */

let searchInput;
let searchResults = [];

document.addEventListener("DOMContentLoaded", () => {
    searchInput = document.getElementById("searchInput");

    if (!searchInput) return;

    searchInput.addEventListener("input", handleSearch);
});

/* ==========================================
   SEARCH
========================================== */

function handleSearch() {

    const keyword = searchInput.value
        .trim()
        .toLowerCase();

    if (keyword === "") {
        renderProducts(products);
        return;
    }

    searchResults = products.filter(product => {

        return (
            product.title.toLowerCase().includes(keyword) ||
            product.category.toLowerCase().includes(keyword) ||
            product.description.toLowerCase().includes(keyword)
        );

    });

    renderProducts(searchResults);

}

/* ==========================================
   CLEAR SEARCH
========================================== */

function clearSearch() {

    searchInput.value = "";

    renderProducts(products);

}

/* ==========================================
   NO RESULT
========================================== */

function showNoResult() {

    const container = document.getElementById("productContainer");

    container.innerHTML = `

        <div class="no-result">

            <h3>Produk tidak ditemukan</h3>

            <p>Coba gunakan kata kunci lain.</p>

        </div>

    `;

}

/* ==========================================
   EXPORT
========================================== */

window.handleSearch = handleSearch;
window.clearSearch = clearSearch;