// Este código adiciona um evento de clique ao elemento com o id 'emailButton'
document.getElementById('enviar').addEventListener('click', sendMail);

// Esta é a função que será chamada quando o botão com id 'emailButton' for clicado
function sendMail (e) {
    // Previne o comportamento padrão do clique em um botão dentro de um formulário.
    e.preventDefault();
    
    // Obtém os valores dos campos de entrada do formulário com base em seus respectivos IDs.
    const mail = document.getElementById('email').value;
    const message = document.getElementById('mensagem').value;
    const name = document.getElementById('nome').value;

    // Verifica se todos os campos (e-mail, nome e  mensagem) foram preenchidos pelo usuário.
    if (name && mail && message) {
        // Se todos os campos estiverem preenchidos, usa a biblioteca 'Email.js'
        // para enviar o e-mail com os detalhes fornecidos pelo usuário.
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "contatosilveiragustavo@gmail.com",
            Password : "21112FD548BADA088F1C740B4C961670B556",
            To : 'gustavodiassilveira7@gmail.com',
            From : ` ${mail}`,
            Subject: `Contato via Portfólio`,
            Body: ` ${message}`,
        }).then(() => {
            alert('Obrigado pelo seu contato!');
            location.reload();
        });
    } else {
        // Se algum dos campos estiver em branco, exibe um alerta informando que todos os campos devem ser preenchidos.
        alert('Preencha todos os campos!');
    }    
}
