const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    baseUrl: "https://f2yt3gogmjqkq-main-bvxea6i.us-2.tst.site",

    setupNodeEvents(on, config) {
      console.log("Cypress config loaded");
      return config;
    },
  },
});
