describe('Tipo de Localizadores', () => {
  

    it('Asersciones 1', () => {

      cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
      cy.visit('/automation-practice-form')
      cy.url().should('include', 'demoqa.com')
      cy.get('#firstName').should('be.visible').should('have.atrr','placeholder','First Name')

    
    })

    
    it('Asersciones 2', () => {

        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
        cy.visit('/automation-practice-form')
        cy.url().should('include', 'demoqa.com')
        cy.get('#firstName').then((element)=>{

            expect(element).to.be.visible
            expect(element).to.have.attr('placeholder','First Name')

        })
  
      
    })

    it('Asersciones 3', () => {

        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
        cy.visit('/automation-practice-form')
        cy.url().should('include', 'demoqa.com')
        cy.get('#firstName').then((element)=>{

            expect(element).to.be.visible
            expect(element).to.have.attr('placeholder','First Name')

        })
  
      
    })



  })