let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let logo = document.querySelector('.logo');
let navbarLinks = document.querySelectorAll('.navbar li');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
  logo.classList.toggle('active');

  // Oculta todos os itens da navbar
  navbarLinks.forEach(link => {
    link.classList.toggle('active');
  });
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
  logo.classList.remove('active');

  // Remove a classe 'active' de todos os itens da navbar
  navbarLinks.forEach(link => {
    link.classList.remove('active');
  });
}
