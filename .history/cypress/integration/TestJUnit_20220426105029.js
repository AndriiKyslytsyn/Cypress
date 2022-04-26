import 'cypress-wait-until';
import ExecutionsPage from '../page/ExecutionsPage';
import KeywordsPage from '../page/KeywordsPage';
import MainPage from '../page/MainPage';
import ParametersPage from '../page/ParametersPage';
import SchedulerPage from '../page/SchedulerPage';
const credentialsJunit = require("../fixtures/credentialsJunit")

describe('login to Step and checj header menu', async () => {

    beforeEach(async () => {

        MainPage.logintoStep()

    })

    it('login to Step', async () => {

        await cy.get(MainPage.homePageElement).should('be.visible');

    })

    it('extended test for tab "Keywords"', async () => {

        await cy.get(MainPage.keywords).click();
        await cy.get(KeywordsPage.keywordsPageElement).should('be.visible');
        await cy.screenshot();

    })

    it('extended test for tab "Parameters"', async () => {

        await cy.get(MainPage.parameters).click();
        await cy.get(ParametersPage.parametersPageElement).should('be.visible');

    })

    it('extended test for tab "Executions"', async () => {

        await cy.get(MainPage.executions).click();
        await cy.get(ExecutionsPage.executionsPageElement).should('be.visible');

    })

    it('extended test for tab "Schedule"', async () => {

        await cy.get(MainPage.schedule).click();
        await cy.get(SchedulerPage.schedulerPageElement).should('be.visible');

    })

    it('extended test for tab "Grid"', async () => {

        await cy.get(MainPage.grid).click();
        await cy.get(credentialsJunit.gridPageElement).should('be.visible');

    })

    it('extended test for tab "Admin"', async () => {

        await cy.get(credentialsJunit.admin).click();
        await cy.get(credentialsJunit.adminPageElement).should('be.visible');

    })
})