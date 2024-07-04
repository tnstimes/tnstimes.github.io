"use strict";
{
	let tabs = document.getElementsByTagName("si-tab")
	for (let tab of tabs) {
		tab.addEventListener("click", function(ev) {
			ev = ev ?? window.event;
			let clickedtab = ev.target;
			for (let tab2 of tabs) {
				tab2.classList.remove("active")
				document.getElementById(tab2.dataset.activates).classList.remove("active")
			}
			clickedtab.classList.add("active")
			document.getElementById(clickedtab.dataset.activates).classList.add("active")
		})
	}
	document.getElementById("si-tab-holder")?.children[0].click()
}

{
	let themes = ["originaltheme", "bluetheme", "redtheme"];
	const themeSuffix = "theme";
	let changeTheme = function(next=true) {
		let lsCTheme = localStorage.getItem("theme");
		let currentTheme = lsCTheme + themeSuffix;
		let ctIndex = themes.indexOf(currentTheme);
		if (ctIndex === -1) ctIndex = 0;
		currentTheme = themes[ctIndex];

		let ntIndex = next ? ((ctIndex + 1) % themes.length) : ctIndex;
		let newTheme = themes[ntIndex];

		let lsNTheme = newTheme.slice(0, -themeSuffix.length);
		localStorage.setItem("theme", lsNTheme);

		for (let i of themes) {
			if (i === newTheme) {
				document.body.classList.add(i);
			} else {
				document.body.classList.remove(i);
			};
		};
	};
	let themeBtn = document.createElement("button");
	themeBtn.id = "themeBtn";
	themeBtn.textContent = "Change theme";
	themeBtn.addEventListener("click", () => {changeTheme();});
	document.querySelector("#main-footer").prepend(themeBtn);

	changeTheme(false);
}

{
	let fillerFooter = document.querySelector("#main-footer").cloneNode(true);
	fillerFooter.id="filler-footer";
	document.body.append(fillerFooter);
}
