alert("Bem-vindo ao jogo do número secreto!");

let numeroSecreto = 29;
console.log("O número secreto é: " + numeroSecreto);
let chute
while (numeroSecreto != chute) {
    chute = prompt("Digite um número entre 1 e 30");


if (numeroSecreto == chute) {
    alert(`Parabéns, você acertou! O número secreto é ${numeroSecreto}!`);
} else {    
    if (numeroSecreto < chute) {
        alert(`O numero secreto é MENOR que ${chute}`);
    } else {
        alert(`O numero secreto é MAIOR que ${chute}`);
    }
}
}