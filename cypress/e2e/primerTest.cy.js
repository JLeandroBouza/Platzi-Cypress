describe('Navegación Web', () => {

  it('Probar en ingresar a la primer pagina', () => {
    cy.visit('https://google.com.ar')
  })

  it('Probar en ingresar a la segunda pagina', () => {
    cy.visit('https://github.com/JLeandroBouza')
  })
})