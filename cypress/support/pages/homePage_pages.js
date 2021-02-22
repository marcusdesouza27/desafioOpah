const searchBar = 'input[id="strBusca"]'
const itemLista = filtro => `li[term*="{filtro}"]`
const urlSite = Cypress.config().baseUrl

export class HomePage {
    loadHomePage(){
        cy.visit(urlSite)
    }
    searchItem(nomeItem){
        cy.get(searchBar).set(nomeItem)
        cy.get(itemLista(nomeItem), { timeout: Cypress.config().global_timeout }).click
    }
}