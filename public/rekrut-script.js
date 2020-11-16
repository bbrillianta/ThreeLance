if(localStorage.getItem("login") == "null") {
	window.location.href = "signin.html";
}

//getButton dan buat id baru;
const tambahKontak = document.getElementById("tambahKontakBtn");
const kurangKontak = document.getElementById("kurangKontakBtn");
const tambahTag = document.getElementById("tambahTagBtn");
const kurangTag = document.getElementById("kurangTagBtn");
let newIDKontak = 1;
let newIDTag = 1;

function toggleKurangBtn(idCount, button) {
	console.log(button);
	if(idCount > 1) {
		button.setAttribute("class", "btn");
	}
	else {
		button.setAttribute("class", "d-none btn");
	}
}

// //saat tambah kontak diklik
// tambahKontak.addEventListener("click", () => {
// 	const kontakElement = document.getElementById("inputKontakProject1").cloneNode(true);
// 	const place = document.getElementById("kontakPlace");
// 	const urlInput = kontakElement.children[0];
// 	newIDKontak++;
	
// 	kontakElement.setAttribute("id", `inputKontakProject${newIDKontak}`);
// 	kontakElement.setAttribute("class", "container row mt-3 inputKontakProject");
// 	urlInput.value = "";
// 	urlInput.setAttribute("placeholder", "URL Kontak Cadangan");

// 	place.insertBefore(kontakElement, tambahKontak);
// 	toggleKurangBtn(newIDKontak, kurangKontak);
// });

// //saat kurangi kontak diklik
// kurangKontak.addEventListener("click", () => {
// 	const kontakElement = document.getElementById(`inputKontakProject${newIDKontak}`);
// 	kontakElement.remove();
// 	newIDKontak--;
// 	toggleKurangBtn(newIDKontak, kurangKontak);
// });


//saat tambah tag diklik
tambahTag.addEventListener("click", () => {
	const inputElement = document.getElementById("inputTagProject1").cloneNode(true);
	const place = document.getElementById("tagPlace");
	newIDTag++;

	inputElement.setAttribute("id", `inputTagProject${newIDTag}`);
	inputElement.setAttribute("class", "tag_project mt-3 form-control");
	inputElement.value = "";

	place.insertBefore(inputElement, tambahTag);
	toggleKurangBtn(newIDTag, kurangTag);
});

kurangTag.addEventListener("click", () => {
	const inputElement = document.getElementById(`inputTagProject${newIDTag}`);
	inputElement.remove();
	newIDTag--;
	toggleKurangBtn(newIDTag, kurangTag);
});



//Isian form
const submitBtn = document.getElementById("submitBtn");
const user = localStorage.getItem("login");

submitBtn.addEventListener("click", () => {
	window.location.href = "list-project.html";
	let post = {
		"nama": "",
		"desc": "",
		"kontak": "",
		"urlKontak": "",
		"harga": "",
		"tags": []
	};
	const inputNamaProject = document.getElementById("inputNamaProject");
	const inputDeskripsiProject = document.getElementById("inputDeskripsiProject");
	const input_url_kontak = document.getElementById("input_url_kontak");
	const inputHargaProject = document.getElementById("inputHargaProject");
	const tag_project = document.getElementsByName("tag_project");
	const input_url_type = document.getElementById("input_url_type");
	post.nama = inputNamaProject.value;
	post.desc = inputDeskripsiProject.value;
	post.kontak = input_url_type.value;
	post.urlKontak = input_url_kontak.value;
	post.harga = inputHargaProject.value;
	for(i in tag_project) {
		if(tag_project[i].value != undefined && tag_project[i].value != null && tag_project[i].value != "") {
			post.tags.push(tag_project[i].value);
		}
	}
	console.log(post);
});

