window.addEventListener("scroll", function () {
    const button = document.getElementById("back-to-top");
    if (window.scrollY > 200) { // Exibe o botão após 200px de rolagem
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Rola suavemente
    });
}