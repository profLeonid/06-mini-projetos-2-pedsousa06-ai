function gerarTabuada() {
    const numero = parseFloat(document.getElementById('numero').value);
    const tbody = document.getElementById('tbody');
  
    if (isNaN(numero)) return;
  
    tbody.innerHTML = '';
  
    for (let n = 1; n <= 10; n++) {
      const adicao = numero + n;
      const subtracao = numero - n;
      const multiplicacao = numero * n;
      const divisao = (numero / n).toFixed(2);
  
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${n}</td>
        <td>${adicao}</td>
        <td class="${subtracao < 0 ? 'negativo' : ''}">${subtracao}</td>
        <td>${multiplicacao}</td>
        <td>${divisao}</td>
      `;
      tbody.appendChild(tr);
    }
  }