// Change navbar color on scroll
window.addEventListener("scroll", function() {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "#003603";
    } else {
        navbar.style.background = "#660008";
    }
});


function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}
