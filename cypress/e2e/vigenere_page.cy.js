describe('vigenere page tests', () => {

  beforeEach(() => {
    // base URL - 'http://localhost:5173'
    cy.visit('/vigenere')
  })

  it('check encryption1', () => {
    cy.get('[name="text1"]').type('Ala ma kota')
    cy.get('[name="keyword1"]').type('kot')
    cy.get('[id="button1"]').click()
    cy.on('window:alert', t => {
      expect(t).to.contains('KZT AT YHDO')
    })
  })

    it('check encryption2', () => {
      cy.get('[name="text1"]').type('Ala ma psa')
      cy.get('[name="keyword1"]').type('pies')
      cy.get('[id="button1"]').click()
      cy.on('window:alert', t => {
        expect(t).to.contains('KZT AT YHDO')
      })

  })
    
  
})
