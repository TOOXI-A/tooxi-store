document.querySelectorAll(".btnDetail").forEach((item) => {
  item.addEventListener("click", (e) => {
    let parent = e.target.parentNode.parentNode;
    let gambar = parent.querySelector(".card-img-top").src;
    let harga = parent.querySelector(".harga").innerHTML;
    let judul = parent.querySelector(".card-text").innerHTML;
    let deskripsi = parent.querySelector(".deskripsi")
      ? parent.querySelector(".deskripsi").innerHTML
      : "<i>tidak ada informasi yang tersedia</i>";

    let tombolModal = document.querySelector(".btnmodal");
    tombolModal.click();

    document.querySelector(".modaltitle").innerHTML = judul;
    let image = document.createElement("img");
    image.src = gambar;
    image.classList.add("w-100");
    document.querySelector(".modalimage").innerHTML = "";
    document.querySelector(".modalimage").appendChild(image);
    document.querySelector(".modaldeskripsi").innerHTML = deskripsi;
    document.querySelector(".modalharga").innerHTML = harga;

    const nohp = "6281234957358";
    let pesan =
      "https://api.whatsapp.com/send?phone=6281234957358&text= HELLO I AM BUYING YOUR PRODUCT";

    document.querySelector(".btnbeli").href = pesan;
  });
});
