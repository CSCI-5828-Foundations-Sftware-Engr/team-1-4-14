import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern:'cypress/e2e/integration',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});