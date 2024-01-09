// navigation toggle menu
const toggleButton = document.getElementById("burger");
const toggleMenu = document.getElementById("menu");
toggleButton.addEventListener("click", toggle);
toggleMenu.addEventListener("click", close)
function toggle() {
    toggleMenu.classList.toggle('active');
}
function close() {
    toggleMenu.classList.remove('active')
}
