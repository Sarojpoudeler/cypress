// describe('my first test',function(){
//     it('find the content "type"',function(){
//         cy.visit('https://example.cypress.io')

//         cy.contains('type').click()

//         cy.url()
//             .should('include','/commands/actions')
//     })
// })

describe('my first test', function(){
    it('gets, types and asserts',function(){

    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    cy.url()
        .should('include','/commands/actions')

    cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value','fake@email.com')
})
})