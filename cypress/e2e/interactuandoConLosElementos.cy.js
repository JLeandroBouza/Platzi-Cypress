describe('Interactuar con los elementos', () => {

    it ('Click', ()=>{
        cy.visit('/buttons')
        cy.get('button').eq(3).click()
        cy.get('#dynamicClickMessage').should('be.visible').and('contain', 'You have donde a dynamic click')
    
    })

    it ('Doble Click', ()=>{
        cy.visit('/buttons')
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#dynamicClickMessage').should('be.visible').and('contain', 'You have donde a double click')
    
    })

    
    it ('Right Click', ()=>{
        cy.visit('/buttons')
        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage').should('be.visible').and('contain', 'You have donde a double click')
    
    })

    it ('Force Click', ()=>{
        cy.visit('/dynamic-properties')
        cy.get('#enableAfter').click({timeout: 0, force: true})
             
    
    })

    it ('Force Click', ()=>{
        cy.visit('/dynamic-properties')
        cy.get('#enableAfter').click({timeout: 0, force: true})
             
    
    })

    it ('Input type text', ()=>{
        cy.visit('/automation-practice-form')
        cy.get('#firstName').type('Leandro')
        cy.get('#lastName').type('Bouza')     
        
        cy.get('#firstName').type('{selectAll}{backspace}')
        cy.get('#firstName').type('Testing')
    
    })

    it ('Checkboxes y radio botones', ()=>{
        cy.visit('/automation-practice-form')
        //cy.get('#gender-radio-1').click({force: true})
        //cy.get('#gender-radio-1').check({force: true})
        cy.get('label[for="gender-radio-1"]').click()
        cy.get('#hobbies-checkbox-1').click()
           
    })

    })