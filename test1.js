describe('my first test',function(){
    it('test login page',function(){

        cy.visit('http://app.rasxp.com:97')

        cy.url().should('include','/login')

        cy.get('input[id="email"]')
          .clear()
          .type('qc@rasello.com')
          .should('have.value','qc@rasello.com')
          

        cy.get('input[id="password"]')
          .clear()
          .type('rasello@123')
          .should('have.value','rasello@123')

        cy.get('button[type=submit]').click();

        cy.get('.trigger').click()

        cy.contains('Teams').click()
        
          
          
    })
})