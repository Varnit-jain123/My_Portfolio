// script.js

document.addEventListener("DOMContentLoaded", () => {
  const smoothLinks = document.querySelectorAll('a[href^="#"]');

  smoothLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
});
