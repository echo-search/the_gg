// ============================================================
// ULTRA ENGINE — particles, ripples, tilt, parallax, confetti
// ============================================================


// ---------- PARTICLE FIELD ----------
const particleField = document.createElement("div");
particleField.id = "particle-field";
document.body.appendChild(particleField);

function spawnParticle() {
    const p = document.createElement("div");
    p.className = "p";

    p.style.left = Math.random() * 100 + "vw";
    p.style.top = "100vh";
    p.style.opacity = Math.random().toFixed(2);

    particleField.appendChild(p);
    setTimeout(() => p.remove(), 6000);
}

setInterval(spawnParticle, 350);


// ---------- RIPPLE ON TOUCH ----------
function createRipple(e) {
    const ripple = document.createElement("div");
    ripple.className = "ripple";

    const x = e.clientX || (e.touches && e.touches[0].clientX);
    const y = e.clientY || (e.touches && e.touches[0].clientY);

    ripple.style.left = x - 20 + "px";
    ripple.style.top = y - 20 + "px";

    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
}

document.addEventListener("pointerdown", createRipple);


// ---------- PARALLAX FLOAT ----------
const parallaxLayer = document.createElement("div");
parallaxLayer.id = "parallax-layer";
document.body.appendChild(parallaxLayer);

for (let i = 0; i < 18; i++) {
    const bit = document.createElement("div");
    bit.className = "parallax-bit";

    bit.style.left = Math.random() * 100 + "vw";
    bit.style.top = Math.random() * 100 + "vh";
    bit.style.animationDelay = (Math.random() * 10) + "s";

    parallaxLayer.appendChild(bit);
}


// ---------- MOTION-REACTIVE GLOW ----------
let glowTarget = null;
if (window.DeviceMotionEvent) {
    window.addEventListener("devicemotion", e => {
        if (!glowTarget) glowTarget = document.querySelector("#title");

        const strength = Math.min(15, Math.abs(e.accelerationIncludingGravity.x)) / 15;

        if (glowTarget) {
            if (strength > 0.3) glowTarget.classList.add("active");
            else glowTarget.classList.remove("active");
        }
    });
}


// ---------- CARD TILT ----------
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("pointermove", e => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        const tiltX = (y - 0.5) * 2;
        const tiltY = (x - 0.5) * -2;

        card.style.setProperty("--tiltX", tiltX);
        card.style.setProperty("--tiltY", tiltY);

        card.classList.add("tilted");
    });

    card.addEventListener("pointerleave", () => {
        card.classList.remove("tilted");
    });
});


// ---------- CONFETTI ENGINE ----------
const confettiZone = document.createElement("div");
confettiZone.id = "confetti-zone";
document.body.appendChild(confettiZone);

function launchConfetti(amount = 35) {
    for (let i = 0; i < amount; i++) {
        const piece = document.createElement("div");
        piece.className = `confetti-piece confetti-g${1 + (i % 4)}`;

        piece.style.left = Math.random() * 100 + "vw";
        piece.style.top = "-30px";
        piece.style.animationDuration = 2.5 + Math.random() * 1.5 + "s";
        piece.style.transform = `rotate(${Math.random() * 360}deg)`;

        confettiZone.appendChild(piece);
        setTimeout(() => piece.remove(), 4000);
    }
}


// ---------- AUTO CELEBRATIONS FOR FUN ----------
setTimeout(() => launchConfetti(50), 2500);


// ---------- EXTRA DEPTH FIELD ----------
const depth = document.createElement("div");
depth.id = "depth-field";
document.body.appendChild(depth);