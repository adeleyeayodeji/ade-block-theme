/**
 * Ade Block Theme - Main JavaScript
 */

(function () {
  "use strict";

  // Initialize Bootstrap components if needed
  document.addEventListener("DOMContentLoaded", function () {
    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Initialize popovers
    var popoverTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="popover"]')
    );
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });

    // Track scroll for sticky elements
    trackScroll();
  });

  /**
   * Track scroll event
   */
  function trackScroll() {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        document.body.classList.add("scrolling");
      } else {
        document.body.classList.remove("scrolling");
      }
    });
  }

  /**
   * Handle navigation toggle
   */
  var navToggle = document.querySelector('[data-toggle="navbar"]');
  if (navToggle) {
    navToggle.addEventListener("click", function () {
      var navbar = document.querySelector(".navbar-collapse");
      if (navbar) {
        navbar.classList.toggle("show");
      }
    });
  }

  /**
   * Smooth scroll for anchor links
   */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var href = this.getAttribute("href");
      if (href !== "#" && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
})();
