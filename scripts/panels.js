const panel = document.querySelectorAll(".panels");
const binbow = document.querySelectorAll(".windows");
const bintop = document.querySelectorAll(".wintop");
const binbot = document.querySelectorAll(".winbottom");
let panelPos = 0;
const panelType = "MSSSV";
const panelData = [
    [
        ["Join ZetcherNet", "location.href='https://discord.gg/xZkmzHv'"],
        ["N/A", ""]
    ],
    [
        ["About Me", ""],
        ["Interests", ""],
        ["Friends", ""],
        ["N/A", ""],
        ["N/A", ""]
    ],
    [
        ["My Websites", ""],
        ["My Software", ""],
        ["Languages", ""],
        ["Software", ""],
        ["N/A", ""]
    ],
    [
        ["My Artwork", ""],
        ["N/A", ""],
        ["N/A", ""],
        ["N/A", ""],
        ["N/A", ""]
    ],
    [
        ["Github", "location.href='https://github.com/Bolternon'"],
        ["YouTube", "location.href='https://www.youtube.com/@Bolternon'"],
        ["Twitter", "location.href='https://twitter.com/Bolternon'"],
        ["Instagram", "location.href='https://www.instagram.com/bolternon/'"],
        ["Steam", "location.href='https://steamcommunity.com/id/Bolternon/'"],
        ["N/A", ""],
        ["N/A", ""],
        ["N/A", ""]
    ]
];
const panelText = [
    "Welcome to My (Bolternon's) Website. You can find everything you need to know About Me (Bolternon), My Coding, and My Artwork here.",
    "Learn a bit about myself and my interests, perhaps also check out my friends' websites while your at it.",
    "View my Coding related projects for both back-end and front-end that ive made on my own and with others.",
    "View my Artwork along with other art related things that ive created over the years.",
    "If you wish to contact me, visit my listed social media accounts, dont be afraid to reach out."
];
function generatePanels() {
    for (let p = 0; p < 5; p++) {
        switch (panelType[p]) {
            case 'L':
                binbow[p].innerHTML = "This is a test message."
            break;
            case 'S':
                const trayless = createDiv("trayless flex");
                binbow[p].appendChild(trayless);
                const left = createDiv("left flex f50p column");
                trayless.appendChild(left);
                const profile = createDiv("profile flex column");
                left.appendChild(profile);
                const gamertag = createDiv("gamertag flex column");
                profile.appendChild(gamertag);
                const username = createDiv("username flex");
                username.appendChild(injectTxt(usertitle, "usertext"));
                gamertag.appendChild(username);
                const userinfo = createDiv("userinfo flex");
                gamertag.appendChild(userinfo);
                const pfp = createDiv("pfp flex");
                userinfo.appendChild(pfp);
                const icon = createDiv("icon");
                pfp.appendChild(icon);
                const stats = createDiv("stats flex column");
                userinfo.appendChild(stats);
                const statistics = ["Projects", "Coderscore", "Brain IQ"];
                for (let s = 0; s < 3; s++) {
                    const stat = createDiv("stat flex f1");
                    stats.appendChild(stat);
                    const scoreName = createDiv("scoreName f1");
                    scoreName.appendChild(injectTxt(statistics[s], "stattext"));
                    const score = createDiv("score f1");
                    score.appendChild(injectTxt(userstats[s], "stattext"));
                    stat.appendChild(scoreName);
                    stat.appendChild(score);
                };
                const selection = createDiv("selection flex column");
                left.appendChild(selection);
                for (let s = 0; s < panelData[p].length; s++) {
                    if (panelData[p][s][0] != "N/A") {
                        const button = createDiv("button flex");
                        button.appendChild(injectTxt(panelData[p][s][0], "buttontext"));
                        button.setAttribute("onclick", panelData[p][s][1]);
                        selection.appendChild(button);
                    } else {
                        const button = createDiv("nobutton");
                        selection.appendChild(button);
                    }
                };
                const right = createDiv("right flex f50p column");
                trayless.appendChild(right);
                const logo = createDiv("logo mobile flex");
                right.appendChild(logo);
                const ztn = createDiv("ztn");
                logo.appendChild(ztn);
                const info = createDiv("info flex column");
                info.appendChild(injectTxt(panelText[p], "usertext"));
                right.appendChild(info);
                const tray = createDiv("tray mobile flex");
                binbow[p].appendChild(tray);
                const trayA = createDiv("trayA");
                tray.appendChild(trayA);
                const trayB = createDiv("trayB flex");
                trayB.appendChild(injectTxt("Open Tray", "traytext"));
                tray.appendChild(trayB);
            break;
            case 'V':
                const links = createDiv("links flex");
                binbow[p].appendChild(links);
                const vleft = createDiv("left flex f50p");
                links.appendChild(vleft);
                const vselection = createDiv("selection flex column");
                vleft.appendChild(vselection);
                for (let s = 0; s < panelData[p].length; s++) {
                    if (panelData[p][s][0] != "N/A") {
                        const button = createDiv("button flex");
                        button.appendChild(injectTxt(panelData[p][s][0], "buttontext"));
                        button.setAttribute("onclick", panelData[p][s][1]);
                        vselection.appendChild(button);
                    } else {
                        const button = createDiv("nobutton");
                        vselection.appendChild(button);
                    }
                };
                const vright = createDiv("right flex f50p");
                links.appendChild(vright);
                const vinfo = createDiv("info flex column");
                vinfo.appendChild(injectTxt(panelText[p], "usertext"));
                vright.appendChild(vinfo);
            break;
            case 'M':
                const home = createDiv("home flex");
                binbow[p].appendChild(home);
                const mleft = createDiv("left flex f50p");
                home.appendChild(mleft);
                const minfo = createDiv("info flex column");
                minfo.appendChild(injectTxt(panelText[p], "usertext"));
                mleft.appendChild(minfo);
                const mright = createDiv("right flex f50p column");
                home.appendChild(mright);
                const title = createDiv("title flex column");
                mright.appendChild(title);
                const welcome = createDiv("welcome");
                title.appendChild(welcome);
                const mselection = createDiv("miniselection flex column");
                mright.appendChild(mselection);
                for (let s = 0; s < panelData[p].length; s++) {
                    if (panelData[p][s][0] != "N/A") {
                        const button = createDiv("button flex");
                        button.appendChild(injectTxt(panelData[p][s][0], "buttontext"));
                        button.setAttribute("onclick", panelData[p][s][1]);
                        mselection.appendChild(button);
                    } else {
                        const button = createDiv("nobutton");
                        mselection.appendChild(button);
                    }
                };
            break;
        };
    };
};
function createDiv(name) {
    const div = document.createElement("div");
    div.setAttribute("class", name);
    return div;
};
function injectTxt(text, name) {
    const h1 = document.createElement("h1");
    h1.setAttribute("class", name);
    h1.innerHTML = text;
    return h1;
};
function adjustPanel(e) {
    if (selectable && e != bladePos) {
        selectable = false;
        bladePos = e;
        for (let i = 0; i < 5; i++) {
            hideBinbow(i);
            adjustBlade(i);
            adjustLabel(i);
            if (i == bladePos) {
                panel[i].style.flex = "80%";
            } else {
                panel[i].style.flex = "0%";
            };
        };
        adjustColor();
        setTimeout(function(){
            showBinbow(bladePos);
        },150);
    };
};
function hideBinbow(w) {
    binbow[w].style.display = "none";
    binbow[w].style.opacity = "0%";
    bintop[w].style.display = "none";
    bintop[w].style.opacity = "0%";
    binbot[w].style.display = "none";
    binbot[w].style.opacity = "0%";
};
function showBinbow(w) {
    binbow[w].style.display = "flex";
    bintop[w].style.display = "flex";
    binbot[w].style.display = "flex";
    setTimeout(function(){
        binbow[w].style.opacity = "100%";
        bintop[w].style.opacity = "100%";
        binbot[w].style.opacity = "100%";
        selectable = true;
    },100);
}