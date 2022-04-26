describe('Test task on cypress'. )

cy.visit('https://dev.asset.accountant')
cy.get('a[class="btn btn-lg btn-block btn-tertiary bold text-dark Login-create"]').click()