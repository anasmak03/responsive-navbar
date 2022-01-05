const hamburger = document.querySelector('.hamburger')
const navlinks = document.querySelector('.navbar-links')
const bar = document.querySelector('.bar')


hamburger.addEventListener('click', () =>{
    navlinks.classList.toggle('active')
    hamburger.classList.toggle('active')
})