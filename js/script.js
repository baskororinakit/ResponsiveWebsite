const menuIcon = document.getElementById("menu-icon")
const menuList = document.getElementById("menu-list")
const deviceLink = document.getElementById("devices-link")

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden")
});