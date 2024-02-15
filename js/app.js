let mensagem = document.querySelector('textarea'); //pega texto do input
let img = document.getElementById('imagem_ilustrativa');
let mensagemCriptografada = '';
let botao = document.getElementById("botao__copiar");
//botao.removeAttribute('hidden');

//document.getElementById('reiniciar').removeAttribute('disabled');
function criptografar() {
    if (mensagem.value == '') { 
        verificaTexto();
    } else {
        mensagemCriptografada = mensagem.value
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
        document.getElementById('botao__copiar').removeAttribute('hidden');
        img.style.display = 'none';
        alteraTexto('h2', '');
        alteraTexto('p', mensagemCriptografada);//valor do input
        console.log(mensagem.value);
        mensagem.value = '';//limpa campo
    }
    
}

function descriptografar() {
    if (mensagem.value == '') { 
        verificaTexto();
    } else {
        mensagemCriptografada = mensagem.value
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
        document.getElementById('botao__copiar').removeAttribute('hidden');
        img.style.display = 'none';
        alteraTexto('h2', '');
        alteraTexto('p', mensagemCriptografada);//valor do input
        console.log(mensagem.value);
        mensagem.value = '';//limpa campo
    }
}

function verificaTexto() {
        img.style.display = '';
        document.getElementById('botao__copiar').setAttribute('hidden', true);
        img.src = '/imgs/homem.png'
        alteraTexto('h2', 'Mensagem inválida!');
        alteraTexto('p', 'Digite uma mensagem válida para criptografar ou descriptografar');//valor do input
        mensagem.value = '';//limpa campo

}
function alteraTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}