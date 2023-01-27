// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

const textareaInput = document.querySelector("#textarea");
const textareaMsg = document.querySelector("#textarea--show");

const buttonCrip = document.querySelector(".button--crip");
const buttonDescrip = document.querySelector(".button--descrip");
const buttonCopy = document.querySelector(".button--copy");

function criptografar(stringTexto) {
  let matriz = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringTexto = stringTexto.toLowerCase();

  for (let i = 0; i < matriz.length; i++) {
    if (stringTexto.includes(matriz[i][0])) {
      stringTexto = stringTexto.replaceAll(matriz[i][0], matriz[i][1]);
    }
  }
  return stringTexto;
}

buttonCrip.addEventListener("click", () => {
  const textoCrip = criptografar(textareaInput.value);
  textareaMsg.value = textoCrip;
  textareaInput.value = "";
});

function descriptografar(stringTexto) {
  let matriz = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringTexto = stringTexto.toLowerCase();

  for (let i = 0; i < matriz.length; i++) {
    if (stringTexto.includes(matriz[i][1])) {
      stringTexto = stringTexto.replaceAll(matriz[i][1], matriz[i][0]);
    }
  }
  return stringTexto;
}

buttonDescrip.addEventListener("click", () => {
  const textoDescrip = descriptografar(textareaInput.value);
  textareaMsg.value = textoDescrip;
  textareaInput.value = "";
});

buttonCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(textareaMsg.value);
});
