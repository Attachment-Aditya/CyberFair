
window.addEventListener('contextmenu', e => {
	e.preventDefault();

	let context_menu = document.getElementById('contextmenu');
	context_menu.innerHTML = `
	<i class="fas fa-sync-alt" onclick="location.reload();"></i>
	<i class="fas fa-print" onclick="p();"></i>
	`;

	contextmenu.style.top = e.clientY;
	contextmenu.style.left = e.clientX;
	contextmenu.style.padding = '5px'
});

function p() {
  context_menu = document.getElementById('contextmenu');
	context_menu.innerHTML = ``;

	contextmenu.style.padding = '0px';
  
  print();
}

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
  } else if (l == "abot") {
    window.open('about');
  }
}

function load_footer() {
  let ft = `
    <p>
			This is footer. Here we will be having links to sub heading and other important linked connections.
		</p>
		<br>
		<p id="links">
			<a href="https://attachment-aditya.github.io/CyberFair">Home</a>
			<br><a href="credits">Credits</a>
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

function cred_team(photo, name, grade, group, role) {
  let c = `
    <div class="card">
      <div class="photo">
        <img src="../../Photos/${photo}">
      </div>
      <div class="info">
        <div class="name">
          ${name}
        </div><br>
        <div class="grade">
          ${grade}
        </div><br>
        <div class="role">
          ${group}<br>${role}
        </div>
      </div>
    </div>
  `;

  let con = document.getElementById("content");

  con.innerHTML = con.innerHTML + c;
}

cpage = false;
var href_arr = location.href.split('/');

for (let s in location.href.split('/')) {
  let u = location.href.split('/');
  if (u[s] == 'credits') {
    if (u[Number(s)+1] == 'team') {
      cpage = true;
    }
  }
}

if ( cpage ) {
  cred_team('ADITYA.jpeg', 'Aditya Prasad Dash', 'XI S1', 'Technical Team', 'Web Desginer');
  cred_team('ANANYA.jpeg', 'Ananya', '--', '--', '--');
  cred_team('BHUMIKA.jpg', 'Bhumika', '--', '--', '--');
  cred_team('ISHAAN.jpg', 'Ishaan Sharma', 'XI S1', 'Technical Team', 'Desginer and Artist');
  cred_team('LIYA.jpg', 'Liya', '--', '--', '--');
  cred_team('MAULIK.jpeg', 'Maulik', '--', 'Technical Team', 'Presentation And Web Desginer');
  cred_team('SHAGUN.jpeg', 'Shagun', '--', '--', '--');
  cred_team('SHREY.jpeg', 'Shrey Sharma', '--', 'Technical Team', 'Project Manager');
  cred_team('TANISHA.jpg', 'Tanisha', '--', '--', '--');
}

