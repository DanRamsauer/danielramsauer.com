const hamburgerMenu = document.querySelector('#hamburger');
const nav = document.querySelector('#hiddenNav')

// function displayMenu () {
// }

hamburgerMenu.addEventListener('click', () => {
    nav.classList.toggle('visible');
})


console.log(nav);