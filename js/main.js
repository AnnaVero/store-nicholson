// Burger

const burger = document.querySelector("[data-burger]");
const nav = document.querySelector("[data-nav]");
const navItems = nav.querySelectorAll("a");

burger.addEventListener("click", () => {
burger.classList.toggle("burger--active");
nav.classList.toggle("nav--visible");
});

navItems.forEach((el) => {
	el.addEventListener("click", () => {
   burger.classList.remove("burger--active");
   nav.classList.remove("nav--visible");
});
});

// Cart

const cartItem = document?.querySelector("[data-cart-link]");
const cartInner = document?.querySelector("[data-cart]");
const cartClose = document?.querySelector("[data-close]");

cartItem?.addEventListener("click", () => {
	cartInner?.classList.toggle("cart--visible");
});

cartClose?.addEventListener("click", () => {
	cartInner?.classList.remove("cart--visible");
});

// Guide

const guideItem = document?.querySelector("[data-guide-link]");
const guideInner = document?.querySelector("[data-guide]");
const guideClose = document?.querySelector("[data-close-guide]");

guideItem?.addEventListener("click", () => {
	guideInner?.classList.toggle("guide--visible");
});

guideClose?.addEventListener("click", () => {
	guideInner?.classList.remove("guide--visible");
});

// Scroll smooth

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
	anchor.addEventListener("click", function (event) {
   event.preventDefault();
   const blockID = anchor.getAttribute("href");
   document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
   });
});
}

  // Footer - Accordion

(function () {
   function initAcc() {
		var firstSectionBodyHeight = document.querySelector(".acc__section .acc__body > *").clientHeight;
      document.querySelector(".acc__section .acc__body").style.maxHeight = firstSectionBodyHeight + "px";
   }
   var accHeaderClickHandler = function (e) {
      document.querySelectorAll(".acc__section").forEach(function (section) {
			section.querySelector(".acc__body").style.maxHeight = "0px";
      });
      var accSection = e.target.closest(".acc__section");
      var insideElHeight = accSection.querySelector(".acc__body > *").clientHeight;
      accSection.querySelector(".acc__body").style.maxHeight =
      insideElHeight + "0px";
   };
   document.querySelector(".acc__section");
   document.querySelectorAll(".acc__section").forEach(function (section) {
      section.addEventListener("click", accHeaderClickHandler);
   });
})();