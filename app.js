const input = document.querySelector('input');
const botaoChute = document.querySelector('.container__botao');
const botaoReiniciar = document.querySelector('#reiniciar');

input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        botaoChute.click();
    }
});


let numeroSecreto = gerarNumeroSecreto();
console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoInicial();

function exibirTextoInicial() {
    exibirTextoNaTela("h1", "Jogo do Número Secreto");
    exibirTextoNaTela("p", "Digite um número da pokédex entre 1 e 151:");
}

function verificarChute() {
    let chute = input.value;
    let mensagemMenor = `O número é menor que ${chute}.`;
    let mensagemMaior = `O número é maior que ${chute}.`;

    console.log(chute);
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Fim de Jogo! Você venceu! =)");
        exibirTextoNaTela("p", "Clique em Novo Jogo para jogar novamente!");
        input.style.visibility = 'hidden';
        botaoChute.disabled = true;
        botaoReiniciar.disabled = false;
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("h1", mensagemMenor);
        } else {
            exibirTextoNaTela("h1", mensagemMaior);
        }
        
        input.value = "";
        exibirTextoNaTela("p", "Tente novamente!");
    }
}

function gerarNumeroSecreto() {
    return parseInt(Math.random() * 100 + 1);
}

function reiniciarJogo() {
    exibirTextoInicial();
    input.style.visibility = 'visible';
    botaoChute.disabled = false;
    botaoReiniciar.disabled = true;
    numeroSecreto = gerarNumeroSecreto();
    console.log(numeroSecreto);
    input.value = ""
}