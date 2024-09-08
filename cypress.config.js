const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  video: true,
  reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: 'cypress/results',
      charts: true,
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: true,
      overwrite: true,
      videoOnFailOnly: true,
    },
  e2e: {
    retries: 1,
    viewportWidth: 1200,
    viewportHeight: 720,
    baseUrl: 'https://demoqa.com/',
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    defaultCommandTimeout: 20000,
  },
})