describe('my first test',function(){
    it('describe test',function(){

        cy.visit('http://afya.rasxp.com/')

        cy.get('[placeholder="Email/Username"]')
          .type('admin@rasello.com')
          .should('have.value','admin@rasello.com')


        cy.get('[placeholder="Password"]')
          .type('R@sello@123')
          .should('have.value','R@sello@123')

        cy.get('[type="submit"][class="btn pull-right"]').click()

        cy.get('.dropdown-toggle').click()
        cy.get('.icon-key').click()
    })
})