function validarFormulario(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;
    let mensagensErro = [];

    if (senha.length < 6) {
        mensagensErro.push("O nome deve ter pelo menos 6 caracteres.");
    }

}


    function fazerLogin() {
           
        const nome = document.getElementById("nome").value;
        const senha = document.getElementById("senha").value;

            if (nome === "admin" && senha === "1234") {
                window.location.href = "menu.html";
                alert("Login realizado com sucesso!");
                

            } else {
                alert("Erro: Credenciais inválidas");
            }


        }