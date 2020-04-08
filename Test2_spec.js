describe('my first test',function(){
    it('visits site and collect', function(){

        cy.visit('opensource-demo.orangehrmlive.com')

        cy.get('#txtUsername').type('Admin')

        cy.get('#txtPassword').type('admin123')

        cy.get('#btnLogin').click()

        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/index.php/dashboard')
    })
})