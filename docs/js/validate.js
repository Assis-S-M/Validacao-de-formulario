$(document).ready(function () {
    $("#frmCadastro").validate({
        rules: {
            nome: {
                required: true,
                minlength: 3,
                maxlength: 30,
                alphanumeric: true
            },
            email: {
                required: true,
                email: true
            },
            cpf: {
                required: true,
                cpfBR: true
            },
            endereco: {
                required: true,
            },
            telfix: {
                required: true,
            },
            dataNascimento: {
                required: true,
                date: true
            },
            cep: {
                required: true,
                postalcodeBR: true
            },
            numRes: {
                required: true,
                Number: true
            },
            senha: {
                required: true,
                minlength: 8,
                maxlength: 20
            },
            confSenha: {
                required: true,
                equalTo: '#senha',
                minlength: 8,
                maxlength: 20
            },
            cidade: {
                required: true
            },
            uf: {
                required: true
            },
            rua: {
                required: true
            },
            bairro: {
                required: true
            },
            telCel: {
                required: true
            },
            placa: {
                required: true
            },
            user: {
                required: true
            }
        }
    })
})
