let listaNumerosSorteados = [];

const input = document.querySelector('input');
const botaoChute = document.querySelector('.container__botao');
const botaoReiniciar = document.querySelector('#reiniciar');
const textoInvalido = document.querySelector('.helper-text');

let tentativas = 0;
let numeroSecreto = gerarNumeroSecreto();

console.log(numeroSecreto);

exibirTextoInicial();

input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        botaoChute.click();
    }
});

function exibirTextoInicial() {
    exibirTextoNaTela("h1", "Quem é esse Pokémon?");
    exibirTextoNaTela("p", "Digite um número da pokédex entre 1 e 151:");
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function reiniciarTentativas() {
    tentativas = 0;
    exibirTextoNaTela(".numeroTentativas", tentativas);
}

function gerarNumeroSecreto() {
    numeroEscolhido = parseInt(Math.random() * 151 + 1);
    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function validarInput(chute) {
    if (chute < 1 || chute > 151 || !Number.isInteger(Number(chute))) {
        return false;
    }
    return true;
}

async function verificarChute() {
    let chute = input.value;

    if (validarInput(chute) == false) {
        mostrarErroInput();
    } else {
        processarChute(chute);
    }
}

function mostrarErroInput() {
    input.style.outline = '2px solid red';
    exibirTextoNaTela(".helper-text", "Número de Pokedéx inválido! <br> (Digite um número de 1 até 151)");
    textoInvalido.style.display = "block";
}

async function processarChute(chute) {
    input.style.outline = 'none';
    textoInvalido.style.display = "none";

    let mensagemMenor = `O número é menor que ${chute}.`;
    let mensagemMaior = `O número é maior que ${chute}.`;
    
    tentativas++;
    exibirTextoNaTela(".numeroTentativas", tentativas);

    if (chute == numeroSecreto) {
        await mostrarPokemonEncontrado();
    } else {
        mostrarDicaProximoChute(chute, mensagemMenor, mensagemMaior);
    }
}

async function mostrarPokemonEncontrado() {
    const audio = new Audio('./sounds/pokebolafx.mp3');
    audio.play();
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numeroSecreto}`);
    const pokemon = await response.json();
    
    exibirTextoNaTela("h1", `Você encontrou ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}!`);
    exibirTextoNaTela("p", "Clique em Novo Jogo para jogar novamente!");
    
    atualizarInterfaceAposVitoria(pokemon);
}

function atualizarInterfaceAposVitoria(pokemon) {
    input.style.display = 'none';
    botaoChute.disabled = true;
    botaoReiniciar.disabled = false;
    
    const imagem = document.querySelector('.container__imagem-pokebola');
    imagem.src = pokemon.sprites.other['official-artwork'].front_default;
    imagem.style.animation = 'efeito-pokebola 5s ease-in-out';
    Object.assign(imagem.style, {width: '500px', height: 'auto'});
}

function mostrarDicaProximoChute(chute, mensagemMenor, mensagemMaior) {
    if (chute > numeroSecreto) {
        exibirTextoNaTela("h1", mensagemMenor);
    } else {
        exibirTextoNaTela("h1", mensagemMaior);
    }
    
    input.value = "";
    exibirTextoNaTela("p", "Tente novamente!");
}

function reiniciarJogo() {
    exibirTextoInicial();
    reiniciarTentativas();
    
    input.style.display = 'block';
    botaoChute.disabled = false;
    botaoReiniciar.disabled = true;
    
    numeroSecreto = gerarNumeroSecreto();
    console.log(numeroSecreto);
    
    input.value = "";
    
    const imagem = document.querySelector('.container__imagem-pokebola');
    imagem.src = './img/pokebola.png';
    Object.assign(imagem.style, {width: '400px', height: 'auto'});
    imagem.style.animation = 'none';
    input.style.outline = 'none';
}

