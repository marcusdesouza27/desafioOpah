const itemTitle = 'div:nth-child(3) > div > div > div.css-1qm1lh.eym5xli0 > h1'
const btnComprar = 'button[title="Comprar"]'
const productPrice = 'span[class="product-price-value"]'
const productDescription = 'section[class="accordion css-1wj5lwu e1uc2v350"]'

export class DetalhesProduto {
    validaProdutoPDP(titulo){
        cy.get(itemTitle).should('contain', titulo)
        cy.get(productDescription).to.not.be.empty
    }

    addProductToCart(){
        cy.get(btnComprar).click();
    }

}