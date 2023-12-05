document.addEventListener('DOMContentLoaded', function() {
    button_adicionar = document.getElementById('button_adicionar');
    tabela_ingredientes = document.getElementById('tabela_ingredientes');
    calcular_extrato = document.getElementById('calcular_extrato');
    custo_dado_prato = document.getElementById('custo_dado_prato');
    custo_prato = document.getElementById('custo_prato');
    total_despesas = document.getElementById('total_despesas');
    lucro_prato = document.getElementById('lucro_prato');

    button_adicionar.addEventListener('click', function() {
        ingrediente = document.getElementById('input_ingredientes').value;
        custo = document.getElementById('input_custo').value;

        nova_linha = tabela_ingredientes.insertRow(-1);
        celula_ingrediente = nova_linha.insertCell(0);
        celula_custo = nova_linha.insertCell(1);
        
        celula_ingrediente.textContent = ingrediente;
        celula_custo.textContent = `R$ ${parseFloat(custo).toFixed(2)}`;

        document.getElementById('input_ingredientes').value = '';
        document.getElementById('input_custo').value = '';
    });

    calcular_extrato.addEventListener('click', function() {
        despesas = 0;
        for (i = 1; i < tabela_ingredientes.rows.length; i++) {
            custo_ingredientes = parseFloat(tabela_ingredientes.rows[i].cells[1].textContent.replace('R$ ', '').replace(',', '.'));
            despesas += custo_ingredientes;
        }
        custo_do_prato = parseFloat(custo_dado_prato.textContent.replace('R$ ', '').replace(',', '.'));
        
        lucro = custo_do_prato - despesas;
        
        total_despesas.textContent = `R$ ${despesas.toFixed(2).replace('.', ',')}`;
        custo_prato.textContent = `R$ ${custo_do_prato.toFixed(2).replace('.', ',')}`;
        lucro_prato.textContent = `R$ ${lucro.toFixed(2).replace('.', ',')}`;

        localStorage.setItem('total_despesas',despesas);
        localStorage.setItem('custo_prato',custo_do_prato);
        localStorage.setItem('lucro_prato',lucro);
    });
});

