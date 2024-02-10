document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const nav23 = document.querySelector('.nav23');
  const closeBtn = document.querySelector('.close-btn');

  hamburger.addEventListener('click', function() {
      nav23.classList.toggle('nav23-active');
      this.classList.toggle('active'); // Toggle active class for hamburger
  });

  closeBtn.addEventListener('click', function() {
      nav23.classList.remove('nav23-active');
      hamburger.classList.remove('active'); // Remove active class when nav is closed
  });
});
