describe('Tipo de Localizadores', () => {

    it('Probar en ingresar a la primer pagina', () => {
      cy.visit('https://google.com.ar')
    })
  
    it('Recargar la  pagina', () => {
      cy.reload()
    })


  })