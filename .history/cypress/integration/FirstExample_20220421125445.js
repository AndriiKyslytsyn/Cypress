const request



it('registers user', () => {
  cy.visit('/')

  const username = 'Test'
  const password = 'MySecreT'

  cy.get('#create-account').should('be.visible').click()
  cy.get('.register-form')
    .should('be.visible')
    .within(() => {
      cy.get('[placeholder=username]')
        .type(username)
        .should('have.value', username)
      cy.get('[placeholder=password]').type(password)

      cy.contains('button', 'create').click()
    })

  cy.get('.login-form')
    .should('be.visible')
    .within(() => {
      cy.get('[placeholder=username]')
        .type(username)
        .should('have.value', username)
      cy.get('[placeholder=password]').type(password)

      cy.contains('button', 'login').click()
    })

  // if the user has been created and could log in
  // we should be redirected to the home page with the rooms
  cy.location('pathname').should('equal', '/rooms')
})