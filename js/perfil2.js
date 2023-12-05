document.addEventListener('DOMContentLoaded', function() {
    finalizar_prato = document.querySelector('.link[href="perfil1.html"]');
    finalizar_prato.addEventListener('click', function(event) {
        nome_prato = document.querySelector('input[type="text"]').value;
        descricao_prato = document.querySelectorAll('input[type="text"]')[1].value;

        pratos = JSON.parse(localStorage.getItem('pratos') || '[]');
        pratos.push({ nome: nome_prato, descricao: descricao_prato });
        localStorage.setItem('pratos', JSON.stringify(pratos));
    });
});
