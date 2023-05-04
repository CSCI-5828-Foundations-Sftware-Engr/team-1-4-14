import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://song-recommender-384417.uc.r.appspot.com',
    specPattern:'cypress/e2e/integration',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
