const spanAcessLogin = '//em[contains(text(),"Acesse com seu e-mail")]'
const inputEmailLogin = 'class="iEmail"'

export class CheckoutPage{
    validaCheckout(){
        cy.url().should('eq', 'https://carrinho.casasbahia.com.br/Checkout#login')
        cy.xpath(spanAcessLogin).should('contain', 'Acesse com seu e-mail')
    }

}