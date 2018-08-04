
function Palindromo (texto){
   texto = prompt ("Digite a palavra para ser verificada:");
   var nao_e_palindromo  = 0;
  for(x = 0; x < texto.length/2; x++){ 
  	if (texto[x] != texto[texto.length - x - 1]) {
	   nao_e_palindromo = 1;
	   break;
	}
  }
  if (nao_e_palindromo == 1) {
  	 alert(" Não e palindromo!");
  }
  else{
      alert("E palindromo!");	
  }	 
}


function calculFatorial(x){
	x = prompt ("Digite o numero para ser verificado:");
}

function Fatorial (x){
	alert(x);
    if (x > 2){
       return  1;
    }
    else{
      y = x *fatorial(x-1);
    }
    alert(y);
	
}

function Verificacao_email (){
	email = prompt ("Digite o email para ser verificado:");
	tamanho = email.length;
    arroba  = email.indexOf('@');
    ponto = email.indeOf(".");
    arroba1  = lastIndexOf('@');

    if (tamanho > ponto + 2 && ponto  > arroba + 1 && arroba > 0 && arroba == arroba1){
       alert ("É um e-mail");
    }
    else{
         alert ("Não é um e-mail");
    }
	
}