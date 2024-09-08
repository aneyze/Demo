describe('3rd Scenario', () => {
    it('3rd Scenario', function() {
        cy.visit('https://demoqa.com/');
        cy.get('.category-cards > :nth-child(1)').click();
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-3 > .text').click();
        cy.get('#addNewRecordButton').click();
        cy.get('#firstName').clear();
        cy.get('#firstName').type('FirstName Test');
        cy.get('#lastName').clear();
        cy.get('#lastName').type('LastName Test');
        cy.get('#userEmail').clear();
        cy.get('#userEmail').type('emailtest@test.com');
        cy.get('#age').clear();
        cy.get('#age').type('35');
        cy.get('#salary').clear();
        cy.get('#salary').type('12000');
        cy.get('#department').clear();
        cy.get('#department').type('IT');
        cy.get('#submit').click();
        cy.get(':nth-child(4) > .rt-tr > :nth-child(1)').should('have.text', 'FirstName Test');
        cy.get(':nth-child(4) > .rt-tr > :nth-child(2)').should('have.text', 'LastName Test');
        cy.get(':nth-child(4) > .rt-tr > :nth-child(4)').should('have.text', 'emailtest@test.com');
        cy.get(':nth-child(4) > .rt-tr > [style="flex: 40 0 auto; width: 40px; max-width: 40px;"]').should('have.text', '35');
        cy.get(':nth-child(4) > .rt-tr > :nth-child(5)').should('have.text', '12000');
        cy.get(':nth-child(4) > .rt-tr > :nth-child(6)').should('have.text', 'IT');
        cy.get(':nth-child(4) > .rt-tr > :nth-child(7) .action-buttons > span[title="Delete"]').click();
    });

    it('12LinesScenario', function() {
        cy.visit('https://demoqa.com/');
        cy.get('.category-cards > :nth-child(1)').click();
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-3 > .text').click();
        let firstName;
        let lastName;
        let email;
        for(let i=0; i<11; i++){
            firstName = 'First Name Test' + i;
            lastName = 'Last Name Test' + i;
            email = 'emailtest' + i + '@test.com'
            cy.get('#addNewRecordButton').click();
            cy.get('#firstName').clear();
            cy.get('#firstName').type(firstName);
            cy.get('#lastName').clear();
            cy.get('#lastName').type(lastName);
            cy.get('#userEmail').clear();
            cy.get('#userEmail').type(email);
            cy.get('#age').clear();
            cy.get('#age').type('35');
            cy.get('#salary').clear();
            cy.get('#salary').type('12000');
            cy.get('#department').clear();
            cy.get('#department').type('IT');
            cy.get('#submit').click();
            cy.get(':nth-child(4) > .rt-tr > :nth-child(1)').should('contain.text', 'First Name');
            cy.get(':nth-child(4) > .rt-tr > :nth-child(2)').should('contain.text', 'Last Name');
            cy.get(':nth-child(4) > .rt-tr > :nth-child(4)').should('contain.text.text', 'emailtest');
            cy.get(':nth-child(4) > .rt-tr > [style="flex: 40 0 auto; width: 40px; max-width: 40px;"]').should('have.text', '35');
            cy.get(':nth-child(4) > .rt-tr > :nth-child(5)').should('have.text', '12000');
            cy.get(':nth-child(4) > .rt-tr > :nth-child(6)').should('have.text', 'IT');
            cy.pause;
        }
        for(let j=0; j<11; j++) {
            cy.get(':nth-child(4) > .rt-tr > :nth-child(7) .action-buttons > span[title="Delete"]').click();
        }
    });
});
