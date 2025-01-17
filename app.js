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
    exibirTextoNaTela("h1", "Quem é esse Pokémon?");
    exibirTextoNaTela("p", "Digite um número da pokédex entre 1 e 151:");
}

async function verificarChute() {
    let chute = input.value;
    let mensagemMenor = `O número é menor que ${chute}.`;
    let mensagemMaior = `O número é maior que ${chute}.`;

    console.log(chute);
    
    if (chute == numeroSecreto) {
        const response =  await fetch(`https://pokeapi.co/api/v2/pokemon/${numeroSecreto}`);
        const pokemon = await response.json();
        let fraseAcerto = `Fim de Jogo! Você venceu! =) <br> O Pokémon Secreto era o ${pokemon.name}.`
        console.log(pokemon);
        exibirTextoNaTela("h1", fraseAcerto );
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
    return parseInt(Math.random() * 151 + 1);
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