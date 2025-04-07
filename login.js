document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const usuario = document.getElementById('username').value.trim();
    const senha = document.getElementById('password').value.trim();

    // Recupera os dados do usuário do localStorage
    const dadosUsuario = JSON.parse(localStorage.getItem(`usuario_${usuario}`));

    if (dadosUsuario && dadosUsuario.senha === senha) {
        alert('Login bem-sucedido!');
        // Redireciona para a página principal ou dashboard
        window.location.href = 'index.html';
    } else {
        alert('Usuário ou senha incorretos.');
    }
});