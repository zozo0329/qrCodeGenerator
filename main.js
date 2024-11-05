/* 
    https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=
*/

// const qrButton = document
//   .querySelector(".qr-btn button")
//   .addEventListener("click", function () {
//     const qrImage = document.querySelector(".qr-code img");
//     const qrText = document.querySelector("input");
//     const qrContainer = document.querySelector(".qr-code");
//     qrContainer.style.display = "block";
//     qrImage.src =
//       "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
//       qrText.value;
//     document
//       .querySelector(".qr-btn button")
//       .addEventListener("click", generateQRCode);
//     document
//       .querySelector("input")
//       .addEventListener("keypress", function (event) {
//         if (event.key === "Enter") {
//           generateQRCode();
//         }
//       });
//   });

function generateQRCode() {
  const qrImage = document.querySelector(".qr-code img");
  const qrText = document.querySelector("input");
  const qrContainer = document.querySelector(".qr-code");
  qrContainer.style.display = "block";
  qrImage.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    qrText.value;
}

document
  .querySelector(".qr-btn button")
  .addEventListener("click", generateQRCode);

document.querySelector("input").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    generateQRCode();
  }
});
