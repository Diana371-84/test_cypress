describe('template spec', () => {
  
  //1.CREAR TAREA
  it('CREAR TAREA', () => {
    cy.visit('https://todomvc.com/examples/react/dist/') // Paso 1: Visitar página
    cy.get('.new-todo').type('Crear tarea{enter}') 
    // Mirar en https://docs.cypress.io/api/commands/contains#__docusaurus_skipToContent_fallback
    cy.get('[data-testid="todo-item-label"]').should('have.text','Crear tarea')
  })
  
  //2.MARCAR TAREA COMO COMPLETADA
  it('MARCAR TAREA COMO COMPLETADA', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type('Marcar Tarea{enter}')
    cy.get('[data-testid="todo-item-toggle"]').check()
    cy.get('[data-testid="todo-item-toggle"]').should('be.checked')
  })
   

  //3.DESMARCAR TAREA COMPLETADA
  it('DESMARCAR TAREA COMPLETADA', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type('Desmarcar tarea completada{enter}')
    cy.get('[data-testid="todo-item-toggle"]').check()
    cy.get('[data-testid="todo-item-toggle"]').uncheck()
    cy.get('[data-testid="todo-item-toggle"]').should('not.be.checked')
  })

  //4.EDITAR TAREA
  it('EDITAR TAREA', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type('Editar tarea{enter}')
    cy.get('[data-testid="todo-item-label"]').dblclick()
    cy.get('.view > .input-container > [data-testid="text-input"]').clear()
    cy.get('.view > .input-container > [data-testid="text-input"]').type('Nuevo texto{enter}')
    cy.get('[data-testid="todo-item-label"]').should('have.text','Nuevo texto')
  })

 //5.BORRAR TAREA
 it('BORRAR TAREA', () => {
  cy.visit('https://todomvc.com/examples/react/dist/')
  cy.get('[data-testid="text-input"]').type('Borrar Tarea{enter}')
  cy.get('[data-testid="todo-item-label"]').first().trigger('mouseover')
  cy.get('.todo-list li .destroy').click({ force: true })
  cy.get('.todo-list li').should('have.length', 0)

 })

//6.FILTRAR TAREA
it('FILTRAR TAREA', () => {
  cy.visit('https://todomvc.com/examples/react/dist/')
  cy.get('[data-testid="text-input"]').type('completada{enter}')
  cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').check()
  cy.get('[data-testid="text-input"]').type('completada{enter}')
  cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').check()
  cy.get('[data-testid="text-input"]').type('no completada{enter}')
  cy.get('[data-testid="text-input"]').type('no completada{enter}')
  cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').click()
  cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').should('have.class', 'selected')
  cy.get(':nth-child(2) > a').click()
  cy.get(':nth-child(2) > a').should('have.class', 'selected')
  cy.get(':nth-child(1) > a').click()
 })
})


