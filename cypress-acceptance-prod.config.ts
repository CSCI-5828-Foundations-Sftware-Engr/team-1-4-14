import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "q2cjw9",
  e2e: {
    baseUrl: 'https://song-recommender-384417.uc.r.appspot.com',
    specPattern:'cypress/e2e/acceptance',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
