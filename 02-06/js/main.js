var html = document.getElementById("html");
var html2 = document.getElementById("html2");

var kaire = document.getElementById("kaire");
var desine = document.getElementById("desine");
var paslpeti = document.getElementById("paslepti");
var apacia = document.getElementById("apacia");
var atstatyti = document.getElementById("atstatyti");

var sec = document.getElementById("sec");

html2.style.display = "none";

kaire.addEventListener("click", function () {
    html.style.display = "block";
    html.style.float = "left";
    html2.style.display = "none";
})

desine.addEventListener("click", function () {
    html.style.display = "block";
    html.style.float = "right";
    html2.style.display = "none";
})

paslepti.addEventListener("click", function () {
    html.style.display = "none";
    html2.style.display = "none";
})


apacia.addEventListener("click", function () {
    html.style.display = "none";
    html2.style.display = "block";
})

atstatyti.addEventListener("click", function () {
    html.style.display = "inline";
    html.style.float = "none";
    html2.style.display = "none";

})
