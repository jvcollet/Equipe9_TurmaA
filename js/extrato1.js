document.addEventListener('DOMContentLoaded', function() {
    tabela = document.querySelector('table');
    despesas = localStorage.getItem('total_despesas');
    custo_do_prato = localStorage.getItem('custo_prato');
    lucro = localStorage.getItem('lucro_prato');

    tr = document.createElement('tr');

    Prato = document.createElement('td');
    Prato.textContent = '1';
    tr.appendChild(Prato);

    Despesas = document.createElement('td');
    Despesas.textContent = 'R$: ' + parseFloat(despesas).toFixed(2).replace('.',',');
    tr.appendChild(Despesas);

    Custo = document.createElement('td');
    Custo.textContent = 'R$: ' + parseFloat(custo_do_prato).toFixed(2).replace('.',',');
    tr.appendChild(Custo);

    Lucro = document.createElement('td');
    Lucro.textContent =  'R$: ' + parseFloat(lucro).toFixed(2).replace('.',',');
    tr.appendChild(Lucro);

    tabela.appendChild(tr);
});

document.addEventListener('DOMContentLoaded', function() {
    tabela = document.querySelector('#table_extrato1');
    remove_button = document.querySelector('#button_extrato1');

    function removerUltimaLinha() {
        numeroLinhas = tabela.rows.length;
        if (numeroLinhas > 1) { 
            tabela.deleteRow(-1); 
        }
    }
    remove_button.addEventListener('click', removerUltimaLinha)
});