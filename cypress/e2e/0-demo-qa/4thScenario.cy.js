describe('4th Scenario', () => {
    it('4th Scenario', function () {
        cy.visit('http://demoqa.com/');
        cy.get('.category-cards > :nth-child(4)').click();
        cy.get(':nth-child(4) > .element-list > .menu-list > #item-4 > .text').click();
        cy.get('#startStopButton').should('contain.text', 'Start');
        cy.get('#startStopButton').click();
        cy.get('.progress div').should('contain.text', '21%');
        cy.get('#startStopButton').click();
        cy.get('#startStopButton').should('contain.text', 'Start');
        cy.get('.progress div').should('contain.text', '21%');
        cy.get('#startStopButton').click();
        cy.get('.progress div', { timeout: 20000 }).should('have.text', '100%');
        cy.get('#resetButton').should('contain.text', 'Reset');
        cy.wait(1000);
        cy.get('#resetButton').click();
        cy.get('.progress div').should('have.text', '0%');
        });
});