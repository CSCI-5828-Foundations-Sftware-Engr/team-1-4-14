import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "q2cjw9",
  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern:'cypress/e2e/acceptance',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
