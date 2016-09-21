/**
 * Created by Gustavo on 16/09/2016.
 */



var botaoAdiciona = document.querySelector("#adicionar-paciente");

botaoAdiciona.addEventListener("click", function(event){

    event.preventDefault();

    var campoNome = document.querySelector("#campo-nome");
    var campoPeso = document.querySelector("#campo-peso");
    var campoAltura = document.querySelector("#campo-altura");

    var pacienteNovo = "<tr class='paciente'>" +
        "<td class='info-nome'>" + campoNome.value + "</td>" +
        "<td class='info-peso'>" + campoPeso.value + "</td>" +
        "<td class='info-altura'>" + campoAltura.value + "</td>" +
        "<td class='info-imc'>"+campoPeso.value/(campoAltura.value*campoAltura.value)+"</td>" +
        "</tr>";

    var tabela = document.querySelector("table");
    tabela.innerHTML += pacienteNovo;


    campoNome.value = ""
    campoPeso.value = ""
    campoAltura.value = ""

    //var formPaciente = document.querySelector("form");
    //formPaciente.reset();


})