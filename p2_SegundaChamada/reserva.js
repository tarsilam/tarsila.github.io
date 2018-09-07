function verificar (){

	i = document.getElementsByTagName("input");

	for(x = 0; x < i.length; x++)
		if(i[x].value == ""){
			alert("O campo " + i[x].title + " não pode ficar em branco.");
			return;
		}
}

	var dias = i.data_saida.valueAsDate.getTime() - i.data_chegada.valueAsDate.getTime();

	if(dias < 0){
		alert("Não é possível que a Data de Saida seja antes da Data de Chegada.");
		return;
	}

	if(i.tipo_quarto.value < i.tipo_quarto.min){
		alert(i.tipo_quarto.title + " abaixo do minimo. Por favor selecione ao menos " + i.tipo_quarto.min);
		return;
	}

	if(i.qtde_criança.value < i.qtde_criança.min){
		alert(i.qtde_criança.title + " abaixo do minimo. Por favor selecione ao menos " + i.qtde_criança.min);
		return;
	}


	dias /= 1000;
	dias /= 86400;
	dias = Math.round(dias);

	if(dias == 0)
		dias = 1;
	    qtde_criança = 1;

	diaria = (139 * Math.floor(i.single.valueAsNumber))+(30 * Math.floor(i.qtde_criança.valueAsNumber));

	alert("Valor Total da Reserva: R$" + diaria * dias +  qtde_criança",00");
}


function validarForm(){


	flagError = "";
	nome = env_form.nome.value;

	telefone = env_form.telefone.value;

	data_chegada = env_form.data_chegada.value;

	data_saida = env_form.data_saida.value;

		
	if( verificarFormVazio() )

		flagError = "Formulário não está completamente preenchido.\n";

	if( apenasNumeros() )

		flagError += "Preencha os campos telefone apenas com números.\n";

	if( apenasLetra() )

		flagError += "Preencha os campos Nome apenas com letras.\n";


	if( flagError != "" ) {

		window.alert(flagError);

	}
	else {

		document.env_form.submit();
	}
}


function verificarFormVazio(){

	if(nome === ""){

		return 1;
	}	

	else if (data_chegada === ""){
	
	return 1;
    }

    else if (data_saida === ""){
	
	return 1;
    
    }
	
	return 0;
}

function apenasLetra(){

	regAlfa = /[^a-zA-Z_-ç`´^~]/;

	reg = /[0-9]/;

	if(reg.test(nome)){

		return 1;
	}	

	return 0;
}