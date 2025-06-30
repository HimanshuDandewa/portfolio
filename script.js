// Show/hide the Back to Top button
window.onscroll = function () {
  const btn = document.querySelector(".back-to-top");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Scroll to top behavior
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// AOS Init
AOS.init();
