const modalElement = document.getElementById("indexModal");
const modalTitle = document.getElementById("indexModalLabel");
const indexBody = document.getElementById("indexModalDesc");
const modalTable = document.getElementById("modalTable");
const namaModal = document.getElementById("namaModal");
const topikModal = document.getElementById("topikModal");
const tanggalModal = document.getElementById("tanggalModal");
const waktuModal = document.getElementById("waktuModal");
const mediaModal = document.getElementById("mediaModal");
const hargaModal = document.getElementById("hargaModal");
const daftarBtn = document.getElementById("daftarBtn");

function modal(element) {
	const img = element.getElementsByClassName("card-img-top")[0].cloneNode(true);
	const title = element.getElementsByClassName("card-title")[0]; 
	const tanggal = element.getElementsByClassName("tanggalW")[0];
	const waktu = element.getElementsByClassName("waktuW")[0];
	const harga = element.getElementsByClassName("hargaW")[0];
	const link = element.getElementsByClassName("linkW")[0];
	const media = element.getElementsByClassName("media")[0];
	console.log(link);
	img.setAttribute("id", "imgModal");
	indexBody.insertBefore(img, modalTable);
	modalTitle.innerHTML = title.innerHTML;
	namaModal.innerHTML = title.innerHTML;
	tanggalModal.innerHTML = tanggal.innerHTML;
	waktuModal.innerHTML = waktu.innerHTML;
	hargaModal.innerHTML = harga.innerHTML;
	mediaModal.innerHTML = media.innerHTML;
	daftarBtn.setAttribute("href", link.innerHTML);
}

$("#indexModal").on("hidden.bs.modal", () => {
    const img = document.getElementById("imgModal");
    img.remove();
});

