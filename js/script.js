let loadFile = function (event) {
    let output = document.getElementById("gallery");
    let file = document.getElementById("file");
    let src = URL.createObjectURL(file.files[0]);
    let form = document.getElementById("form");
    let filters = document.getElementById("filters");
    form.classList.add("d-none");
    filters.classList.remove("d-none");

    var e = document.createElement('div');
    e.innerHTML = "<img id='imgupload' src='" + src + "'></div>";
    while (e.firstChild) {
        output.appendChild(e.firstChild);
    }
};

//funzione per aggiungere il filtro grayscale all'immagine caricata
function grayscaleFilter() {
    var image = document.getElementById("imgupload");
    var range = document.getElementById("grayscale")
    image.style.WebkitFilter = "grayscale(" + range.value * 10 + "%)";
    image.style.filter = "grayscale(" + range.value * 10 + "%)";
}

//funzione per aggiungere il filtro saturate all'immagine caricata
function saturateFilter() {
    var image = document.getElementById("imgupload");
    var range = document.getElementById("saturate")
    image.style.WebkitFilter = "saturate(" + range.value * 10 + "%)";
    image.style.filter = "saturate(" + range.value * 10 + "%)";
}

//funzione per aggiungere il filtro sepia all'immagine caricata
function sepiaFilter() {
    var image = document.getElementById("imgupload");
    var range = document.getElementById("sepia")
    image.style.WebkitFilter = "sepia(" + range.value * 10 + "%)";
    image.style.filter = "sepia(" + range.value * 10 + "%)";
}

//funzione per aggiungere il filtro invert all'immagine caricata
function invertFilter() {
    var image = document.getElementById("imgupload");
    var range = document.getElementById("invert")
    image.style.WebkitFilter = "invert(" + range.value * 10 + "%)";
    image.style.filter = "invert(" + range.value * 10 + "%)";
}

//funzione per aggiungere il filtro contrasto all'immagine caricata
function contrastFilter() {
    var image = document.getElementById("imgupload");
    var range = document.getElementById("contrast")
    image.style.WebkitFilter = "contrast(" + range.value * 10 + "%)";
    image.style.filter = "contrast(" + range.value * 10 + "%)";
}

//funzione per aggiungere il filtro brightness all'immagine caricata
function brightnessFilter() {
    var image = document.getElementById("imgupload");
    var range = document.getElementById("brightness")
    image.style.WebkitFilter = "brightness(" + range.value * 10 + "%)";
    image.style.filter = "brightness(" + range.value * 10 + "%)";
}

//funzione per aggiungere il filtro blur all'immagine caricata
function blurFilter() {
    var image = document.getElementById("imgupload");
    var range = document.getElementById("blur")
    image.style.WebkitFilter = "blur(" + range.value + "px)";
    image.style.filter = "blur(" + range.value + "px)";
}

//funzione per aggiungere il filtro hue rotate all'immagine caricata
function huerotateFilter() {
    var image = document.getElementById("imgupload");
    var range = document.getElementById("hue-rotate")
    image.style.WebkitFilter = "hue-rotate(" + range.value * 10 + "deg)";
    image.style.filter = "hue-rotate(" + range.value * 10 + "deg)";
}
