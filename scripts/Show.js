import Epocas from "./Epocas.js";
var text = "";
var timelineList = document.getElementById('timelineList');

Epocas.forEach((data, index) => {
    text +=
        '<li>' +
        '<div>' +
        '<time> Name : ' + data.Nombre + '</time>' +
        '<p>' + data.Inicio + " - " + data.Fin + '<br>' + data.Caracterisiticas + '</p>' +
        '</div>' +
        '</li>\n';
});
console.log(text)
timelineList.innerHTML = text;