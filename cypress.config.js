const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'hp9zn2',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
