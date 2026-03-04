const thankBtn = document.getElementById("thankBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close");

thankBtn.addEventListener("click", () => {
    popup.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});