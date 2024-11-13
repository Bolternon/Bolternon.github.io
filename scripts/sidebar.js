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