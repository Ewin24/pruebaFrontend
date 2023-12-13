const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const mobileMenu = document.getElementById('mobile-nemu')

function navToggle() {
  btn.classList.toggle('open')
  nav.classList.toggle('hidden')
  document.body.classList.toggle('no-scroll')
}

btn.addEventListener('click', navToggle)
