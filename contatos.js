var enviarInfo = document.querySelector("#enviarInfo");
enviarInfo.addEventListener("click", function(event){
    event.preventDefault();
    var info = document.querySelector("#infoCliente");
    var Cliente = obterInfoClient(info);
    var erros = errorClient(Cliente);
    if(erros.length > 0){
        mensagensDeErro(erros);
        return;
    }
    if(mensagensDeErro.length > 0){
        var ul = document.querySelector("#mensagens-erro");
        ul.innerHTML = "";
    }
    console.log(Cliente);
})

function obterInfoClient(info) {
    var cliente = {
        nome : info.nome.value,
        apelido : info.apelido.value,
        email : info.email.value,
        telefone : info.telefone.value,
        
    }
    return cliente;
}

function errorClient(info) {
    var erros = [];
    if (info.nome.length == 0) erros.push("É necessario fornecer um nome.");
    if (info.email.length == 0) erros.push("É necessario fornecer um email.");
    if (info.apelido.length == 0) erros.push("É necessario fornecer um apelido.");
    if(!validaNumero(info.telefone)) erros.push('O número é invalido.')
    return erros;
}

function mensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function validaNumero(info) {
    var tamanho = info.length;
    if(tamanho >= 7 && tamanho < 14){
        return true;
    } else {
        return false;
    }
}