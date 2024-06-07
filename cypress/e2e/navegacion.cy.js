describe('Navegación Web', () => {

    it('Probar en ingresar a la primer pagina', () => {
      cy.visit('https://google.com.ar')
    })
  
    it('Recargar la  pagina', () => {
      cy.reload()
    })

    it('Recargar la pagina de forma forzada', () => {
        cy.visit('https://google.com.ar')
        cy.reload(true)
    })

    it('Navegar hacia atras', () => {
        cy.visit('https://google.com.ar')
        cy.visit('https://testers.testerwork.com/tester-account/sign-up')
        //cy.go('back')
    })


  })
