var newTwitBtn = document.getElementById('btntwitter');
var newFaceBtn = document.getElementById('btnfacebook');
var newGoogleBtn = document.getElementById('btngoogle');
var newInstBtn = document.getElementById('btninstagram');
newTwitBtn.addEventListener("click", mytwit);
newFaceBtn.addEventListener("click", myface);
newGoogleBtn.addEventListener("click", mygoog);
newInstBtn.addEventListener("click", myins);

function mytwit() {
    window.open('https://twitter.com/?lang=pl', '_blank');
}
function myface() {
    window.open('https://facebook.com/?lang=pl', '_blank');
}
function mygoog() {
    window.open('https://google.com/?lang=pl', '_blank');
}
function myins() {
    window.open('https://instagram.com/?hl=pl', '_blank');
}