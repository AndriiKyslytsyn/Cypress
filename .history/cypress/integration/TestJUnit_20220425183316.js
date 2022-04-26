const credentialsJunit = require("../fixtures/credentialsJunit")

describe('login to Step and checj header menu', async () => {

    beforeEach(async () => {
        await cy.visit(credentialsJunit.baseURL);
        await cy.get(credentialsJunit.usernameInput).clear();
        await cy.get(credentialsJunit.usernameInput).type(credentialsJunit.username);
        await cy.get(credentialsJunit.passwordInput).clear();
        await cy.get(credentialsJunit.passwordInput).type(credentialsJunit.password);
        //await cy.get(credentialsJunit.submitButton).click();
        await cy.waitUntil(credentialsJunit.submitButton).isClicable();

    })

    it('login to Step', async () => {

        await cy.get(credentialsJunit.homePageElement).should('be.visible');

    })

    it('extended test for tab "Keywords"', async () => {

        await cy.get(credentialsJunit.keywords).click();
        await cy.get(credentialsJunit.keywordsPageElement).should('be.visible');
        await cy.screenshot();

    })

    it('extended test for tab "Parameters"', async () => {

        await cy.get(credentialsJunit.parameters).click();
        await cy.get(credentialsJunit.parametersPageElement).should('be.visible');

    })

    it('extended test for tab "Executions"', async () => {

        await cy.get(credentialsJunit.executions).click();
        await cy.get(credentialsJunit.executionsPageElement).should('be.visible');

    })

    it('extended test for tab "Schedule"', async () => {

        await cy.get(credentialsJunit.schedule).click();
        await cy.get(credentialsJunit.schedulerPageElement).should('be.visible');

    })

    it('extended test for tab "Grid"', async () => {

        await cy.get(credentialsJunit.grid).click();
        await cy.get(credentialsJunit.gridPageElement).should('be.visible');

    })

    it('extended test for tab "Admin"', async () => {

        await cy.get(credentialsJunit.admin).click();
        await cy.get(credentialsJunit.adminPageElement).should('be.visible');

    })
})