// =====================================
// DVAN SHOP UTILITIES
// =====================================

// Nomor WhatsApp Admin
const ADMIN_NUMBER = "6288294460513";

// Tombol beli produk
function buyProduct(title) {

    const message =
        "Halo Admin Dvan Shop.%0A%0ASaya ingin membeli ebook:%0A%0A📚 " +
        title;

    window.open(
        `https://wa.me/${ADMIN_NUMBER}?text=${message}`,
        "_blank"
    );

}

// Format harga
function formatPrice(price) {
    return price;
}

// Format rating
function formatRating(rating) {
    return rating;
} 