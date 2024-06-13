describe('vigenere page tests', () => {

  beforeEach(() => {
    // base URL - 'http://localhost:5173'
    cy.visit('/about')
  })

  it('test the submit button', () => {
    cy.get('[data-cy="contact-btn-submit"]').as('btn').contains('Wysyłanie').should('not.exist')
    cy.get('[data-cy="contact-input-name"]').type('Jan')
    cy.get('[data-cy="contact-input-email"]').type('jan@jan.com')
    cy.get('@btn').click()
    cy.get('@btn').contains('Wysyłanie').should('exist')
  })

  it('test input validation', () => {
    cy.get('[data-cy="contact-input-name"]').type('Jan')
    cy.get('[data-cy="contact-input-email"]').as('email').type('jan.jan')
    cy.get('[data-cy="contact-btn-submit"]').as('btn').click()
    cy.get('[id="email-input"]').should('have.attr', 'class', '_invalid_167to_62')
    cy.get('@email').clear()
    cy.get('@email').type('jan@jan.com')
    cy.get('@btn').click()
    cy.get('[id="email-input"]').should('not.have.attr', 'class')
  })

    
  
})