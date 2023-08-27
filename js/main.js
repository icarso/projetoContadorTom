let respostaUsuario;
const nome = document.getElementById("nome_box");
const email = document.getElementById("email_box");
const telefone = document.getElementById("telefone_box");
const mensagem = document.getElementById("message_box");


function enviarFormulario() {

    axios.post('http://localhost:5196/api/contato', {
        "nome": nome.value,
        "email": email.value,
        "telefone": telefone.value,
        "mensagem": mensagem.value
    })
        .then(response => {
            if (response.status === 200){
                respostaUsuario = document.getElementById('alertaSucesso');
                respostaUsuario.classList.add('show');
                fecharAutomatico(respostaUsuario);
            } else {
                respostaUsuario = document.getElementById('alertaErro');
                respostaUsuario.classList.add('show');
                fecharAutomatico(respostaUsuario);
            }
        })
        .catch(error => {
            respostaUsuario = document.getElementById('alertaErro');
            respostaUsuario.classList.add('show')
            , console.log(error)
        });

        resetar();
}

function resetar(){
    nome.value = null;
    email.value = null;
    telefone.value = null;
    mensagem.value = null;
}

function fecharAutomatico(respostaUsuario){
    setTimeout(() => {
        respostaUsuario.classList.remove('show');
    }, 5000);
}