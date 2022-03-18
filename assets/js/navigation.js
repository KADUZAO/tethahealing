const nav = document.querySelectorAll("nav ul li a");

function navigation() {
    nav.forEach(item => {
        item.classList.remove('active');
        this.classList.add('active')
    });
}

nav.forEach(item => {
    item.addEventListener("click", navigation);
})