Feature: Adicionar produto no carrinho

    Como: Futuro cliente das Casas Bahia
    Quero: Poder adicionar um produto no carrinho
    De: Modo que possa logar no sistema apos adicionar o produto no carrinho

    Background: Pre-requisitos
        Given usuario esta na homepage do site das Casas Bahia

    @adicionarProdutosCarrinho
    Scenario: Adicionar Produtos ao Carrinho
        When usuario efetua a pesquisa de um produto
        And usuario adiciona o produto ao carrinho
        And usuario seleciona o servico
        And usuario encaminha o carrinho para o checkout
        Then o site e redirecionado para a pagina de checkout