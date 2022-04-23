const randomNumber = Math.floor(Math.random() * 10) + 1 // cria  um numero aleatório entre 1 e 10;

alert("************* BEM VINDO AO JOGO DA ADIVINHAÇãO *************\n");
alert("Você tem 3 tentativas para tentar adivinhar um numero inteiro de 1 a 10, que o computador escolheu.\n");
alert("Está pronto? Vamos lá!!");

let num_tentativas = 3;
let chute = 1000;

while( num_tentativas > 0 && chute != randomNumber){
    chute = prompt("Qual seu chute?");

    num_tentativas--;
    if(chute != randomNumber){
        alert("\nPutz! Você Errou!");
        if(num_tentativas != 0 ){
            alert("\nTente Novamente!");
            alert(`\nVoce ainda possui ${num_tentativas} tentativas.`);
        } else if(num_tentativas == 0){
            alert("\nQue pena, acabou seu numero de chances para adivinhar.");
        }
    }

    if(chute == randomNumber){
        alert("\nParabéns! Você acertou o número secreto!!.");
    }
    
}

alert(`O número secreto era o ${randomNumber}!`);




