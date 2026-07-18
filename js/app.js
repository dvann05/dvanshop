// =====================================
// DVAN SHOP APP.JS
// =====================================

// ---------- DARK MODE ----------

const darkButton = document.getElementById("darkMode");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

if (darkButton) {
    darkButton.onclick = function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

    };
}

// ---------- SEARCH ----------

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const keyword = this.value.toLowerCase();

        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            const title = card.querySelector("h3").textContent.toLowerCase();

            if (title.includes(keyword)) {

                card.style.display = "flex";

            } else {

                card.style.display = "none";

            }

        });

    });

}

// ---------- FILTER CATEGORY ----------

const categoryButtons = document.querySelectorAll(".kategori-list button");

categoryButtons.forEach(button => {

    button.addEventListener("click", function () {

        categoryButtons.forEach(btn => btn.classList.remove("active"));

        this.classList.add("active");

        const category = this.dataset.category;

        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            const badge = card.querySelector(".category").textContent;

            if (category === "Semua") {

                card.style.display = "flex";

            } else {

                if (badge === category) {

                    card.style.display = "flex";

                } else {

                    card.style.display = "none";

                }

            }

        });

    });

});

// ---------- BACK TO TOP ----------

const topButton = document.getElementById("topButton");

window.addEventListener("scroll", function () {

    if (!topButton) return;

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

if (topButton) {

    topButton.onclick = function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    };

}

// ---------- SERVICE WORKER ----------

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker
            .register("/service-worker.js")
            .then(() => {

                console.log("Service Worker berhasil didaftarkan.");

            })
            .catch(error => {

                console.error("Service Worker gagal:", error);

            });

    });

} // ← penutup if
