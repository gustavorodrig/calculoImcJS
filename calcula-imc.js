//calcula-imc.js

var botao = document.getElementById("calcula-imcs");
botao.addEventListener("click", function(){

    var trPacientes = document.getElementsByClassName("paciente");

        percorreArray(trPacientes, imprimeEModificaTdDeImc);

        function imprimeEModificaTdDeImc(pacienteTr){

            var pacienteAtual = montaPaciente(pacienteTr);    
            var imc = pacienteAtual.pegaImc();

            var tdImc = pacienteTr.getElementsByClassName("info-imc")[0]; 
            tdImc.textContent = imc;

            console.log(imc);

        }


        function montaPaciente(pacienteTr){

            var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
            var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
            var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];

            var paciente = {nome : tdNome.textContent, 
                            peso : tdPeso.textContent, 
                            altura : tdAltura.textContent,
                            pegaImc : function calculaImc(){
                                        if(this.altura != 0){

                                                var imc = this.peso / (this.altura * this.altura);
                                                console.log(imc);
                                                return imc;

                                            } else{
                                                console.log("Não posso executar uma divisão por 0!");
                                            }
                                         } 
                            };

            return paciente;
        }

});


            
