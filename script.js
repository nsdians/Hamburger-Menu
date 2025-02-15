const hamburgerIcon = document.querySelector('.hamburger-menu-container')
const headerContainer = document.querySelector('.header-container')
const closeIcon = document.querySelector('.close-icon')
const goToTop = document.querySelector('.go-to-top')
const nav = document.querySelector('nav')

hamburgerIcon.addEventListener('click', (e) => {
    e.stopPropagation()
    headerContainer.classList.add('menu-open')
})

nav.addEventListener('click', (e) => {
    e.stopPropagation()
})

closeIcon.addEventListener('click', () => {
    headerContainer.classList.remove('menu-open')
})

window.addEventListener('click', () => {
    headerContainer.classList.remove('menu-open')
})

goToTop.addEventListener('click', () => {
    document.querySelector("body > div").scrollTo(0,0)
})