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

    it ('Extrayendo info', ()=>{
        cy.visit('/automation-practice-form')
        cy.get('#firstName').as('nombre')
        cy.get('@nombre').type('Leandro')

        cy.get('@nombre').then (($nombre)=>{

            expect($nombre.val()).to.equal('Leandro')
        })
    })

    
    it ('Compartir info', ()=>{
        cy.visit('/automation-practice-form')
        cy.get('#firstName').as('nombre')
        cy.get('@nombre').type('Leandro')
    
        cy.get('@nombre').then (($nombre)=>{
    
            expect($nombre.val()).to.equal('Leandro')
        })
           
    })


    it ('Interactuando con los dropdown(select)', ()=>{
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get('.custom-select').select(10)
        cy.get('.custom-select').select('3').should('have.value', '3')
        cy.get('.custom-select').select('Greece').should('have.value', '4')
    })

    it ('Interactuando con los dropdown(select) dinamico', ()=>{
        cy.visit('https://react-select.com/home')
        cy.get('#react-select-6-input').type(' ')
        cy.get('#react-select-6-listbox').children().children().each(($el,index,$list)=>{

            if ($el.text()=== 'Red'){
                $el.on('click')
                //$el.click()
            }

        })

        cy.get('#react-select-6-3').click()
    })

    it ('Interactuando con tablas', ()=>{
        cy.visit('https://www.w3schools.com/html/html_tables.asp')
        cy.get('#customers')
            .find('th')
            .each(($el)=>{
                cy.log($el.text())
            })
        
        cy.get('#customers')
            .find('th')
            .first()
            .invoke('text')
            .should('equal', 'Company')
        
        cy.get('#customers')
            .find('th')
            .eq(1)
            .invoke('text')
            .should('equal', 'Contact')
        
        cy.get('#customers')
            .find('th')
            .eq(2)
            .invoke('text')
            .should('equal', 'Country')
        
        cy.get('#customers').find('tr').should('have.length', 7)

        
    })

    it ('Interactuando con los date pickers', ()=>{
        cy.visit('https://material.angular.io/components/datepicker/overview')
        cy.get('datepicker-overview-example').find('input').eq(0).type('11/03/2024')



        cy.get('datepicker-overview-example').find('svg').click()
    })

    it ('Interactuando con modales', ()=>{
        cy.visit('/modal-dialog')
        cy.get('#showSmallModal').click()
        cy.get('#closeSmallModal').click()
        
    })

    it ('Interactuando con alertas o pop-ups', ()=>{
        cy.visit('/alerts') //tener en cuenta que cypress por defecto acepta las alertas.
        cy.get('#confirmButton').click()

        const stub = cy.stub
        cy.on('window:confirm',stub)
        cy.get('#confirmButton').click().then (()=>{
            expect(stub.getCall(0)).to.be.calledWith('Do you confirm action?')
        })
        
        cy.contains('You selected Ok').should('exist')

        //Otra forma de hacerlo

        cy.get('#confirmButton').click()
        cy.on('window:confirm',(confirm)=>{
            expect (confirm).to.equal('Do you confirm action?')
        })


        //Para rechazar las alertas 
        cy.get('#confirmButton').click()
        cy.on('window:confirm',(confirm)=>{
            expect (confirm).to.equal('Do you confirm action?')
            return false
        })

        cy.contains('You selected Cancel').should('exist')


    })

    it ('Interactuando con los tool tips', ()=>{
        cy.visit('/tool-tips')
        cy.get('#toolTipButton').trigger('mouseover')
        cy.contains('You hovered over the Button').should('exist')
        cy.get('#toolTipButton').trigger('mouseout').should('not.exist')
         
    })

    it ('Interactuando con los drag and Drop', ()=>{
        cy.visit('/dragabble')
        cy.get('#dragBox').trigger('mousedown',{wich: 1 ,pageX:600, pageY:100})
        .trigger('mousemove', {wich: 1, pageX: 100, pageY: 600})
        .trigger('mouseup')
    
         
    })




})