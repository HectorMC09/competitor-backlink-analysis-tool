function encriptar() {
    var texto = document.querySelector("#textoUsuario").value;

    if (!validarTexto(texto)) {
        mostrarAdvertencia();
        return;
    }

    var textoCifrado = texto.replace(/e/gi, "enter")
                            .replace(/i/gi, "imes")
                            .replace(/a/gi, "ai")
                            .replace(/o/gi, "ober")
                            .replace(/u/gi, "ufat");
    document.querySelector("#resultado").textContent = textoCifrado;
}

function desencriptar() {
    var texto = document.querySelector("#textoUsuario").value;

    if (!validarTexto(texto)) {
        mostrarAdvertencia();
        return;
    }

    var textoCifrado = texto.replace(/enter/gi, "e")
                            .replace(/imes/gi, "i")
                            .replace(/ai/gi, "a")
                            .replace(/ober/gi, "o")
                            .replace(/ufat/gi, "u");
    document.querySelector("#resultado").textContent = textoCifrado;
}

function validarTexto(texto) {
    var regex = /^[a-z\s]*$/;
    return regex.test(texto);
}

function mostrarAdvertencia() {
    alert("Por favor, ingrese solo letras minúsculas sin acentos.");
}

function copiarAlPortapapeles() {
    var contenido = document.querySelector("#resultado").textContent;
    navigator.clipboard.writeText(contenido)
        .then(() => {
            alert("Texto copiado al portapapeles");
        })
        .catch(err => {
            console.log('Error al copiar al portapapeles', err);
        });
}

var botonEncriptar = document.querySelector("#btn-encriptar");
botonEncriptar.onclick = encriptar;

var botonDesencriptar = document.querySelector("#btn-desencriptar");
botonDesencriptar.onclick = desencriptar;

var botonCopiar = document.querySelector("#btn-copiar");
botonCopiar.onclick = copiarAlPortapapeles;
