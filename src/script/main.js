const navBar = document.querySelector(".nav__primary");
const navLinks = navBar.querySelectorAll("a");
const hamBuggerMenu = document.querySelector(".mobileNav");
const hamBuggerBtn = document.querySelector(".mobileNav__burger");
const listItems = document.querySelectorAll(".nav__listItem");
const pageLists = document.querySelector(".page");

navLinks.forEach((link) => {
	link.addEventListener("click", function () {
		navLinks.forEach((nav) => nav.classList.remove("active"));

		this.classList.add("active");
	});
});

hamBuggerMenu.addEventListener("click", () => {
	const visibility = navBar.getAttribute("displayMobileNav");

	if (visibility === "false") {
		navBar.setAttribute("displayMobileNav", true);
		hamBuggerBtn.setAttribute("aria-expanded", true);
		for (i = 0; i < listItems.length; i++) {
			listItems[i].setAttribute("listItem", true);
		}
	} else {
		navBar.setAttribute("displayMobileNav", false);
		hamBuggerBtn.setAttribute("aria-expanded", false);
		listItems.forEach((listItem) =>
			listItem.setAttribute("listItem", false)
		);
	}
});

pageLists.addEventListener("click", () => {
	const element = pageLists.parentNode;
	element.classList.toggle("open");
});
