var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");
var frase = $(".frase").text();

$(
	function(){
	atualizaTamanhoFrase();
	inicializaContadores();
	inicializaCronometro();
	inicializaMarcadores();
	$("#botao-reiniciar").click(reiniciaJogo);

});

function atualizaTamanhoFrase(){
	var frase = $(".frase").text();
	var numPalavras = frase.split(" ").length;

	var tamanhoFrase = $("#tamanho-frase");
	tamanhoFrase.text(numPalavras);
}


function inicializaContadores(){
	campo.on("input" , function(){
	var conteudo = campo.val();
	var qtdPalavras = conteudo.split(/\S+/).length - 1;
	$("#contador-palavras").text(qtdPalavras);
	var qtdCaracteres = conteudo.length;
	$("#contador-caracteres").text(qtdCaracteres);
});
}

function inicializaCronometro(){
	var tempoRestante = $("#tempo-digitacao").text();
	campo.one("focus" , function(){
	var cronometroID = setInterval(function(){
	tempoRestante --;
	$("#tempo-digitacao").text(tempoRestante);
	if(tempoRestante < 1 ){
		campo.attr("disabled" , true);
		clearInterval(cronometroID);
		campo.toggleClass("campo-desativado");
		}
	},1000);
	});
}


function reiniciaJogo(){
	campo.attr("disabled" , false);
	campo.val("");
	$("#contador-caracteres").text("0");
	$("#contador-palavras").text("0");
	$("#tempo-digitacao").text(tempoInicial);
	inicializaCronometro();
	campo.toggleClass("campo-desativado");
	campo.removeClass("campo-correto");
	campo.removeClass("campo-errado");
};

function inicializaMarcadores(){
	campo.on("input" , function(){
		var digitado = campo.val();
		var comparavel = frase.substr(0,digitado.length);
		if (digitado == comparavel){
			campo.addClass("campo-correto");
			campo.removeClass("campo-errado");
		}else{
			campo.addClass("campo-errado");
			campo.removeClass("campo-certo");
		}
	});
};

