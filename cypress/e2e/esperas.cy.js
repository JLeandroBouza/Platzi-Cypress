describe('Esperas por elementos', () => {

  beforeEach(()=>{
    cy.visit('https://www.platzi.com/')
  })

    it('Esperar por un tiempo definido', () => {
      cy.wait(5000)
    })
  
    it('Esperar por un elemento', () => {
      cy.get('.buttonLogin-cta',{timeout:6000})
    })

    it('Esperar por un elemento y hacemos una aserción', () => {
      cy.get('.buttonLogin-cta',{timeout:6000}).should('be.visible')
    })
  
  })