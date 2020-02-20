var frase = $(".frase").text();

var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#contador-palavras");
console.log(tamanhoFrase);

tamanhoFrase.text(numPalavras); 