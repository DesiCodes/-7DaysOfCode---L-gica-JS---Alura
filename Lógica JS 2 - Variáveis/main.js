let nomeUsuario = document.querySelector('#usuario');
let senhaUsuario = document.querySelector('#senha');

let button_Confirmar = document.querySelector('.botao');

button_Confirmar.addEventListener('click', clicar_confirmar);

function clicar_confirmar(){
    alert(`Usuário: ${nomeUsuario.value}`);
    alert(`Senha: ${senhaUsuario.value}`)
}

