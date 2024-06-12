// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('testVigenereEncryption', (text, keyword, output) => {
    cy.get('[name="text1"]').type(text)
    cy.get('[name="keyword1"]').type(keyword)
    cy.get('[id="button1"]').click()
    cy.once('window:alert', t => expect(t).to.contains(output))
    cy.get('[name="text1"]').clear()
    cy.get('[name="keyword1"]').clear()
})

Cypress.Commands.add('testVigenereDecryption', (text, keyword, output) => {
    cy.get('[name="text2"]').type(text)
    cy.get('[name="keyword2"]').type(keyword)
    cy.get('[id="button2"]').click()
    cy.once('window:alert', t => expect(t).to.contains(output))
    cy.get('[name="text2"]').clear()
    cy.get('[name="keyword2"]').clear()
})