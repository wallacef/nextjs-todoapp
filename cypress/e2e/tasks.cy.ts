describe('tasks', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000').viewport(1366, 768)
  })
  
  it('should be able create a new task', () => {
    const text = 'Some description task'
    
    cy.get('input').type(text)
    cy.get('#addHandler').click()

    cy.get('.description-task')
      .should('have.length', 1)
      .should('have.text', text)

    cy.get('#totalCreatedValue')
      .should('have.text', 1)

    cy.get('#totalFinishedValue')
      .should('have.text', 0)
  })

  it('should be able initial render with description and zero value', () => {
    cy.get("#totalContent span")
      .first()
      .should('have.text', 'Tarefas criadas')

    cy.get('#totalCreatedValue')
      .should('have.text', 0)

    cy.get("#totalContent span")
      .last()
      .should('have.text', 'Concluídas')

    cy.get('#totalFinishedValue')
      .should('have.text', 0)
  })

  it('should be able show empty container if if there are no tasks created', () => {
    cy.get('#emptyContainer > p')
      .should('have.length', 1)
      .should('have.text', 'Você ainda não tem tarefas cadastradas')

    cy.get('#emptyContainer > span')
      .should('have.length', 1)
      .should('have.text', 'Crie tarefas e organize seus itens a fazer')
  })

  it('should not be able create a new task when description is empty', () => {
    cy.get('#addHandler')
      .should('be.disabled', true)
  })

  it('should be able finish a task after create', () => {
    const text = 'Some description task'
    
    cy.get('input').type(text)
    cy.get('#addHandler').click()

    cy.get('#handleFinish').click()

    cy.get('.description-task')
      .should('have.length', 1)
      .should('have.text', text)
      .should('have.class', 'line-through')

    cy.get('#checkCircleFillIcon')
      .should('exist')
  })

  it('should be able delete a task', () => {
    const text = 'Some description task'
    
    cy.get('input').type(text)
    cy.get('#addHandler').click()
    cy.get('#handleDelete').click()

    cy.get('#emptyContainer')
      .should('exist')

    cy.get('.description-task')
      .should('have.length', 0)
  })
})