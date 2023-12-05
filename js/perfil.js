document.addEventListener('DOMContentLoaded', function() {
    button_restaurante = document.getElementById('button1_perfil');
    nome_restaurante = document.getElementById('nome_restaurante');

    button_restaurante.addEventListener('click', function() {
        novo_nome_restaurante = prompt('Digite o novo nome do restaurante:', nome_restaurante.textContent);
            
        nome_restaurante.textContent = novo_nome_restaurante;
    });
});
document.addEventListener('DOMContentLoaded', function() {
    button_endereco = document.getElementById('button2_perfil');
    nome_endereco = document.getElementById('nome_endereco');

    button_endereco.addEventListener('click', function() {
        novo_nome_endereco = prompt('Digite o novo nome do endereço:', nome_endereco.textContent);
            
        nome_endereco.textContent = novo_nome_endereco;
    });
});
document.addEventListener('DOMContentLoaded', function() {
    button_descricao = document.getElementById('button3_perfil');
    descricao = document.getElementById('descricao');

    button_descricao.addEventListener('click', function() {
        novo_descricao = prompt('Digite o novo nome do endereço:', descricao.textContent);
            
        descricao.textContent = novo_descricao;
    });
});