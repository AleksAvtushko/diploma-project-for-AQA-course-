import { defineConfig } from "cypress";

const allureWriter = require("@shelex/cypress-allure-plugin/writer");
// import allureWriter from "@shelex/cypress-allure-plugin/writer";

export default defineConfig({
    e2e: {
        video: false,
        setupNodeEvents(on, config) {
            allureWriter(on, config);
            return config;
            // implement node event listeners here
        },
    },
});
