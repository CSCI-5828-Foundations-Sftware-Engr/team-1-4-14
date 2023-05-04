import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "q2cjw9",
  e2e: {
    specPattern:'cypress/e2e/integration',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
