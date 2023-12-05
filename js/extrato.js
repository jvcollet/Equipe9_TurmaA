document.addEventListener('DOMContentLoaded', function() {
    button_sacar = document.getElementById('button_sacar');
    span_saldo = document.getElementById('span_saldo'); 
    saldo = parseFloat(span_saldo.textContent.replace(',', '.')); 

    button_sacar.addEventListener('click', function() {
        valor_saque = 100;
        if (saldo >= valor_saque) {
            saldo -= valor_saque;
            span_saldo.textContent = saldo.toFixed(2).replace('.', ','); 
        } else {
            document.getElementById('p_mensagem').textContent = 'Saldo insuficiente para realizar o saque.';
        }
    });
});
