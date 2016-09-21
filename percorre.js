function percorreArray(trPacientes, comportamento){


	for(var posicaoAtual = 0; posicaoAtual <= trPacientes.length - 1; posicaoAtual++){

    	var pacienteTr = trPacientes[posicaoAtual];
		comportamento(pacienteTr);
		
	}

}