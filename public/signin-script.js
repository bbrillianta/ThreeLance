const signinBtn = document.getElementById("signinBtn");
const invalid = document.getElementById("invalid");

invalid.style.display = "none";
signinBtn.addEventListener("click", () => {
	const user = document.getElementById("key");
	const password = document.getElementById("password");
	const key = localStorage.getItem(user.value);
	console.log(key + " " + password);
	if(key == password.value) {
		localStorage.setItem("login", user.value);
		window.location.href = "index.html";
	} else {
		invalid.style.display = "block";
	}
})