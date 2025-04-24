

function validaFaleConosco() {
    console.log("validaFaleConosco");
    if (document.getElementById("name").value == "") {
        alert("Preencha o campo Nome.");
        document.getElementById("name").focus();
        return false;
    }
}