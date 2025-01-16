
alert("Bem-vindo ao jogo do número secreto!");

let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 0;
console.log(`O número secreto é: ${numeroSecreto}`);

while (numeroSecreto != chute) {
    chute = prompt(`Digite um número entre 1 e ${numeroMaximo}`);
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
    
