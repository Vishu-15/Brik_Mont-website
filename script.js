// ✅ Adjust Jumbotron Height for Mobile
if (window.innerWidth < 600) {
    const jumbotronImg = document.querySelector(".jumbotron .img-fluid") || document.querySelector(".jumbo .img-fluid");
    if (jumbotronImg) {
        jumbotronImg.style.height = jumbotronImg.classList.contains("jumbotron") ? "50vh" : "40vh";
    }
}

// ✅ Adjust Jumbotron Logo Position After Page Loads
setTimeout(() => {
    const jumbotronLogo = document.querySelector(".jumbotron-logo") || document.querySelector(".jumbo-logo");

    if (jumbotronLogo) {
        jumbotronLogo.style.top = window.innerWidth < 600 ? "28%" : "35%";
    }
}, 1);

// ✅ Navbar Scroll Effect
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".nav-link");

    if (window.scrollY > 150) {
        navbar.classList.add("nav-onscroll-bg");
        navLinks.forEach(link => link.classList.add("nav-onscroll-txt"));
    } else {
        navbar.classList.remove("nav-onscroll-bg");
        navLinks.forEach(link => link.classList.remove("nav-onscroll-txt"));
    }
});

// ✅ Ensure Dropdown Closes When Clicking Outside
document.addEventListener("click", (event) => {
    document.querySelectorAll(".dropdown-menu.show").forEach(menu => {
        if (!menu.closest(".dropdown").contains(event.target)) {
            menu.classList.remove("show");
        }
    });
});

// ✅ Smooth Scroll to Sections (if needed)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: "smooth",
            });
        }
    });
});

// ✅ Optimized Navbar Hover Effect (for Desktop)
if (window.innerWidth > 768) {
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.style.transform = "scale(1.1)";
            link.style.transition = "transform 0.3s ease";
        });
        link.addEventListener("mouseleave", () => {
            link.style.transform = "scale(1)";
        });
    });
}

// ✅ Product Entrance Animation (Using IntersectionObserver)
const productItems = document.querySelectorAll(".items");

const productObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate-product");
            observer.unobserve(entry.target); // Stop observing after animation
        }
    });
}, { threshold: 0.2 }); // Trigger when 20% of the product is visible

productItems.forEach(item => productObserver.observe(item));
