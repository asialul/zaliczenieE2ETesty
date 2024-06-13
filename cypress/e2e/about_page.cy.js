describe('vigenere page tests', () => {

  beforeEach(() => {
    // base URL - 'http://localhost:5173'
    cy.visit('/about')
  })

  it('test the submit button', () => {
    cy.get('[data-cy="contact-btn-submit"]').contains('Wysyłanie').should('not.exist')
    cy.get('[data-cy="contact-input-name"]').type('Jan')
    cy.get('[data-cy="contact-input-email"]').type('jan@jan.com')
    cy.get('[data-cy="contact-btn-submit"]').click()
    cy.get('[data-cy="contact-btn-submit"]').contains('Wysyłanie').should('exist')
  })

  it('test input validation', () => {
    
  })

    
  
})