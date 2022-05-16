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
const featuresDesktopArrowDown = document.querySelector(
	".featuresDesktopArrowDown"
);
const featuresDesktopArrowUp = document.querySelector(
	".featuresDesktopArrowUp"
);
const companyDesktopArrowDown = document.querySelector(
	".companyDesktopArrowDown"
);
const companyDesktopArrowUp = document.querySelector(".companyDesktopArrowUp");
const featuresDesktopLink = document.querySelector(
	".featuresDesktopDropdownLink"
);
const featuresDesktopList = document.querySelector(".featuresDesktopList");
const companyDesktopLink = document.querySelector(
	".companyDesktopDropdownLink"
);
const companyDesktopList = document.querySelector(".companyDesktopList");
const featuresText = document.querySelector(".featuresText");
const companyText = document.querySelector(".companyText");

menuOpen.addEventListener("click", function() {
	hamburgerMenu.classList.toggle("hamburgerMenuOpen");
	menuOpen.classList.toggle("menuButtonDisplay");
});

menuClose.addEventListener("click", function() {
	hamburgerMenu.classList.toggle("hamburgerMenuOpen");
	menuOpen.classList.toggle("menuButtonDisplay");
});

let dropdown1 = true;

featuresLink.addEventListener("click", function() {
	if (dropdown1) {
		featuresList.classList.toggle("displayBlock");

		featuresArrowDown.classList.toggle("displayNone");
		featuresArrowUp.classList.toggle("displayNone");

		setTimeout(function() {
			featuresList.classList.toggle("listFeaturesDisplay");
		}, 20);
	}
	else {
		featuresList.classList.toggle("listFeaturesDisplay");

		featuresArrowDown.classList.toggle("displayNone");
		featuresArrowUp.classList.toggle("displayNone");
		setTimeout(function() {
			featuresList.classList.toggle("displayBlock");
		}, 800);
	}
	dropdown1 = !dropdown1;
});

/////////////////////////////////////////////////////////////////
// featuresDeskTopDropdownLink functionality
/////////////////////////////////////////////////////////////////
let desktopDropdown1 = true;
featuresDesktopLink.addEventListener("click", function() {
	if (desktopDropdown1) {
		featuresDesktopList.classList.toggle("displayBlock");

		featuresDesktopArrowDown.classList.toggle("displayNone");
		featuresDesktopArrowUp.classList.toggle("displayNone");
		featuresDesktopArrowUp.classList.toggle("highlightBlack");
		featuresText.classList.toggle("highlightBlack");

		setTimeout(function() {
			featuresDesktopList.classList.toggle("listFeaturesDesktopDisplay");
		}, 20);
	}
	else {
		featuresDesktopList.classList.toggle("listFeaturesDesktopDisplay");

		featuresDesktopArrowDown.classList.toggle("displayNone");
		featuresDesktopArrowUp.classList.toggle("displayNone");
		featuresDesktopArrowUp.classList.toggle("highlightBlack");
		featuresText.classList.toggle("highlightBlack");
		setTimeout(function() {
			featuresDesktopList.classList.toggle("displayBlock");
		}, 800);
	}
	desktopDropdown1 = !desktopDropdown1;
});

let dropdown2 = true;

companyLink.addEventListener("click", function() {
	if (dropdown2) {
		companyList.classList.toggle("displayBlock");
		companyArrowDown.classList.toggle("displayNone");
		companyArrowUp.classList.toggle("displayNone");
		setTimeout(function() {
			companyList.classList.toggle("listCompanyDisplay");
		}, 20);
	}
	else {
		companyList.classList.toggle("listCompanyDisplay");
		companyArrowDown.classList.toggle("displayNone");
		companyArrowUp.classList.toggle("displayNone");
		setTimeout(function() {
			companyList.classList.toggle("displayBlock");
		}, 800);
	}
	dropdown2 = !dropdown2;
});

/////////////////////////////////////////////////////////////////
// featuresDeskTopDropdownLink functionality
/////////////////////////////////////////////////////////////////
let desktopDropdown2 = true;
companyDesktopLink.addEventListener("click", function() {
	if (desktopDropdown2) {
		companyDesktopList.classList.toggle("displayBlock");
		companyDesktopArrowDown.classList.toggle("displayNone");
		companyDesktopArrowUp.classList.toggle("displayNone");
		companyDesktopArrowUp.classList.toggle("highlightBlack");
		companyText.classList.toggle("highlightBlack");
		setTimeout(function() {
			companyDesktopList.classList.toggle("listCompanyDesktopDisplay");
		}, 20);
	}
	else {
		companyDesktopList.classList.toggle("listCompanyDesktopDisplay");
		companyDesktopArrowDown.classList.toggle("displayNone");
		companyDesktopArrowUp.classList.toggle("displayNone");
		companyDesktopArrowUp.classList.toggle("highlightBlack");
		companyText.classList.toggle("highlightBlack");
		setTimeout(function() {
			companyDesktopList.classList.toggle("displayBlock");
		}, 800);
	}
	desktopDropdown2 = !desktopDropdown2;
});
