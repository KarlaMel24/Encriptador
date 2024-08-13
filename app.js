const texto = document.querySelector('.text-area');
const textoEncriptado = document.getElementById("texto-encriptado");
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

function validarTexto(input) {
    const valido = /^[a-z\s]*$/; // Solo letras minúsculas y espacios
    return valido.test(input);
}

function encriptar(str_encriptada) {
    if (!validarTexto(str_encriptada)) {
        alert("El texto contiene caracteres no permitidos. Por favor, usa solo letras minúsculas y sin acentos.");

    }
    else{
        const matriz_codigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
        str_encriptada = str_encriptada.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // Eliminar acentos
            .replace(/[^a-z\s]/g, ''); // Eliminar caracteres especiales y números

        for (let i = 0; i < matriz_codigo.length; i++) {
            if (str_encriptada.includes(matriz_codigo[i][0])) {
                str_encriptada = str_encriptada.replaceAll(matriz_codigo[i][0], matriz_codigo[i][1]);
            }
        }
        botonCopiar.style.display = 'block';
        mensajeContenedorTexto.style.display = 'block';
        imagen.style.display = 'none';
        contenedorTitulo.style.display = 'none';
        contenedorSubtitulo.style.display = 'none';
        return str_encriptada;
    }
}

function btn_encriptar() {
    const texto_encriptado = encriptar(texto.value);
    textoEncriptado.textContent = texto_encriptado;
}


function desencriptar(str_desencriptada){
    if (!validarTexto(str_desencriptada)) {
        alert("El texto contiene caracteres no permitidos. Por favor, usa solo letras minúsculas y sin acentos.");

    }
    else {
        const matriz_codigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];

        for (let i =0; i<matriz_codigo.length; i++){
            if (str_desencriptada.includes(matriz_codigo[i][1])){
                str_desencriptada = str_desencriptada.replaceAll(matriz_codigo[i][1], matriz_codigo[i][0]);
            }
        }
        botonCopiar.style.display = 'block';
        mensajeContenedorTexto.style.display = 'block';
        imagen.style.display = 'none';
        contenedorTitulo.style.display = 'none';
        contenedorSubtitulo.style.display = 'none';
        return str_desencriptada;
}
}

function btn_desencriptar() {
    const texto_desencriptado = desencriptar(texto.value);
    textoEncriptado.textContent = texto_desencriptado;
    
}

function btn_copiar(){
    navigator.clipboard.writeText(textoEncriptado.textContent).then(()=>{
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el texto', err);
    })
}