describe('async function', function () {

    beforeEach(function () {
        cy.visit('https://the-internet.herokuapp.com/checkboxes')

    })

    it('dropdown', function () {
        cy.get('#dropdown').select('1')
        cy.get('#dropdown').children().first()
            .then(function (dowpdownel) {
                cy.log(dowpdownel.text())
            })


        // cy.get('h1').then(function(heading){
        //     var headingstr = heading.text()
        //     cy.log(headingstr)

        //     console.log('i am inside function')

        // })
        // console.log('i am outside the function')
    })

    it.only('checkboxes', function () {
        cy.get('[type=checkbox]').first().check()
        cy.get('[type=checkbox]:eq(1)').should('be.checked')
        cy.select('Elemental selenium').click()
    })
})