const opcaoSeguro = 'input[data-idservicosplano="2231"]'
const opcaoGarantia = 'input[id="ew-option-01"]'
const precoServico = nomeservicopreco =>  `//div[@class="${nomeservicopreco}"]/p[@class="valorPlano"]`
const opcaoServico = nomeServico => `//div[@class="${nomeServico}"]/p[@class="nomeplano"]`
const totalCarrinhoServico = 'div[class="vltTotalProdutoComServico"]'
const btnContinuar = 'button[data-id="btnContinuar"]'

const qtdSku = 'input[data-id="qtdeSku"]'
const carrinhoCEP = 'input[id="Cep"]'
const btnCalcFrete = '#btnCalcularFrete'
const spanFrete = 'span[data-id="prazoEntregaNormal"]'
const btnComprar = 'a[data-id="btnComprar"]'

export class CarrinhoPage{
    selecionaSeguro(nomeSeguro, precoServico){
        cy.get(opcaoSeguro).click();
        cy.xpath(opcaoServico(nomeSeguro), { timeout: Cypress.config().global_timeout }).should('contain', nomeSeguro)
        cy.xpath(precoServico(nomeSeguro), { timeout: Cypress.config().global_timeout }).should('contain', precoServico)
        cy.get(totalCarrinhoServico).should('contain', precoServico + preçoProduto);
    }

    selecionaGarantia(nomeGarantia, precoServico){
        cy.get(opcaoGarantia).click();
        cy.xpath(opcaoServico(nomeGarantia), { timeout: Cypress.config().global_timeout }).should('contain', nomeGarantia)
        cy.xpath(precoServico(nomeGarantia), { timeout: Cypress.config().global_timeout }).should('contain', precoServico)
    }

    validaSubTotal(){
        cy.get(totalCarrinhoServico).should('contain', 'R$ 3.197,00');
    }

    avancaCarrinho(){
        btnContinuar.click();
    }

    carrinhoFinaliza(qtde, cep){
        cy.get(qtdSku).set(qtde)
        cy.get(carrinhoCEP).set(cep)
        cy.get(btnCalcFrete).click();
        cy.get(spanFrete, { timeout: Cypress.config().global_timeout }).should('contain', "Em até 6 dias úteis")
        cy.get(btnComprar).click();
    }

}