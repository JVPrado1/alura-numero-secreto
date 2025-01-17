const input = document.querySelector('input');
const botaoChute = document.querySelector('.container__botao');
const botaoReiniciar = document.querySelector('#reiniciar');
const textoInvalido = document.querySelector('.helper-text');

let tentativas = 0;

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

function reiniciarTentativas() {
    tentativas = 0;
    exibirTextoNaTela(".numeroTentativas", tentativas);
}

function exibirTextoInicial() {
    exibirTextoNaTela("h1", "Quem é esse Pokémon?");
    exibirTextoNaTela("p", "Digite um número da pokédex entre 1 e 151:");
}

async function verificarChute() {
    let chute = input.value;
    
    console.log(validarInput(chute));

    if (validarInput(chute) == false) {
        input.style.outline = '4px solid red';
        exibirTextoNaTela(".helper-text", "Número de Pokedéx inválido! <br> (Digite um número de 1 até 151)");
        textoInvalido.style.display = "block";
    } else {
        input.style.outline = '4px solid green';
        textoInvalido.style.display = "none";

        let mensagemMenor = `O número é menor que ${chute}.`;
        let mensagemMaior = `O número é maior que ${chute}.`;
        tentativas++;
        exibirTextoNaTela(".numeroTentativas", tentativas);
        
        console.log(tentativas);

        if (chute == numeroSecreto) {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numeroSecreto}`);
            const pokemon = await response.json();
            exibirTextoNaTela("h1", `Você encontrou ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}!`);
            console.log(pokemon);
            exibirTextoNaTela("p", "Clique em Novo Jogo para jogar novamente!");
            input.style.display = 'none';
            botaoChute.disabled = true;
            botaoReiniciar.disabled = false;
            const imagem = document.querySelector('.container__imagem-pokebola');
            imagem.src = pokemon.sprites.other['official-artwork'].front_default;
            Object.assign(imagem.style, {width: '500px', height: 'auto'});
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
}

function gerarNumeroSecreto() {
    return parseInt(Math.random() * 151 + 1);
}

function validarInput(chute) {
    if (chute < 1 || chute > 151 || !Number.isInteger(Number(chute))) {
        return false;
    }
    return true;
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
}
