const btnSi = document.getElementById("yes");
const btnNo = document.getElementById("no");

const SomosNovios = () => {
  alert("💞Ahora Somos Novios💞");
  alert("😱Nuestra boda Es Mañana😱");
  location.href = "https://youtu.be/am1_JLFDFMw?t=19";
};

const evitar = () => {
  btnNo.style.position = "absolute";
  btnNo.style.top = Math.random() * 100 + "%";
  btnNo.style.left = Math.random() * 100 + "%";
};

btnSi.addEventListener("click", SomosNovios);
btnNo.addEventListener("mouseover", evitar);
