let mensagem = document.querySelector('textarea'); //pega texto do input
let img = document.getElementById('imagem_ilustrativa');
let mensagemCriptografada = '';
let botaoCopiar = document.getElementById('botao__copiar');
let notificacaoCopia = document.getElementById('notificacao-copia');


// Criptografar
function criptografar() {
    if (mensagem.value == '') { 
        verificaTexto();
    } else {
        //unicode tira acentos
        var novaMensagem = mensagem.value.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        novaMensagem = novaMensagem.toLowerCase();
        console.log(novaMensagem);
        mensagemCriptografada = novaMensagem
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
        //escreve no html
        document.getElementById('botao__copiar').removeAttribute('hidden');
        img.style.display = 'none';
        alteraTexto('h2', '');
        alteraTexto('p', mensagemCriptografada);//valor do input
        mensagem.value = '';//limpa campo

    }  
}
// Descriptografar
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
        img.src = 'imgs/homem.png'
        alteraTexto('h2', 'Mensagem inválida!');
        alteraTexto('p', 'Digite uma mensagem válida para criptografar ou descriptografar');//valor do input
        mensagem.value = '';//limpa campo
}

function alteraTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

botaoCopiar.addEventListener("click", () => {
    navigator.clipboard.writeText(mensagemCriptografada)
        .then(() => {
            notificacaoCopia.style.display = 'block';
            setTimeout(() => {
                notificacaoCopia.style.display = 'none';
            }, 6000);
        })
        .catch((err) => {
            console.error('Erro ao copiar o texto:', err);
        });
});
/*Validação 17
Como requisito do projeto, não serão aceitas
letras maiúsculas e caracteres especiais.
Pesquise sobre a tabela UNICODE.*/





