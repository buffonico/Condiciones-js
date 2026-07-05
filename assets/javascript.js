/*Imagen*/

const imagen = document.querySelector("img")

imagen.addEventListener("click", function () {
    if (imagen.classList.contains("borde-activo")) {
        imagen.classList.remove("borde-activo")
    } else {
        imagen.classList.add("borde-activo")
    }
})

/*Stickers*/

let stickers = document.querySelector("#result");
function reviewStickerAmount() {
    let value1 = document.querySelector("#cant1").value;
    let value2 = document.querySelector("#cant2").value;
    let value3 = document.querySelector("#cant3").value;
    let total = Number(value1) + Number(value2) + Number(value3);

    if (total <= 10) {
        stickers.innerHTML = "Llevas " + total + " stickers";
    } else {
        stickers.innerHTML = "Llevas " + total + " Stickers, Son demasiados";
    }
}

/*Password*/

function contraseña() {
    const pass1 = document.querySelector("#pass1").value;
    const pass2 = document.querySelector("#pass2").value;
    const pass3 = document.querySelector("#pass3").value;
    const valida = pass1 + pass2 + pass3;
    const resultado = document.querySelector("#ingresada");

    if (valida == "911") {
        resultado.innerHTML = "Contraseña 1 correcta";
        resultado.style.color = "blue";
        
    } else if (valida == "714") {
        resultado.innerHTML = "Contraseña 2 correcta";
        resultado.style.color = "blue";
        
    } else {
        resultado.innerHTML = "¡Contraseña incorrecta!";
        resultado.style.color = "red";
    }
}

