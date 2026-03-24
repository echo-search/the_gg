/* EFFECTS RARE — particle bursts and slow-motion shimmer */

function rareShimmer(card) {
    card.classList.add("shimmering");
    setTimeout(() => card.classList.remove("shimmering"), 2000);
}

document.querySelectorAll(".card").forEach((card, i) => {
    setTimeout(() => rareShimmer(card), i * 500);
});