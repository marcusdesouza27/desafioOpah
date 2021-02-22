/* global Given, Then, When */
/// <reference types="cypress" />

const { HomePage } = require("../pages/homePage_pages");
const { ListaProdutos } = require("../pages/plp_pages");
const { DetalheProduto } = require("../pages/pdp_pages");
const { CarrinhoPage } = require("../pages/carrinho_pages");
const { CheckoutPage } = require("../pages/checkout_pages");
const homePage = new HomePage();
const listaProdutos = new ListaProdutos();
const detalheProduto = new DetalheProduto(); 
const carrinhoPage = new CarrinhoPage();
const checkoutPage = new CheckoutPage();

Given("usuario esta na homepage do site das Casas Bahia", () => {
    homePage.loadHomePage();

})

When("usuario efetua a pesquisa de um produto", () => {
    homePage.searchItem(Cypress.config().itemPesquisa);
})
When("usuario adiciona o produto ao carrinho", () => {
    listaProdutos.addItemCarrinho(Cypress.config().itemPesquisa);
    detalheProduto.validaProdutoPDP(Cypress.config().itemPesquisa);
    detalheProduto.addProductToCart();    
})

When('usuario seleciona o servico', () => {
    carrinhoPage.selecionaSeguro('Roubo e Furto Qualificado', 'R$ 574,75');
    carrinhoPage.selecionaGarantia('Garantia Estendida', 'R$ 324,16');
    carrinhoPage.validaSubTotal();
    carrinhoPage.avancaCarrinho();
})

When("usuario encaminha o carrinho para o checkout", () => {
    carrinhoPage.carrinhoFinaliza('2', '86400-000');
})

Then("o site e redirecionado para a pagina de checkout", () => {
    checkoutPage.validaCheckout();
})