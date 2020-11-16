const retrivedObject = localStorage.getItem("marketing");
const web = JSON.parse(retrivedObject);
const nodePlace = document.getElementById("nodePlace");
const posts = web.user.post;

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

for(i in posts) {
	const cardClone = document.getElementById("cardExample").cloneNode(true);
	const titleClone = cardClone.getElementsByClassName("post-title")[0];
	const textClone = cardClone.getElementsByClassName("card-text")[0];
	const hargaClone = cardClone.getElementsByClassName("card-footer")[0];
	const linkClone = cardClone.getElementsByClassName("link")[0];
	const userClone = cardClone.getElementsByClassName("user")[0];
	let tagsClone = cardClone.getElementsByClassName("tags")[0];
	titleClone.innerHTML = posts[i].nama;
	textClone.innerHTML = posts[i].desc;
	hargaClone.innerHTML = `Rp.${posts[i].harga}`;
	linkClone.innerHTML = posts[i].urlKontak;
	userClone.innerHTML = web.user.name;
	tagsClone.innerHTML = "";

	for(j in posts[i].tags) {
		tagsClone.innerHTML += `${posts[i].tags[j]} `;
	}
	tagsClone.innerHTML = tagsClone.innerHTML.trim();
	insertAfter(nodePlace, cardClone);
}