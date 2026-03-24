/* EASTER EGGS — hidden clicks, secret phrases */

let secretClicks = 0;
document.querySelector("#title").addEventListener("click", () => {
    secretClicks++;
    if(secretClicks === 7) {
        alert("🎉 You found the secret Girl Gang code! 🎉");
        secretClicks = 0;
    }
});

// Konami code
const konami = [38,38,40,40,37,39,37,39,66,65];
let konamiIndex = 0;

document.addEventListener("keydown", e => {
    if(e.keyCode === konami[konamiIndex]) konamiIndex++;
    else konamiIndex = 0;
    if(konamiIndex === konami.length) {
        alert("GG UNLOCKED: Extra confetti mode!");
        konamiIndex = 0;
    }
});