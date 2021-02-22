Feature: Cadastro de Novos Usuarios

    Como: Futuro cliente do Casas Bahia Quero: Poder cadastrar meus dados no sistema De: Modo que possa usufruir do acesso, para o mesmo para efetuar compra de produtos.

    Background: Pre-requisitos
        Given usuario está na Homepage

    @registerSuccess
    Scenario: Cadastro Valido
        When usuario acessa a pagina de cadastro
        And usuario preenche o campo "Nome Completo"
        And usuario preenche o campo "CPF"
        And usuario preenche o campo "Data de Nascimento"
        And usuario preenche o campo "E-mail"
        And usuario preenche o campo "Celular"
        And usuario preenche o campo "Senha"
        And usuario clica no botao Concluir
        Then novo usuario deve ser registrado
        And o usuario deve ser autenticado com o token "1111"

    @MissingandatoryField
    Scenario: Validar campo obrigatorio
        When usuario acessa a pagina de cadastro
        And usuario preenche o campo "Nome Completo"
        And usuario nao preenche o campo "CPF"
        And usuario preenche o campo "Data de Nascimento"
        And usuario preenche o campo "E-mail"
        And usuario preenche o campo "Celular"
        And usuario preenche o campo "Senha"
        And usuario clica no botao Concluir
        Then sistema deve informar que o preenchimento do campo CPF é obrigatorio
        And usuario nao deve ser cadastrado

    @registerUserAlreadyExists
    Scenario: Cadastro com usuario pre-existente
        When usuario acessa a pagina de cadastro
        And usuario tenta criar uma nova conta com dados ja existentes
        And usuario clica no botao Concluir
        Then sistema deve informar que o usuario ja existe na base de dados
        And usuario nao deve ser cadastrado
    
        @registerCPFInvalido
    Scenario: Cadastro com CPF Invalido
        When usuario acessa a pagina de cadastro
        And usuario tenta criar uma nova conta inserindo um CPF Invalido
        And usuario clica no botao Concluir
        Then sistema deve informar que o CPF é invalido
        And usuario nao deve ser cadastrado