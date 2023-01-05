const buttonCrip = window.document.getElementsByClassName("button--crip");
const buttonDescrip = window.document.getElementsByClassName("button--descrip");
let tagtest = window.document.getElementsByTagName("h2");

buttonCrip.addEventListener("click", function() {
    text();
});

function text () {
    let inputUser = window.document.getElementsByTagName("textarea");
    tagtest().item.innerHTML = inputUser;

}