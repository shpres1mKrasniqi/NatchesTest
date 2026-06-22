const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://f2yt3gogmjqkq-main-bvxea6i.us-2.tst.site",

    setupNodeEvents(on, config) {
      console.log("Cypress config loaded");
      return config;
    },
  },
});
