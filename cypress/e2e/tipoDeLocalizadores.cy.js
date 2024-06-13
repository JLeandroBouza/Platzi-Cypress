

describe('Tipo de Localizadores', () => {
  

    it('Obtenerlo por medio de un TAG', () => {
      cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
      cy.visit('/automation-practice-form')
      cy.get('input')
    
    })

    it('Obtenerlo por medio de un atributo', () => {
      cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
      cy.visit('/automation-practice-form')
      cy.get('[placeholder="First Name"]')
    })

    it('Obtenerlo por medio de un atributo y un tag', () => {
      cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
      cy.visit('/automation-practice-form')
      cy.get('input[placeholder="First Name"]')
    })

    it('Obtenerlo por medio de un ID', () => {
      cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
      cy.visit('/automation-practice-form')
      cy.get('#firstName')
    })

    it('Obtenerlo por medio de una clase', () => {
      cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
      cy.visit('/automation-practice-form')
      cy.get('.mr-sm-2.form-control') // son dos clases por eso se usa el punto para separarlas.
    })

    it('Usando contains', () => {
      cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
      cy.visit('/automation-practice-form')
      cy.contains('Reading')
      cy.contains('.header-wrapper','Widgets')
    })



  })