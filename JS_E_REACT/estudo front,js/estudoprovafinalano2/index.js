

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