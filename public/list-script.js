function modal(parent) {
	console.log(parent);
	const title = parent.getElementsByClassName("card-title")[0];
	const description = parent.getElementsByClassName("card-text")[0];
	let tags = parent.getElementsByClassName("tags")[0];
	const linkKontak = parent.getElementsByClassName("link")[0];
	const username = parent.getElementsByClassName("user")[0];
	tags = tags.innerHTML.split(" ");
	const modalTitle = document.getElementById("projectModalLabel"); 
	const modalDescription = document.getElementById("projectModalDesc");
	const tagList = document.getElementById("tagList"); 
	const userNameModal = document.getElementById("userNameModal");
	const projectModalContact = document.getElementById("projectModalContact");
	
	modalTitle.innerHTML = title.innerHTML;
	modalDescription.innerHTML = description.innerHTML;
	userNameModal.innerHTML = username.innerHTML;
	projectModalContact.setAttribute("href", linkKontak.innerHTML);
	for(i in tags) {
		const div = document.createElement("div");
		div.setAttribute("class", "tag");
		div.innerHTML = tags[i];
		tagList.append(div);
	}
}

$("#projectModal").on("hidden.bs.modal", () => {
    const tagList = document.getElementById("tagList");
    while(tagList.lastElementChild) {
   		tagList.removeChild(tagList.lastElementChild);
 	}
});

const searchBar = document.getElementById("searchBar");
const cardText = document.getElementsByClassName("card-text");
const cardTitle = document.getElementsByClassName("post-title");
const cardTags = document.getElementsByClassName("tags");
const cardHarga = document.getElementsByClassName("card-footer");
const cards = document.getElementsByClassName("card");
searchBar.addEventListener("keyup", () => {

	if(searchBar.value != "") {
		for(i in cards) {
			let searched = cardText[i].innerHTML.toLowerCase() + cardTags[i].innerHTML.toLowerCase() + cardHarga[i].innerHTML + cardTitle[i].innerHTML.toLowerCase();
			searched = searched.replace(/\s/g, '');
			searched = searched.replace('.', '');
			console.log(cardTitle[i]);
			let keyword = searchBar.value.toLowerCase();
			keyword = keyword.replace(/\s/g, '');
			if(searched.includes(keyword)) {
				cards[i].setAttribute("class", "card mx-auto");
				
			}
			else {
				if(cardText[i].innerHTML.toLowerCase() != (searchBar.value.toLowerCase())) {
					cards[i].setAttribute("class", "card d-none");
				}
			}
		}
	} else {
		for(i in cards) {
			//console.log(cards[i]);
			cards[i].setAttribute("class", "card mx-auto");
		}
	}
});

const filterBtn = document.getElementById("filterBtn");
const filterCheck = document.getElementsByName("filterCheck");
const otherTag = document.getElementById("otherTag");
const otherTagCheck = document.getElementById("otherTagCheck");

otherTagCheck.addEventListener("click", () => {
	otherTagCheck.value = otherTag.value;
});

otherTag.addEventListener("keyup", () => {
	otherTagCheck.value = otherTag.value;
});

filterBtn.addEventListener("click", () => {
	let checkedBox = [];
	let search = "";
	const minHargaFilter = document.getElementById("minHargaFilter");
	const maxHargaFilter = document.getElementById("maxHargaFilter");
	for(i in filterCheck) {
		if(filterCheck[i].checked) { 
			checkedBox.push(filterCheck[i].value.toLowerCase()); 
		}
	}
	console.log(checkedBox.length + " " + minHargaFilter.value + " " + maxHargaFilter.value);
	if(checkedBox.length == 0 && minHargaFilter.value == "" && maxHargaFilter.value == "") {
		for(j in cards) {
			cards[j].setAttribute("class", "card mx-auto");		
		}
	}
	else {
		for(i in cards) {
			let searched = cardText[i].innerHTML.toLowerCase() + cardTags[i].innerHTML.toLowerCase();
			searched = searched.replace(/\s/g, '');
			for(j in checkedBox) {
				if(searched.includes(checkedBox[j])) {
					let harga = cardHarga[i].innerHTML;
					harga = harga.replace(".", "");
					harga = harga.replace("Rp", "");
					cards[i].setAttribute("class", "card mx-auto");
					console.log(minHargaFilter.value + " " + harga);
					if(parseInt(minHargaFilter.value) > parseInt(harga) && minHargaFilter.value !="") {
						console.log("hii");
						cards[i].setAttribute("class", "card d-none");
					}
					if(parseInt(maxHargaFilter.value) < parseInt(harga) && maxHargaFilter.value !="") {
						console.log("hrllo");
						cards[i].setAttribute("class", "card d-none");
					}
				}
				else {
					cards[i].setAttribute("class", "card d-none");
				}
			}
			if(checkedBox.length == 0) {
					let harga = cardHarga[i].innerHTML;
					harga = harga.replace(".", "");
					harga = harga.replace("Rp", "");
					console.log(harga);
					if(parseInt(minHargaFilter.value) > parseInt(harga) && minHargaFilter.value !="") {
						console.log("hii");
						cards[i].setAttribute("class", "card d-none");
					} else if(parseInt(minHargaFilter.value) <= parseInt(harga) && minHargaFilter.value !="") {
						cards[i].setAttribute("class", "card mx-auto");
					}
					if(parseInt(maxHargaFilter.value) < parseInt(harga) && maxHargaFilter.value !="") {
						console.log("hrllo");
						cards[i].setAttribute("class", "card d-none");
					} else if(parseInt(maxHargaFilter.value) >= parseInt(harga) && maxHargaFilter.value !="") {
						cards[i].setAttribute("class", "card mx-auto");
					}
			}
			
		}
	}
});

