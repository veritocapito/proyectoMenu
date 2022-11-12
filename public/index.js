var boton = document.getElementById("btn-random");
var txt = document.getElementById("txt");
var txt2 = document.getElementById("txt2");
var image = document.getElementById("image");

var decididor = (max, min) =>{
    return Math.round(Math.random() * (max - min) + min);
}

var menu = [
    document.getElementById("comida1").textContent,
    document.getElementById("comida2").textContent,
    document.getElementById("comida3").textContent,
    document.getElementById("comida4").textContent,
    document.getElementById("comida5".textContent),
    document.getElementById("comida6").textContent,
    document.getElementById("comida7").textContent,
    document.getElementById("comida8").textContent,
    document.getElementById("comida9").textContent,
    document.getElementById("comida10").textContent,
    document.getElementById("comida11").textContent,
    document.getElementById("comida12").textContent,
    document.getElementById("comida13").textContent,
    document.getElementById("comida14").textContent,
    document.getElementById("comida15").textContent,
    document.getElementById("comida16").textContent,
    document.getElementById("comida17").textContent,
    document.getElementById("comida18").textContent,
    document.getElementById("comida19").textContent,
    document.getElementById("comida20").textContent
]

boton.addEventListener("click", () => {
    image.src = "img/loading.gif"
    setTimeout( function (){
        var comidaRandom = decididor(19,1);
        txt.innerText ="Hoy te recomendamos comer "+ menu[comidaRandom];
        txt2.innerHTML ="Todo listo! Ya podes comunicarte con nosotros...";
        image.src="";
    }, 2000);
});

