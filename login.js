document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const usuario = document.getElementById('username').value.trim();
    const senha = document.getElementById('password').value.trim();

        const dadosUsuario = JSON.parse(localStorage.getItem(`usuario_${usuario}`));

    if (dadosUsuario && dadosUsuario.senha === senha) {
        alert('Login bem-sucedido!');
        // Redirecionamento
        window.location.href = 'index.html';
    } else {
        alert('Usuário ou senha incorretos.');
    }
});