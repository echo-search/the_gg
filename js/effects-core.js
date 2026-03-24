/* EFFECTS CORE — basic card interactions, glow, pulses */

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseenter", () => card.classList.add("breathe", "edge-glow"));
    card.addEventListener("mouseleave", () => card.classList.remove("breathe", "edge-glow"));
});