function gerar() {
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const tbody = document.getElementById('tbody');
  
    if (!quantidade || quantidade < 1) return;
  
    tbody.innerHTML = '';
  
    for (let i = 1; i <= quantidade; i++) {
      const contagem = i;
      const pares = i * 2;
      const impares = i * 2 - 1;
      const multiplos5 = i * 5;
      const potencias2 = 2 ** (i - 1);
  
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${contagem}</td>
        <td>${pares}</td>
        <td>${impares}</td>
        <td>${multiplos5}</td>
        <td>${potencias2}</td>
      `;
      tbody.appendChild(tr);
    }
  }