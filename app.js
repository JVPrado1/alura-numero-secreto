alert("Bem-vindo ao jogo do número secreto!");

let numeroSecreto = 29;
console.log("O número secreto é: " + numeroSecreto);
let chute;
let tentativas = 1;

while (numeroSecreto != chute) {
    chute = prompt("Digite um número entre 1 e 30");

    if (numeroSecreto == chute) {
        
        alert(
            `Parabéns, você acertou!\n`+
            `O número secreto é: ${numeroSecreto}\n`+
            `Você acertou em: ${tentativas} tentativas!`
        );
        
    } else {    
        
        if (numeroSecreto < chute) {
            alert(
                `O numero secreto é MENOR que ${chute}\n`+
                `Tentativas: ${tentativas}`
            );
        } else {
            alert(
                `O numero secreto é MAIOR que ${chute}\n`+
                `Tentativas: ${tentativas}`
            );
            
        }
        
      
    }
    tentativas++;

}
