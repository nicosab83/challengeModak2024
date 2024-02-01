const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl": 'https://www.aliexpress.us/?gatewayAdapt=glo2usa',
    watchForFileChanges: true,
    defaultCommandTimeout: 5000,
    pageLoadTimeout: 180000
  },
});
