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
