/* MEGA EFFECTS — crazy modes, storms, trails, screen shakes */

function screenShake() {
    document.body.classList.add("shake");
    setTimeout(() => document.body.classList.remove("shake"), 400);
}

// activate trail behind cursor
document.body.addEventListener("pointermove", e => {
    const trail = document.createElement("div");
    trail.className = "tap-glow";
    trail.style.left = `${e.clientX}px`;
    trail.style.top = `${e.clientY}px`;
    document.body.appendChild(trail);
    setTimeout(() => trail.remove(), 500);
});

// special effect trigger
document.addEventListener("keydown", e => {
    if(e.key === "G") {
        screenShake();
        // bonus confetti
        const confettiEvent = new Event("launchConfetti");
        document.dispatchEvent(confettiEvent);
    }
});