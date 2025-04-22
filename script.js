document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach(el => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
    });
});
