const email = document.getElementById("email").value;
const telefone = document.getElementById("celular").value;
const messsage = document.getElementById("mensagem").value;


if( email && messsage){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert("Enviado com sucesso.")
    );
}else{
    alert("Preencha os campos!")
}