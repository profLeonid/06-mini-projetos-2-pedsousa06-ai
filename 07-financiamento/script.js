function simularFinanciamento() {
    const valorTotal = parseFloat(document.getElementById('valorTotal').value);
    const taxa = parseFloat(document.getElementById('taxa').value);
    const parcelas = parseInt(document.getElementById('parcelas').value);
    const tbody = document.getElementById('tbody');
  
    if (!valorTotal || !taxa || !parcelas) return;
  
    tbody.innerHTML = '';
  
    const parcela = valorTotal / parcelas;
    let saldo = valorTotal;
  
    for (let mes = 1; mes <= parcelas; mes++) {
      const jurosMes = saldo * (taxa / 100);
      const totalMes = parcela + jurosMes;
      saldo = saldo - parcela;
  
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${mes}</td>
        <td class="col-parcela">R$ ${parcela.toFixed(2)}</td>
        <td class="col-juros">R$ ${jurosMes.toFixed(2)}</td>
        <td class="col-total">R$ ${totalMes.toFixed(2)}</td>
        <td class="col-saldo">R$ ${saldo < 0 ? '0.00' : saldo.toFixed(2)}</td>
      `;
      tbody.appendChild(tr);
    }
  }