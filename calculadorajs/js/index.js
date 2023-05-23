function calcularJurosSimples() {
    var principal = parseFloat(document.getElementById("principal").value);
    var taxa = parseFloat(document.getElementById("taxa").value);
    var periodo = parseFloat(document.getElementById("periodo").value);

    var jurosSimples = principal * (1 + (taxa / 100) * periodo);
    var valorFuturo = jurosSimples.toFixed(2);

    document.getElementById("resultado").innerText = "Valor com Juros Simples): " + valorFuturo;
}

function calcularJurosCompostos() {
    var principal = parseFloat(document.getElementById("principal").value);
    var taxa = parseFloat(document.getElementById("taxa").value);
    var periodo = parseFloat(document.getElementById("periodo").value);

    var jurosCompostos = principal * Math.pow(1 + taxa / 100, periodo);
    var valorFuturo = jurosCompostos.toFixed(2);

    document.getElementById("resultado").innerText = "Valor com Juros Compostos): " + valorFuturo;
}

// Tofixed(2) é uma função JavaScript que é usada para arredondar um número para um determinado número de casas decimais e retornar uma string representando o número arredondado.
// No caso específico do código da calculadora,  valorFuturo.toFixed(2) é usado para arredondar o valor calculado para juros simples ou compostos para duas casas decimais. Isso garante que o resultado exibido tenha apenas duas casas decimais após o ponto //


//  Já o Math.pow é uma função embutida do JavaScript que é usada para calcular a potência de um número. Ela retorna a base elevada ao expoente especificado. //
// Nesse caso do código, a função Math.pow() é usada para calcular o valor dos juros compostos. Nesse caso, 1 + taxa / 100 é a base e periodo é o expoente. A função Math.pow() é usada para calcular a potência dessa expressão.

// innerText é usado para obter ou definir o texto visível dentro de um elemento HTML, excluindo qualquer código HTML. Por exemplo, se houver um parágrafo <p>Olá, mundo!</p> dentro de uma <div>, o innerText retornará apenas "Olá, mundo!", sem as tags HTML.
// innerHTML é usado para obter ou definir o conteúdo completo dentro de um elemento HTML, incluindo qualquer código HTML. Se houver um parágrafo <p>Olá, mundo!</p> dentro de uma <div>, o innerHTML retornará a string completa <p>Olá, mundo!</p>, incluindo as tags HTML.
// Basicamente, innerText retorna apenas o texto visível, enquanto innerHTML retorna o conteúdo completo, incluindo as tags HTML.