describe('2nd Scenario', () => {
    it('2nd Scenario',
        function () {
            cy.visit('https://demoqa.com/browser-windows', {
                onBeforeLoad(win) {
                    cy.stub(win, 'open').returns({}).as('open')
                }
            })
            cy.get('#windowButton').click()
            cy.get('@open').should('have.been.calledWith', '/sample', '_blank')
            cy.window().its('open').should('be.called')
            cy.visit('https://demoqa.com/sample')
            cy.get('h1').should("have.text", "This is a sample page");

        });

});
