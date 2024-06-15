describe('Tipo de Localizadores', () => {

    //Los before pueden ir antes de los describe tambien

    Before (()=>{
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
        cy.visit('/automation-practice-form')
    })
  
    after (()=>{
        cy.visit('/')
    })

    it('Asersciones 1', () => {
      cy.url().should('include', 'demoqa.com')
      cy.get('#firstName').should('be.visible').should('have.atrr','placeholder','First Name')

    
    })

    
    it('Asersciones 2', () => {

        cy.url().should('include', 'demoqa.com')
        cy.get('#firstName').then((element)=>{

            expect(element).to.be.visible
            expect(element).to.have.attr('placeholder','First Name')

        })
  
      
    })

    it('Asersciones 3', () => {

        cy.url().should('include', 'demoqa.com')
        cy.get('#firstName').then((element)=>{

            expect(element).to.be.visible
            expect(element).to.have.attr('placeholder','First Name')
            assert.equal(element.atrr('placeholder'),'First Name')

        })
  
      
    })



  })