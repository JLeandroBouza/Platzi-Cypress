describe('Tipo de Localizadores', () => {
  

    it('Para evitar las repetición', () => {
      cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
      cy.visit('/automation-practice-form')
      cy.get('input[placeholder="First Name"]').parents().then(() =>{

        const input = form.find('input')
        const divs = form.find ('div')
        const labels = form.find ('label')

      })

    
    })



  })