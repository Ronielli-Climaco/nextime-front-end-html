
//Filtro campo telefone
document.getElementById("telefone").addEventListener("input", function (e) {

    let valor = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito

    if (valor.length > 0) {
        valor = valor.replace(/^(\d{2})(\d{1})(\d{4})(\d{0,4}).*/, "$1 $2 $3 $4"); // Adiciona espaço após o DDD
    }

    e.target.value = valor.trim();

});

    document.getElementById("formDadosCliente").addEventListener("submit", function (e) {
        
        const telefone = document.getElementById("telefone").value.replace(/\D/g, ''); // Remove tudo que não é dígito
        
        if (telefone.length < 11) {
            alert("O número de telefone deve ter entre 11 dígitos. Ex: (XX) X XXXX-XXXX");
            e.preventDefault(); // Impede o envio do formulário
        }

    });