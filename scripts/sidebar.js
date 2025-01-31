const contents = document.querySelector(".contents");
const sidebar = document.querySelector(".sidebar");
const sidemenu = document.querySelector(".side-menu");
const sidetop = document.querySelector(".sidetext");
const sidebot = document.querySelector(".side-buttons");
let sideOpen = false;
let sidePos = 0;



function generateSideMenu(t,l) {
    if (t == 'L') {
        sidemenu.innerHTML = "This is a test message.";
    } else if (t == 'F') {
        const menuGUI = createDiv("menuGUI flex column");
        sidemenu.appendChild(menuGUI);
        const dualTab = createDiv("dualtab flex");
        menuGUI.appendChild(dualTab);
        for (let i = 0; i < 2; i++) {
            const dt = createDiv("dt flex f1");
            dt.setAttribute("onclick", "loadDualSideTab('F'," + i + ")");
            dt.appendChild(injectTxt(menuLabels[l][i], "dualtext flex tl"));
            dualTab.appendChild(dt);
        };
        const dinterface = createDiv("interface flex");
        menuGUI.appendChild(dinterface);
        const menuSelection = createDiv("menuselection flex column f1");
        dinterface.appendChild(menuSelection);
        const menuSelect = createDiv("menuselect flex column center");
        menuSelection.appendChild(menuSelect);
        for (let i = 0; i < 8; i++) {
            const daLinky = createDiv("option o flex f1");
            const buttonicon = createDiv("sideicon");
            daLinky.appendChild(buttonicon);
            daLinky.appendChild(injectTxt("Placeholder","optiontext f1"));
            menuSelect.appendChild(daLinky);
        };
        const menuNav = createDiv("menunav flex");
        menuSelection.appendChild(menuNav);
        for (let i = 0; i < 3; i++) {
            const s = ["Exit Menu","Prev Page","Next Page"];
            const a = ["closeSideBar()","",""];
            const mn = createDiv("mn flex f1");
            mn.appendChild(injectTxt(s[i], "menutext tc"));
            mn.setAttribute("onclick", a[i]);
            menuNav.appendChild(mn);
        };
        loadDualPreviews(t,0);
        loadDualTab(t,0)
        loadDualSideSelection(t);
    } else if (t == 'W') {
        const menuGUI = createDiv("menuGUI flex row");
        sidemenu.appendChild(menuGUI);
        const left = createDiv("left flex f50p column");
        left.setAttribute("style","height:95%;align-self:center;");
        menuGUI.appendChild(left);
        const info = createDiv("sideinfo flex column");
        info.appendChild(injectTxt(userdata[bladePos][panelPos][0][0].description, "usertext"));
        left.appendChild(info);
        const button = createDiv("sidebutton flex");
        button.appendChild(injectTxt("Exit Menu", "buttontext"));
        button.setAttribute("onclick", "closeSideBar()");
        left.appendChild(button);
        const right = createDiv("right flex f50p column mobile");
        menuGUI.appendChild(right);
        const profile = createDiv("profile flex columm");
        right.appendChild(profile);
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
            const scoreName = createDiv("scoreName f1 flex");
            scoreName.appendChild(injectTxt(statistics[s], "stattext"));
            const score = createDiv("score f1");
            score.appendChild(injectTxt(userstats[s], "stattext"));
            stat.appendChild(scoreName);
            stat.appendChild(score);
        };
        const profile2 = createDiv("website flex columm");
        right.appendChild(profile2);
        const gamertag2 = createDiv("gamertag flex column");
        profile2.appendChild(gamertag2);
        const userinfo2 = createDiv("userinfo flex");
        gamertag2.appendChild(userinfo2);
        const stats2 = createDiv("stats flex column");
        userinfo2.appendChild(stats2);
        const stat1 = createDiv("stat flex f1");
        stats2.appendChild(stat1);
        const scoreName1 = createDiv("scoreName f1 flex");
        scoreName1.appendChild(injectTxt(userdata[bladePos][panelPos][0][0].location, "stattext"));
        stat1.appendChild(scoreName1);
        const stat2 = createDiv("stat flex f1");
        stats2.appendChild(stat2);
        const scoreName2 = createDiv("scoreName f1 flex");
        scoreName2.appendChild(injectTxt(userdata[bladePos][panelPos][0][0].website, "stattext"));
        stat2.appendChild(scoreName2);
        const profile3 = createDiv("interests flex columm");
        right.appendChild(profile3);
        const gamertag3 = createDiv("gamertag flex column");
        profile3.appendChild(gamertag3);
        const username3 = createDiv("username flex");
        username3.appendChild(injectTxt("Interests", "usertext"));
        gamertag3.appendChild(username3);
        const userinfo3 = createDiv("userinfo flex");
        gamertag3.appendChild(userinfo3);
        const stats3 = createDiv("sidestats flex column");
        userinfo3.appendChild(stats3);
    };
};




function loadDualSideSelection(x) {
    if (x == 'F') {
        loadDualSideSelections();
    };
    function loadDualSideSelections() {
        const icons = document.querySelectorAll(".sideicon");
        const selections = document.querySelectorAll(".optiontext");
        const options = document.querySelectorAll(".o");
        for (let i = 0; i < 8; i++) {
            if (i < userdata[bladePos][panelPos][dualPos].length) {
                options[i].setAttribute("class","option o flex f1");
                options[i].setAttribute("onclick","location.href='" + userdata[bladePos][panelPos][dualPos][i].friendSite + "'");
                options[i].setAttribute("title", userdata[bladePos][panelPos][dualPos][i].friendSite);
                icons[i].style.backgroundImage = "url(" + userdata[bladePos][panelPos][dualPos][i].friendIcon + ")";
                icons[i].style.display = "block";
                selections[i].innerHTML = userdata[bladePos][panelPos][dualPos][i].friendName;
                selections[i].style.display = "block";
            } else {
                options[i].setAttribute("class","nooption o f1");
                options[i].setAttribute("onclick","");
                options[i].setAttribute("onmouseover","");
                icons[i].style.backgroundImage = "none";
                icons[i].style.display = "none";
                selections[i].innerHTML = "";
                selections[i].style.display = "none";
            };
        };
    };
};
function loadDualSideTab(x, e) {
    if (x == 'F') {
        loadDualTabs(e);
    };
    function loadDualTabs(e) {
        const dualTab = document.querySelectorAll(".dt");
        if (dualPos != e) {
            menuPos = 0;
            dualPos = e;
            for (let i = 0; i < 2; i++) {
                if (i == e) {
                    dualTab[i].style.boxShadow = "var(--dualtab-selected)";
                } else {
                    dualTab[i].style.boxShadow = "var(--dualtab)";
                };
            };
            loadDualSideSelection(x);
        };
    };
};


function openSideBar(t,l) {
    if (!sideOpen) {
        sideOpen = true;
        document.querySelector(".sidetext").innerHTML = panelData[bladePos][panelPos][0];
        sidemenu.style.opacity = "0%";
        sidetop.style.opacity = "0%";
        sidebot.style.opacity = "0%";
        contents.style.filter = "brightness(.25)";
        setTimeout(function(){
            sidebar.style.animationName = "openSideBar";
            setTimeout(function(){
                generateSideMenu(t,l);
                loadSideMenu();
            },500);
        },50);
    };
};
function closeSideBar() {
    sidebar.style.animationName = "closeSideBar";
    setTimeout(function(){
        document.querySelector(".menuGUI").remove();
        dualPos = 0;
        sideOpen = false;
        contents.style.filter = "brightness(1)";
    },500);
};
function loadSideMenu() {
    setTimeout(function(){
        sidetop.style.opacity = "100%";
        sidebot.style.opacity = "100%";
        sidemenu.style.opacity = "100%";
        css.style.setProperty("--transition", "all .15s linear");
        selectable = true;
    },100);
};