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
	document.getElementById("si-tab-holder").children[0].click()
}

{
	let fillerFooter = document.querySelector("#main-footer").cloneNode(true);
	fillerFooter.id="filler-footer";
	document.body.append(fillerFooter);
}
