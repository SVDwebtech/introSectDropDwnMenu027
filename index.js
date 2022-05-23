const menuOpen = document.querySelector(".menuOpen");
const menuClose = document.querySelector(".menuClose");
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const featuresLink = document.querySelector(".featuresLink");
const featuresList = document.querySelector(".featuresList");
const companyLink = document.querySelector(".companyLink");
const companyList = document.querySelector(".companyList");
const featuresArrowDown = document.querySelector(".featuresArrowDown");
const featuresArrowUp = document.querySelector(".featuresArrowUp");
const companyArrowDown = document.querySelector(".companyArrowDown");
const companyArrowUp = document.querySelector(".companyArrowUp");
const featuresDesktopArrowDown = document.querySelector(".featuresDesktopArrowDown");
const featuresDesktopArrowUp = document.querySelector(".featuresDesktopArrowUp");
const companyDesktopArrowDown = document.querySelector(".companyDesktopArrowDown");
const companyDesktopArrowUp = document.querySelector(".companyDesktopArrowUp");
const featuresDesktopLink = document.querySelector(".featuresDesktopDropdownLink");
const featuresDesktopList = document.querySelector(".featuresDesktopList");
const companyDesktopLink = document.querySelector(".companyDesktopDropdownLink");
const companyDesktopList = document.querySelector(".companyDesktopList");
const featuresText = document.querySelector(".featuresText");
const companyText = document.querySelector(".companyText");

menuOpen.addEventListener("click", function() {
	toggleHamburgerBtns();
});

menuClose.addEventListener("click", function() {
	toggleHamburgerBtns();
});
/////////////////////////////////////////////////////////////////
// hamburgerDropdownMenu functionality
/////////////////////////////////////////////////////////////////
let dropdown1 = true;
featuresLink.addEventListener("click", function() {
	if (dropdown1) {
		dropdownMenuFunctionality("features", "displayBlock", "displayNone", "listFeaturesDisplay", 20);
	}
	else {
		dropdownMenuFunctionality("features", "listFeaturesDisplay", "displayNone", "displayBlock", 800);
	}
	dropdown1 = !dropdown1;
});

let dropdown2 = true;

companyLink.addEventListener("click", function() {
	if (dropdown2) {
		dropdownMenuFunctionality("company", "displayBlock", "displayNone", "listCompanyDisplay", 20);
	}
	else {
		dropdownMenuFunctionality("company", "listCompanyDisplay", "displayNone", "displayBlock", 800);
	}
	dropdown2 = !dropdown2;
});

/////////////////////////////////////////////////////////////////
// DeskTopDropdownMenu functionality
/////////////////////////////////////////////////////////////////
let desktopDropdown1 = true;
featuresDesktopLink.addEventListener("click", function() {
	if (desktopDropdown1) {
		dropdownDesktopMenuFunctionality("features", "displayBlock", "displayNone", "highlightBlack", "listFeaturesDesktopDisplay", 20);
	}
	else {
		dropdownDesktopMenuFunctionality("features", "listFeaturesDesktopDisplay", "displayNone", "highlightBlack", "displayBlock", 800);
	}
	desktopDropdown1 = !desktopDropdown1;
});

/////////////////////////////////////////////////////////////////
// featuresDeskTopDropdownLink functionality
/////////////////////////////////////////////////////////////////
let desktopDropdown2 = true;
companyDesktopLink.addEventListener("click", function() {
	if (desktopDropdown2) {
		dropdownDesktopMenuFunctionality("company", "displayBlock", "displayNone", "highlightBlack", "listCompanyDesktopDisplay", 20);
	}
	else {
		dropdownDesktopMenuFunctionality("company", "listCompanyDesktopDisplay", "displayNone", "highlightBlack", "displayBlock", 800);
	}
	desktopDropdown2 = !desktopDropdown2;
});

//////////////////////////////////////////////////////////////////////////
// app functions
//////////////////////////////////////////////////////////////////////////
function toggleHamburgerBtns() {
	hamburgerMenu.classList.toggle("hamburgerMenuOpen");
	menuOpen.classList.toggle("menuButtonDisplay");
}

function dropdownMenuFunctionality(whichMenu, a, b, c, d, e) {
	if (whichMenu === "features") {
		featuresList.classList.toggle(a);

		featuresArrowDown.classList.toggle(b);
		featuresArrowUp.classList.toggle(b);

		setTimeout(function() {
			featuresList.classList.toggle(c);
		}, d);
	}
	else {
		companyList.classList.toggle(a);

		companyArrowDown.classList.toggle(b);
		companyArrowUp.classList.toggle(b);

		setTimeout(function() {
			companyList.classList.toggle(c);
		}, d);
	}
}

function dropdownDesktopMenuFunctionality(whichMenu, a, b, c, d, e) {
	if (whichMenu === "features") {
		featuresDesktopList.classList.toggle(a);

		featuresDesktopArrowDown.classList.toggle(b);
		featuresDesktopArrowUp.classList.toggle(b);
		featuresDesktopArrowUp.classList.toggle(c);
		featuresText.classList.toggle(c);

		setTimeout(function() {
			featuresDesktopList.classList.toggle(d);
		}, e);
	}
	else {
		companyDesktopList.classList.toggle(a);

		companyDesktopArrowDown.classList.toggle(b);
		companyDesktopArrowUp.classList.toggle(b);
		companyDesktopArrowUp.classList.toggle(c);
		companyText.classList.toggle(c);
		setTimeout(function() {
			companyDesktopList.classList.toggle(d);
		}, e);
	}
}
