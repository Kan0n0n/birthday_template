const card = document.querySelector("#gif-5");
const video = card.querySelector("video");

card.addEventListener("mouseenter", () => {
    video.currentTime = 0;
    video.play();
});

card.addEventListener("mouseleave", () => {
    video.pause();
});