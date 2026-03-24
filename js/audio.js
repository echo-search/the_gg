/* AUDIO — background beats and interactions */

const sounds = {
    click: new Audio("assets/audio/click.mp3"),
    sparkle: new Audio("assets/audio/sparkle.mp3"),
    confetti: new Audio("assets/audio/confetti.mp3")
};

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => sounds.click.play());
});

document.addEventListener("pointerdown", () => sounds.sparkle.play());