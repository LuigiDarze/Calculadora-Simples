document.getElementById("calcularBtn").addEventListener("click", () => {
  // 1. Obter os valores dos inputs
  const valorMercadoriaInput = document.getElementById("valorMercadoria").value;
  const numeroMultiplicacaoInput = document.getElementById(
    "numeroMultiplicacao"
  ).value;
  const resultadoElement = document.getElementById("resultado");

  // 2. Converter os valores para float
  const valorMercadoria = parseFloat(valorMercadoriaInput);
  const numeroMultiplicacao = parseFloat(numeroMultiplicacaoInput);

  // 3. Verificar se os valores são números válidos
  if (isNaN(valorMercadoria) || isNaN(numeroMultiplicacao)) {
    resultadoElement.textContent =
      "Por favor, insira valores numéricos válidos.";
    resultadoElement.style.color = "#ff6347";
    return;
  }

  // 4. Realizar o cálculo com a nova fórmula
  // Nova fórmula: (((valor * Multiplicador) / 12) * 2)
  const resultadoCalculo = ((valorMercadoria * numeroMultiplicacao) / 12) * 2;

  // 5. Exibir o resultado formatado
  resultadoElement.textContent = resultadoCalculo.toFixed(2);
  resultadoElement.style.color = "#7289da";
});
