describe('vigenere page tests', () => {

  beforeEach(() => {
    // base URL - 'http://localhost:5173'
    cy.visit('/vigenere')
  })

  // testVigenereEncryption and testVigenereDecryption command -> cypress\support\commands.js

  it('test encryption', () => {
    cy.testVigenereEncryption('Basia ma psa', 'pies', 'QIWAP QS XWS')
    cy.testVigenereEncryption('Janek ma chomika', 'chomik', 'LHBQS OH OPYOPYM')
    cy.testVigenereEncryption('Ala ma kota', 'kot', 'KZT AT YHDO')
  })

  it('test decryption', () => {
    cy.testVigenereDecryption('QIWAP QS XWS', 'pies', 'Basia ma psa')
    cy.testVigenereDecryption('LHBQS OH OPYOPYM', 'chomik', 'Janek ma chomika')
    cy.testVigenereDecryption('KZT AT YHDO', 'kot', 'Ala ma kota')
  })
    
  
})
