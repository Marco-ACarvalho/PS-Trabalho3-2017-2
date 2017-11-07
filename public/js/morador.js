function salvarDados() {
    //recebe os valores
    var nome = document.getElementById("InputNome").value;
    var email = document.getElementById("InputEmail").value;
    var cpf = document.getElementById("InputCPF").value;
    var data = document.getElementById("InputDia").value + "/" +
                document.getElementById("InputMes").value + "/" +
                document.getElementById("InputAno").value;
    var sexo;
    if(document.getElementById("radios-M").checked === true)
        sexo = "M";
    else sexo = "F";
    var endereco = [" Rua: " + document.getElementById("InputRua").value,
                    " Bairro: " + document.getElementById("InputBairro").value,
                    " Numero: " + document.getElementById("InputNro").value,
                    " CEP: " + document.getElementById("InputCEP").value];
    var estado = document.getElementById("selectEstado").value;

    //salva os valores
    var txt = "Nome: " + nome + "\nE-mail" + email + "\nCPF: " + cpf + "\nData de nasc: " + data +
            "\nSexo: " + sexo + "\nEndereço: "+ endereco + "\nEstado: " + estado;
    
    //Imprime os dados
    console.log(txt);
    console.log('Chegou aqui');
    //Limpra os dados 
    limpadados();
}
function limpadados() {
    document.getElementById("InputNome").value = "";
    document.getElementById("InputEmail").value = "";
    document.getElementById("InputCPF").value = "";
    document.getElementById("InputDia").value = "";
    document.getElementById("InputMes").value = "";
    document.getElementById("InputAno").value = "";
    document.getElementById("radios-M").checked = true;
    document.getElementById("InputRua").value = "";
    document.getElementById("InputNro").value = "";
    document.getElementById("InputBairro").value = "";
    document.getElementById("InputCEP").value = "";
    document.getElementById("selectEstado").value = "AC"
    console.log("Formulario limpo!");
}

function formatar(mascara, documento) {
    var i = documento.value.length;
    var saida = mascara.substring(0, 1);
    var texto = mascara.substring(i)

    if (texto.substring(0, 1) != saida) {
        documento.value += texto.substring(0, 1);
    }

}