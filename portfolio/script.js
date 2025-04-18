
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });
});


const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(30, 30, 30, 1)";
        navbar.style.boxShadow = "0px 4px 15px rgba(255, 255, 255, 0.1)";
    } else {
        navbar.style.background = "rgba(30, 30, 30, 0.1)";
        navbar.style.boxShadow = "none";
    }
});



document.querySelectorAll("#projects ul li").forEach(item => {
    item.addEventListener("mouseover", () => {
        item.classList.add("hover-effect");
    });

    item.addEventListener("mouseleave", () => {
        item.classList.remove("hover-effect");
    });
});
