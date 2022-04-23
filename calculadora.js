function insert(num)/*Tem que chamar uma função para os butões da calculadora */
{
    var valorAtual = document.getElementById('resultado').innerHTML; /* A função que chama dentro do html, os butoes que foram determinado*/
    document.getElementById('resultado').innerHTML = valorAtual + num; /* A função é para quando clicar um numero na calculadora, ele ficar em seguencia, não um escondendo o outro.*/
}
function clean()
{
    document.getElementById('resultado').innerHTML ="";
}
function back()
{
    var resultado = document.getElementById('resultado').innerHTML; /* Criado uma var com o resultado para poder chamar a função de back, que faz apagar um numero de cada vez*/
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);/* Aqui é a função que faz para poder apagar um numero de cada vez na calculadore*/
}
function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;/* Variavel para fazer o resultado de tudo*/

    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado); /* Quando tem algo para calcular, if vai printar os valores */
    }

    else /* Quando não tem nada para calcular, vai ser printado "Nada Biri"*/
    {
        document.getElementById('resultado').innerHTML = "";
    }
}