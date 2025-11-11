const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

const currentLocation = location.href;
const menuLinks = document.querySelectorAll('nav a');
menuLinks.forEach(link => {
  if (link.href === currentLocation) {
    link.classList.add('active');
  }
});

const animatedBlocks = document.querySelectorAll('.project-card, .about, .contact form');
function showBlocksOnScroll() {
  animatedBlocks.forEach(block => {
    const rect = block.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      block.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', showBlocksOnScroll);
showBlocksOnScroll();

const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (name && email && message) {
      alert(`Спасибо, ${name}! Ваше сообщение отправлено.`);
      contactForm.reset();
    } else {
      alert('Пожалуйста, заполните все поля.');
    }
  });
}
