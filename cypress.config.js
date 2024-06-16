const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

      on('task',{
        log(message){
         console.log('Mensaje del console log del task ' + message)
         return null
        } 
     })
    
      // implement node event listeners here
    },
  baseUrl: 'https://demoqa.com'
  },
 
});
