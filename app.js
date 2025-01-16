let numeroSecreto = parseInt(Math.random() * 31);
alert("Bem-vindo ao jogo do número secreto!");


console.log("O número secreto é: " + numeroSecreto);
let chute;
let tentativas = 0;

while (numeroSecreto != chute) {
    chute = prompt("Digite um número entre 1 e 30");
    tentativas++; 

    if (numeroSecreto == chute) {
        break;             
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
}

let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa` 
    alert(
        `Parabéns, você acertou!\n`+
        `O número secreto é: ${numeroSecreto}\n`+
        `Você acertou em: ${tentativas} ${palavraTentativa}!`);
    
