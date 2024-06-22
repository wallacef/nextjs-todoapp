describe('should be able create a new task', () => {
  it('passes', () => {
    const text = 'Some description task'
    cy.visit('http://localhost:3000').viewport(1366, 768)
    cy.get('input').type(text)
    cy.get('#addHandler').click()

    cy.wait(100)

    cy.get('.description-task')
      .should('have.length', 1)
      .should('have.text', text)
  })
})