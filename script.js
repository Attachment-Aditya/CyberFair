
window.addEventListener('contextmenu', e => {
	e.preventDefault();

	let context_menu = document.getElementById('contextmenu');
	context_menu.innerHTML = `
	<i class="fas fa-sync-alt" onclick="location.reload();"></i>
	<i class="fas fa-print" onclick="print();"></i>
	`;

	contextmenu.style.top = e.clientY;
	contextmenu.style.left = e.clientX;
	contextmenu.style.padding = '5px'
});

window.addEventListener('click', e => {
	context_menu = document.getElementById('contextmenu');
	context_menu.innerHTML = ``;

	contextmenu.style.top = e.clientY;
	contextmenu.style.left = e.clientX;
	contextmenu.style.padding = '0px';
});

function goto_top() {
	scrollTo(0, 0)
}

function crd(loc) {
  if (loc == "team") {
    window.open('team');
  } else if (loc == "serv") {
    window.open('services');
  } else {
    window.open('bibliography');
  }
}

function loc(l) {
  if (l == "cred") {
    window.open('credits');
  }
}

function load_footer() {
  let ft = `
    <p>
			This is footer. Here we will be having links to sub heading and other important linked connections.
		</p>
		<br>
		<p id="links">
			<a href="credits">Credits</a>
			<br><a></a>
			<br><a></a>
			<br><a></a>
			<br><a></a>
			<br><a></a>
			<br><a></a>
			<br><a></a>
			<br><a></a>
			<br><a></a>
			<br><a></a>
			<br><a></a>
			<br><a></a>
			<br><a></a>
			<br><a></a>
			<br><a></a>
		</p>
		<br>
		<p>
			This example preview template was created by Aditya. Source code is available in <a href="https://github.com/attachment-aditya/CyberFair">GitHub</a>.
		</p>
  `;

  let footer = document.getElementById('foot');
  footer.innerHTML = ft;
}

load_footer();

