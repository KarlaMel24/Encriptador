const texto = document.querySelector('.text-area');
const textoEncriptado = document.getElementById("texto-encriptado");
//const mensaje = document.querySelector("mensaje-contenedor-texto");
const botonCopiar = document.getElementById("copy");
const mensajeContenedorTexto = document.querySelector('.mensaje-contenedor-texto');
const imagen = document.querySelector('.mensaje-contenedor-imagen');
const contenedorTitulo = document.querySelector('.mensaje-contenedor-titulo');
const contenedorSubtitulo = document.querySelector('.mensaje-contenedor-subtitulo');

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

botonCopiar.style.display = 'none';

function encriptar(str_encriptada) {
    const matriz_codigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    str_encriptada = str_encriptada.toLowerCase();

    for (let i = 0; i < matriz_codigo.length; i++) {
        if (str_encriptada.includes(matriz_codigo[i][0])) {
            str_encriptada = str_encriptada.replaceAll(matriz_codigo[i][0], matriz_codigo[i][1]);
        }
    }

    return str_encriptada;
}

/*function btn_encriptar() {
    const texto_encriptado = encriptar(texto.value);
    mensaje.textContent = texto_encriptado;
}*/

function btn_encriptar() {
    const texto_encriptado = encriptar(texto.value);
    textoEncriptado.textContent = texto_encriptado;
    botonCopiar.style.display = 'block';
    mensajeContenedorTexto.style.display = 'block';
    imagen.style.display = 'none';
    contenedorTitulo.style.display = 'none';
    contenedorSubtitulo.style.display = 'none';
}


function desencriptar(str_desencriptada){
    const matriz_codigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    str_desencriptada = str_desencriptada.toLowerCase();

    for (let i =0; i<matriz_codigo.length; i++){
        if (str_desencriptada.includes(matriz_codigo[i][1])){
            str_desencriptada = str_desencriptada.replaceAll(matriz_codigo[i][1], matriz_codigo[i][0]);
        }
    }
    return str_desencriptada;
}

function btn_desencriptar() {
    const texto_desencriptado = desencriptar(texto.value);
    textoEncriptado.textContent = texto_desencriptado;
    botonCopiar.style.display = 'block';
    mensajeContenedorTexto.style.display = 'block';
    imagen.style.display = 'none';
    contenedorTitulo.style.display = 'none';
    contenedorSubtitulo.style.display = 'none';
}


function btn_copiar(){
    navigator.clipboard.writeText(textoEncriptado.textContent).then(()=>{
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el texto', err);
    })
}