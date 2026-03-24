/* THEMES — switch between gold/black, gold/navy, gold/pink */

const themes = {
    goldBlack: { bg: "#000", text: "#fff", accent: "gold" },
    goldMidnight: { bg: "#050520", text: "#fff", accent: "gold" },
    goldPink: { bg: "#1a001a", text: "#fff", accent: "#ffb6c1" }
};

function applyTheme(name) {
    const t = themes[name];
    document.body.style.background = t.bg;
    document.body.style.color = t.text;
    document.querySelectorAll(".card-name").forEach(n => n.style.color = t.accent);
}

// auto-apply default
applyTheme("goldBlack");