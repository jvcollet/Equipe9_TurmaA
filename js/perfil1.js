document.addEventListener('DOMContentLoaded', function() {
    pratos = JSON.parse(localStorage.getItem('pratos') || '[]');
    pratosContainer = document.querySelector('section'); 
    pratos.forEach(function(prato) {
        div = document.createElement('div');
        div.className = 'borda_pratos';
        div.innerHTML = `
            <img class="imagem_prato" src="caminho/para/imagem/padrão.png" alt="prato">
            <h3 class="nome_prato">${prato.nome}</h3>
            <h5 class="descricao_prato">${prato.descricao}</h5>`;
        pratosContainer.appendChild(div);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    botton_remover = document.getElementById('remover_todos_pratos');

    botton_remover.addEventListener('click', function() {
        if (confirm('Tem certeza que deseja remover todos os pratos?')) {
            localStorage.removeItem('pratos');
            window.history.back();
        }
    });
});

