
import credentialsJunit from '../fixtures/credentialsJunit';
import AdminPage from '../page/AdminPage';
import ExecutionsPage from '../page/ExecutionsPage';
import GridPage from '../page/GridPage';
import KeywordsPage from '../page/KeywordsPage';
import MainPage from '../page/MainPage';
import ParametersPage from '../page/ParametersPage';
import SchedulerPage from '../page/SchedulerPage';


describe('login to Step and checj header menu', async () => {

    beforeEach(async () => {
MainPage.l
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
        await cy.get(GridPage.gridPageElement).should('be.visible');

    })

    it('extended test for tab "Admin"', async () => {

        await cy.get(MainPage.admin).click();
        await cy.get(AdminPage.adminPageElement).should('be.visible');

    })
})