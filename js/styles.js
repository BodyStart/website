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

document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.liststyle1 a');

  links.forEach(function(link) {
      link.addEventListener('click', function(e) {
          // Remove active class from all links
          links.forEach(function(lnk) {
              lnk.classList.remove('clicked');
          });
          // Add active class to the clicked link
          this.classList.add('clicked');
      });
  });
});
