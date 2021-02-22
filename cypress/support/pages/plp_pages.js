const itemResult = '//p[contains(text(),"Apple iPhone 7")]'
const headingPesquisa = pesquisa =>  `//h1[contains(., "Você buscou por ${pesquisa}")]`

export class ListaProdutos {
    addItemCarrinho(nome) {
        cy.get(headingPesquisa(nome), { timeout: Cypress.config().global_timeout }).should('contain', `Você buscou por ${nome}`)
        cy.xpath(itemResult(nome)).click()
    }
}