let email = document.getElementById('email');
let mensagemValidacaoEmail = document.getElementById('mensagemValidacaoEmail');
//não deixar enviar o formulário se alguma validação estiver apontando erro


//VALIDAÇÃO DE DADOS
email.addEventListener('blur', function() {
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value === "") {
        mensagemValidacaoEmail.textContent = "";
      } else if (regexEmail.test(email.value)) {
        mensagemValidacaoEmail.textContent = "E-mail válido ✅";
        mensagemValidacaoEmail.style.color = "green";
      } else {
        mensagemValidacaoEmail.textContent = "E-mail inválido ❌";
        mensagemValidacaoEmail.style.color = "red";
      }
}
);
//VALIDAÇÃO DE DADOS
