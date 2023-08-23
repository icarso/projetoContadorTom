const axios = require('axios');

const nome = document.getElementById("nome_box").value;
const email = document.getElementById("email_box").value;
const telefone = document.getElementById("telefone_box").value;
const mensagem = document.getElementById("message_box").value;

function enviarFormulario() {
    axios.post('http://localhost:5196/api/contato', {
        "nome": nome,
        "email": email,
        "telefone": telefone,
        "mensagem": mensagem
    })
        .then(response => console.log(response))
        .catch(error => error == 405? "Ok": "false")
}

function resetar(){
    nome.value == null;
    email.value == null;
    telefone.value == null;
    mensagem.value == null;
}