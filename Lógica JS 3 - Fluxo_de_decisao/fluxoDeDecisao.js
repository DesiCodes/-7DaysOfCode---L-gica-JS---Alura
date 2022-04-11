let areaPrincipal = 'ola';
while(areaPrincipal != 'FRONTEND' && areaPrincipal != 'BACKEND'){
    areaPrincipal = prompt('Qual área você prefere para ser sua main: FRONTEND ou BACKEND?');
    areaPrincipal = areaPrincipal.toUpperCase();
    if(areaPrincipal != 'FRONTEND' && areaPrincipal != 'BACKEND'){
        alert('Escolha Inválida. Tente novamente.');
    }
}

let tecnologia = 'ola';
if(areaPrincipal == 'FRONTEND'){
    while(tecnologia != 'REACT' && tecnologia != 'VUE'){
        tecnologia = prompt('Qual framework você prefere aprender: React ou Vue?');
        tecnologia = tecnologia.toUpperCase();
        if(tecnologia != 'REACT' && tecnologia != 'VUE'){
            alert('Escolha Inválida. Tente novamente.');
        }
    } 
}
else if(areaPrincipal == 'BACKEND'){
    while(tecnologia != 'C#' && tecnologia != 'JAVA'){
        tecnologia = prompt('Qual linguagem de programação você prefere aprender: C# ou Java?');
        tecnologia = tecnologia.toUpperCase();
        if(tecnologia != 'C#' && tecnologia != 'JAVA'){
            alert('Escolha Inválida. Tente novamente.');
        }
    }
}

alert(`Você irá trilhar a área de ${areaPrincipal}, e trabalhará com o framework ${tecnologia}.`);

let desenvolvendoCarreira = 0;
while(desenvolvendoCarreira != 1 && desenvolvendoCarreira != 2){
    desenvolvendoCarreira = Number(prompt('Posteriormente, você prefere seguir se especializando na área escolhida(1) ou seguir se desenvolvendo para se tornar FullStack(2)? - Escolha (1) ou (2).'));
    if(desenvolvendoCarreira != 1 && desenvolvendoCarreira != 2){
        alert('Escolha Inválida. Tente (1) ou (2).');
    }
}


if(desenvolvendoCarreira == 1){
    alert('Boa escolha! Procure estudar mais frameworks e fique sempre atento nas linguagens que o mercado anda mais utilizando, para que assim você seja EXPERT nessa área!');
}
else{
    alert('Boa escolha! Procure estudar mais sobre as principais linguagem que se combinam bem entre front e backend, para que assim você possa ser um EXPERT em todas as áreas!');
}

let outrasTecnologias = '';
let aux = 'auxiliar';
while(aux != null){
    aux = prompt("Quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer mais");
    outrasTecnologias += ' , ' + aux;
};

alert(`Sua lista de tecnologias: ${outrasTecnologias}`);
