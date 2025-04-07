let emailField = document.getElementById('email');
let mensagemValidacaoEmail = document.getElementById('mensagemValidacaoEmail');

// VALIDAÇÃO DE EMAIL
emailField.addEventListener('blur', function () {
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailField.value === "") {
        mensagemValidacaoEmail.textContent = "";
    } else if (regexEmail.test(emailField.value)) {
        mensagemValidacaoEmail.textContent = "E-mail válido ✅";
        mensagemValidacaoEmail.style.color = "green";
    } else {
        mensagemValidacaoEmail.textContent = "E-mail inválido ❌";
        mensagemValidacaoEmail.style.color = "red";
    }
});

// ENVIO DO FORMULÁRIO
document.getElementById("send").addEventListener("click", function () {
    // CAPTURA DE DADOS
    const nome = document.querySelector("input[placeholder='Daiane Silva']").value.trim();
    const dataNascimento = document.querySelector("input[type='date']").value.trim();
    const cpf = document.querySelector("input[placeholder='123.456.789-00']").value.trim();
    const sexo = document.querySelector("select[name='sexo']").value;
    const email = document.getElementById("email").value.trim();
    const telefone = document.querySelector("input[placeholder='(98) 9.8765-4321']").value.trim();
    const cep = document.querySelector("input[type='number']").value.trim();
    const rua = document.querySelectorAll("input[type='text']")[1].value.trim();
    const numero = document.querySelectorAll("input[type='number']")[1].value.trim();
    const cidade = document.querySelectorAll("input[type='text']")[2].value.trim();
    const estado = document.querySelectorAll("input[type='text']")[3].value.trim();
    const usuario = document.querySelector("#user input").value.trim();
    const senha = document.querySelector("#passoword input").value.trim();
    const trilhaInput = document.querySelector("input[name='trilha']:checked");
    const termosAceitos = document.querySelector("input[type='checkbox']").checked;

    // VALIDAÇÕES
    let camposFaltando = [];

    if (!nome) camposFaltando.push("Nome");
    if (!dataNascimento) camposFaltando.push("Data de Nascimento");
    if (!cpf) camposFaltando.push("CPF");
    if (!sexo) camposFaltando.push("Sexo");
    if (!email) camposFaltando.push("Email");
    if (!telefone) camposFaltando.push("Telefone");
    if (!cep) camposFaltando.push("CEP");
    if (!rua) camposFaltando.push("Rua");
    if (!numero) camposFaltando.push("Número");
    if (!cidade) camposFaltando.push("Cidade");
    if (!estado) camposFaltando.push("Estado");
    if (!usuario) camposFaltando.push("Usuário");
    if (!senha) camposFaltando.push("Senha");
    if (!trilhaInput) camposFaltando.push("Trilha");
    if (!termosAceitos) camposFaltando.push("Aceite dos Termos");

    // VALIDAÇÃO EXTRA DE EMAIL
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !regexEmail.test(email)) {
        camposFaltando.push("E-mail válido");
    }

    // VERIFICA CAMPOS
    if (camposFaltando.length === 0) {
        const formData = {
            nome,
            dataNascimento,
            cpf,
            sexo,
            email,
            telefone,
            cep,
            rua,
            numero,
            cidade,
            estado,
            usuario,
            senha,
            trilha: trilhaInput.value,
            termosAceitos
        };

        localStorage.setItem(`usuario_${usuario}`, JSON.stringify(formData));
        alert("✅ Inscrição realizada com sucesso!");
        window.location.href = 'login.html';

    } else {
        alert("Por favor, preencha os seguintes campos corretamente:\n- " + camposFaltando.join("\n- "));
    }
});