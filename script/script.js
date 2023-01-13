const buttonCrip = document.querySelector(".button--crip");
const buttonDescrip = document.querySelector(".button--descrip");
let textMsg = document.getElementsByClassName("msg--text");
let textareaInput;

const descript = ["e", "i", "a", "o", "u"];
const cript = ["enter", "imes", "ai", "ober", "ufat"];

buttonCrip.addEventListener("click", () => {
    textareaInput = document.querySelector("#textarea").value;
    cripText(textareaInput);
});

buttonDescrip.addEventListener("click", () => {
    textareaInput = document.querySelector("#textarea").value;
    descripText(textareaInput);
});

function cripText(text) {
    for (let i = 0; i < descript.length; i++)
        text = text.replaceAll(descript[i], cript[i]);
    console.log(text);
}

function descripText(text) {
    for (let i = 0; i < cript.length; i++)
        text = text.replaceAll(cript[i], descript[i]);
    console.log(text);
}
