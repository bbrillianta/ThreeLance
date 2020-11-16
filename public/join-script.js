const joinBtn = document.getElementById("joinBtn");

joinBtn.addEventListener("click", () => {
	const username = document.getElementById("username");
	const email = document.getElementById("email");
	const password = document.getElementById("password");
	localStorage.setItem(username.value, password.value);
	localStorage.setItem(email.value, password.value);
});


