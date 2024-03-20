alert('Regra para a criptofrafia: Apenas letras minúsculas e sem acento.')
const textArea = document.querySelector (".text-area");
const mensagem = document.querySelector (".mensagem");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";

}
function encriptar(stringEncriptada) {
let matrizCodigo = [ ["e", "enter"] ,["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"] ]
stringEncriptada = stringEncriptada.toLowerCase();
for( let i = 0; i < matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
} 
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringnDesencriptada) {
let matrizCodigo = [ ["e", "enter"] ,["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"] ]
stringnDesencriptada = stringnDesencriptada.toLowerCase();
for( let i = 0; i < matrizCodigo.length; i++){
    if(stringnDesencriptada.includes(matrizCodigo[i][1])){
        stringnDesencriptada = stringnDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
} 
    return stringnDesencriptada;
}
