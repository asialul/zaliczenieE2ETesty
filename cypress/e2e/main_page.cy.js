describe('main page navigation tests', () => {

  beforeEach(() => {
    // base URL - 'http://localhost:5173'
    cy.visit('/')
  })
  
  it('check headings are correct', () => {
    cy.get('main').find('h1').contains(/wybierz szyfr/i)
    cy.get('ul').should('have.class', 'lista-szyfry').then(el => expect(el).has.length(2))

  it('check links are correctly defined', () => {

  })
  })
})