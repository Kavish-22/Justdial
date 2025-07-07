// ======================
// Show/Hide "We Are Hiring" and Fixed Search
// ======================
window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;
  const scrollPercent = (scrollTop / (docHeight - windowHeight)) * 100;

  const hiringElement = document.querySelector(".k_wearehiring");
  const fixedSearch = document.querySelector(".k_fixedSearch");

  if (scrollPercent >= 1.8) {
    hiringElement?.classList.replace("d-flex", "d-none");
    fixedSearch?.classList.add("show");
  } else {
    hiringElement?.classList.replace("d-none", "d-flex");
    fixedSearch?.classList.remove("show");
  }
});

// ======================
// Swiper Slider Init
// ======================
document.addEventListener("DOMContentLoaded", function () {
  if (typeof Swiper !== "undefined") {
    new Swiper(".swiper", {
      slidesPerView: 4,
      spaceBetween: 16,
      slidesPerGroup: 1,
      loop: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: { slidesPerView: 1.2 },
        576: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        992: { slidesPerView: 4 },
      },
    });
  }
});

// ======================
// Back to Top Button
// ======================
window.addEventListener("scroll", function () {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (backToTopBtn) {
    backToTopBtn.style.display = window.scrollY > 100 ? "block" : "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

// ======================
// Floating Search Logic
// ======================
window.addEventListener("scroll", () => {
  const mainSearch = document.getElementById("mainSearch");
  const floatingSearch = document.getElementById("floatingSearch");
  const hiringBar = document.querySelector(".k_wearehiring");

  if (window.scrollY > 100) {
    if (hiringBar) hiringBar.style.display = "none";
    floatingSearch?.classList.replace("floating-hidden", "floating-visible");

    if (mainSearch) {
      mainSearch.style.opacity = "0";
      mainSearch.style.pointerEvents = "none";
      mainSearch.style.transform = "scale(0.7) translateY(-20px)";
    }
  } else {
    if (hiringBar) hiringBar.style.display = "flex";
    floatingSearch?.classList.replace("floating-visible", "floating-hidden");

    if (mainSearch) {
      mainSearch.style.opacity = "1";
      mainSearch.style.pointerEvents = "auto";
      mainSearch.style.transform = "scale(1) translateY(0)";
    }
  }
});

// ======================
// Bootstrap Tooltip Init
// ======================
document.addEventListener("DOMContentLoaded", () => {
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.map((tooltipTriggerEl) => {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});

// ======================
// Rotating Text
// ======================
document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".text-wrapper");
  let index = 0;

  if (wrapper) {
    setInterval(() => {
      index = (index + 1) % 2;
      wrapper.style.transform = `translateY(-${index * 1.8}em)`;
    }, 2000);
  }
});


