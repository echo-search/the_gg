// ==========================================================
// FLAIR CORE — glow touches, tap animations, quote toggle
// ==========================================================

// ========== BONUS QUOTES REVEAL ==========
document.querySelectorAll(".card").forEach(card => {
    const bonus = card.querySelector(".bonus-quotes");
    if (!bonus) return;

    card.addEventListener("click", () => {
        const visible = bonus.style.display === "block";

        if (visible) {
            bonus.style.opacity = "0";
            setTimeout(() => (bonus.style.display = "none"), 150);
        } else {
            bonus.style.display = "block";
            setTimeout(() => (bonus.style.opacity = "1"), 20);
        }
    });
});

// ========== TAP GLOW (mobile + desktop) ==========
document.body.addEventListener("pointerdown", e => {
    const glow = document.createElement("div");
    glow.className = "tap-glow";
    document.body.appendChild(glow);

    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;

    setTimeout(() => glow.remove(), 400);
});

// ========== CROWN SHIMMER ==========
function applyCrownShimmer() {
    document.querySelectorAll(".card").forEach((card, i) => {
        const crown = document.createElement("div");
        crown.className = "crown-shimmer";

        // Slight stagger between cards
        crown.style.animationDelay = `${i * 0.3}s`;
        card.appendChild(crown);
    });
}

applyCrownShimmer();

// ========== FLOAT RING HOVER (desktop only) ==========
if (window.matchMedia("(hover:hover)").matches) {
    document.querySelectorAll(".card").forEach(card => {
        const ring = document.createElement("div");
        ring.className = "hover-ring";
        card.appendChild(ring);

        card.addEventListener("mousemove", e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            ring.style.left = `${x}px`;
            ring.style.top = `${y}px`;
        });

        card.addEventListener("mouseleave", () => {
            ring.style.left = "-9999px";
        });
    });
}