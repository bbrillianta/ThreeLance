const login = localStorage.getItem("login");
if(login != "null") {
	const signinNav = document.getElementById("signinNav");
	const joinNav = document.getElementById("joinNav");
	signinNav.remove();
	joinNav.remove();

	const ulNavbar = document.getElementById("ulNavbar");
	const li = document.createElement("li");
	const a = document.createElement("a");
	li.setAttribute("class", "nav-item active");
	a.setAttribute("class", "nav-link mr-4");
	a.setAttribute("href", "index.html");
	a.setAttribute("id", "logout");
	a.innerHTML = "Logout";
	li.append(a);
	ulNavbar.append(li);

	const logout = document.getElementById("logout");
	logout.addEventListener("click", () => {
		localStorage.setItem("login", null);
	});
}

