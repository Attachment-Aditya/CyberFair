// main.js

























// context menu
// right click
window.addEventListener('contextmenu', e => {
	e.preventDefault();

	let context_menu = document.getElementById('contextmenu');
	context_menu.innerHTML = `
		<i class="fas fa-sync-alt" onclick="location.reload();"></i>
		<i class="fas fa-print" onclick="print_document();"></i>
	`;

	contextmenu.style.top = e.clientY;
	contextmenu.style.left = e.clientX;
	contextmenu.style.padding = '5px'
});

// left click
window.addEventListener('click', e => {
	context_menu = document.getElementById('contextmenu');
	context_menu.innerHTML = ``;

	contextmenu.style.top = e.clientY;
	contextmenu.style.left = e.clientX;
	contextmenu.style.padding = '0px';
});

// print document
function print_document() {
	context_menu = document.getElementById('contextmenu');
	context_menu.innerHTML = ``;

	contextmenu.style.padding = '0px';

	print();
}

























// navigation
// navigation elements
inp = document.getElementById("in");
out = document.getElementById("out");

// navigation options
var vd = {
	1: 'Home',
	2: 'History',
	3: "Markets",
	4: "COVID Impact",
	5: "Normal Situation in Markets",
	6: 'Credits'
}
// pre-definations
inp.max = Object.keys(vd).length;
out.innerHTML = vd[inp.value];

// function
inp.oninput = () => {
	out.innerHTML = vd[inp.value];
	switch_page(out.innerHTML);
}

























// contents
// home
home = `
	<div class="hd">
		<h1>
			Chandni Chowk!
		</h1>
	</div>
`;

// history
history_page = `
	<div class="history">
		<h1><em>History</em></h1>
		<br><br>&lt;Content under final checks and correction, will be added really soon.&gt;
	</div>
`;

// markets
markets = `
	<div class="markets">
		<h1><em>Markets</em></h1>
		<br><br>&lt;Content will be arriving soon.&gt;
	</div>
`;

// covid impact
covid_impact = `
	<div class="covid">
		<h1><em>COVID19 Impact</em></h1>
		<br><br>&lt;Content will be arriving soon.&gt;
	</div>
`;

// normal status
normal_conditions = `
	<div class="normal-market">
		<h1><em>Economy And Market In Normal Situations</em></h1>
		<br><br>&lt;Content will be arriving soon.&gt;
	</div>
`;

// credits
credits = `
	<div class="credits">
		<h1><em>Credits</em></h1>
		<br><br>&lt;Credits, Experiences and Bibliography will be added soon&gt;
	</div>
`;

























// switch pages
// function
function switch_page(page_name) {
	const content = document.getElementById("--content");

	key_page = {
		"home" : home,
		"history" : history_page,
		"credits" : credits,
		"markets" : markets,
		"covid impact" : covid_impact,
		"normal situation in markets" : normal_conditions
	};

	page_data = key_page[String(page_name.toLowerCase())];

	content.innerHTML = page_data;
}

// default
switch_page("home");

