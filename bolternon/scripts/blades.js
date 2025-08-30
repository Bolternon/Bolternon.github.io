const css = document.querySelector(":root");
const blade = document.querySelectorAll(".blades");
const label = document.querySelectorAll(".labels");
const tag = document.querySelectorAll(".tags");
let selectable = true;
let bladePos = 5;
function startup() {
    loadUserStats();
    adjustPanel(0);
    generatePanels();
};
function adjustBlade(b) {
    if (b < bladePos) {
        blade[b].style.boxShadow = "var(--metal-shadow-left)"
    } else if (b == bladePos) {
        blade[b].style.boxShadow = "var(--metal-shadow-left-select)"
    } else if (b == (bladePos + 1)) {
        blade[b].style.boxShadow = "var(--metal-shadow-right-select)"
    } else {
        blade[b].style.boxShadow = "var(--metal-shadow-right)"
    };
};
function adjustLabel(b) {
    const scale = [
        "50",
        "55",
        "60",
        "65",
        "70",
        "65",
        "60",
        "55",
        "50",
    ];
    if (b < bladePos) {
        label[b].style.backgroundColor = "#888"
        label[b].style.margin = "var(--label-margin-left)"

    } else if (b == bladePos) {
        label[b].style.backgroundColor = "var(--bg-tab)"
        label[b].style.margin = "var(--label-margin-left)"

    } else {
        label[b].style.backgroundColor = "#888"
        label[b].style.margin = "var(--label-margin-right)"

    };
    css.style.setProperty("--label-scale-" + b, scale[4 + b - bladePos] + "%");
    b == bladePos ? tag[b].style.fontSize = "var(--label-font-size-select)" : tag[b].style.fontSize = "var(--label-font-size)";
};
function adjustColor() {
    const tabColor = [
        "#a13413",
        "#b06e2c",
        "#357130",
        "#2a5d90",
        "#72529d"
    ];
    const pageColor = [
        "#ea863b",
        "#f2a554",
        "#5eb252",
        "#387dc0",
        "#896ac2"
    ];
    css.style.setProperty("--bg-tab", tabColor[bladePos]);
    css.style.setProperty("--bg-page", pageColor[bladePos]);
};