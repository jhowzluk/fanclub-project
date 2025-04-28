function validaFaleConosco() {
    var nome = document.getElementById("name").value;
    var expRegNome = new RegExp("^[A-zA-u]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");
    var fone = document.getElementById("phone").value;
    var expRegFone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");

    if (!expRegNome.test(nome)) {
        alert("Preencha o campo Nome.");
        document.getElementById("name").focus();
        return false;
    }
    if (document.getElementById("email").value == "") {
        alert("Preencha o campo E-mail.");
        document.getElementById("email").focus();
        return false;
    }
    if (document.getElementById("data-nascimento").value == "") {
        alert("Preencha o campo Data Nascimento.");
        document.getElementById("data-nascimento").focus();
        return false;
    }
    if (!expRegFone.test(fone)) {
        alert("Preencha o campo Telefone.");
        document.getElementById("phone").focus();
        return false;
    }
    if (document.getElementById("masculino").checked == false && document.getElementById("feminino").checked == false) {
        alert("Selecione o campo Gênero.");
        return false;
    }
    if (document.getElementById("reason").value == "") {
        alert("Selecione o motivo do contato.");
        return false;
    }
    if (document.getElementById("comments").value == "") {
        alert("Preencha o campo Comentários.");
        document.getElementById("comments").focus();
        return false;
    }
    if (document.getElementById("itens").value == "") {
        alert("Selecione o tipo de reclamação.");
        return false;
    }
}

function verificaMotivo(reason) {
    var elemento = document.getElementById("opcaoReclamacao");

    if(reason == "reclamacao") {
        var select = document.createElement("select");
        select.setAttribute("name", "nitens");
        select.setAttribute("id", "itens");
        select.setAttribute("required", "required");

        var option = document.createElement("option");
        option.setAttribute("value", "");
        option.setAttribute("disabled", "disabled");
        option.setAttribute("selected", "selected");
        var texto = document.createTextNode("Escolha");
        option.appendChild(texto);
        select.appendChild(option);

        var option = document.createElement("option");
        option.setAttribute("value", "homepage");
        var texto = document.createTextNode("Página Inicial");
        option.appendChild(texto);
        select.appendChild(option);

        var option = document.createElement("option");
        option.setAttribute("value", "eventspage");
        var texto = document.createTextNode("Página Eventos");
        option.appendChild(texto);
        select.appendChild(option);

        var option = document.createElement("option");
        option.setAttribute("value", "contactpage");
        var texto = document.createTextNode("Página Fale Conosco");
        option.appendChild(texto);
        select.appendChild(option);

        elemento.appendChild(select);
    } else {
        if (elemento.firstChild)
            elemento.removeChild(elemento.firstChild);
    }
}