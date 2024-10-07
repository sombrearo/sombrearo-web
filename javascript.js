const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    const pageContent = document.getElementById(href.substring(1));
    pageContent.scrollIntoView({ behavior: 'smooth' });
  });
});