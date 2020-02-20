var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(
	function(){
	atualizaTamanhoFrase();
	inicializaContadores();
	inicializaCronometro();
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
	console.log(qtdPalavras);
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
	console.log(tempoRestante);
	$("#tempo-digitacao").text(tempoRestante);
	if(tempoRestante < 1 ){
		campo.attr("disabled" , true);
		clearInterval(cronometroID);
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
};


