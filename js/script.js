const menuIcon = document.getElementById("menu-icon")
const menuList = document.getElementById("menu-list")
const deviceLink = document.getElementById("devices-link")

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden")
});

deviceLink.forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});