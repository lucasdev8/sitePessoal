function displayAbout() {
    const animationIcon = document.getElementById("animation-icon")
    const aboutText = document.getElementById("about")
    animationIcon.classList.toggle("rotate")
    aboutText.classList.toggle("active-text-about")
}