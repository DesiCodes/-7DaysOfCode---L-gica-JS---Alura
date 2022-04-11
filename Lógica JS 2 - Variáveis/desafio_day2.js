console.log('Seja Bem Vindo(a)');

let nomeUsuario = prompt('Qual o seu nome?');
let idadeUsuario = prompt('Quantos anos você tem?');
let linguagemAtual = prompt('Qual linguagem de programação você está estudando?');

alert(`Olá ${nomeUsuario}, você tem ${idadeUsuario} anos e já está aprendendo ${linguagemAtual}.`);

let pergunta1 = prompt(`Você gosta de estudar ${linguagemAtual}? Responda com o número 1 para SIM ou 2 para NÃO`);

while( pergunta1 != 1 || pergunta1 != 2){
    
    if(pergunta1 == 1){
        alert('Muito bom! Continue estudando e você terá muito sucesso.');
    }
    else if (pergunta1 == 2){
        alert('Ahh que pena... Já tentou aprender outras linguagens?');
    } else{
       pergunta1 = prompt(`Opção inválida.Você gosta de estudar ${linguagemAtual}? Responda com o número 1 para SIM ou 2 para NÃO`);
            
    }
}

