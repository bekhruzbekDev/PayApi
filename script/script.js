let hamburger = document.querySelector('.hamburger')
let nav = document.querySelector('nav')
let close = document.querySelector('.cross')

hamburger.addEventListener('click', () => {
    nav.classList.add('active')
})
close.addEventListener('click', () => {
    nav.classList.remove('active')
})