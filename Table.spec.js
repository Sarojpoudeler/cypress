/// <reference types = "cypress"/>

describe('my test suite', function () {

    it('contains handling web tables', function () {

        cy.visit('https://testautomationpractice.blogspot.com/')

        //1>check value presence anywhere in the table
        cy.get('table[name=BookTable]').contains('td', 'Learn Selenium').should('be.visible')

        //2>check the value present in specific row and column
        cy.get('table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)')
            .contains('Selenium').should('be.visible')



        //3>check value present based on the condition by iterating rows
        cy.get('table[name=BookTable]>tbody>tr td:nth-child(2)')
            .each(($e, index, $list) => {
            const text = $e.text()
            if (text.includes("Amod")) {
                cy.get('table[name=BookTable]>tbody>tr td:nth-child(1)').eq(index).then(function (bname) {
                    const bookName = bname.text()
                    expect(bookName).to.equal("Master In Java")
                })
            }

        })
    })
})