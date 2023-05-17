import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "f94pmh",
  chromeWebSecurity: false,
  defaultCommandTimeout: 20000,
  requestTimeout: 30000,
  responseTimeout: 60000,
  videoUploadOnPasses: false,
  viewportWidth: 1536,
  viewportHeight: 960,
  modifyObstructiveCode: false,
  watchForFileChanges: false,
  experimentalMemoryManagement: true,
  numTestsKeptInMemory: 5,

  // retries: 1,
  screenshotOnRunFailure: false,
  video: true,
  videoCompression: 32,
  experimentalWebKitSupport: true,
  e2e: {
    baseUrl: "https://pos-dev.erply.com/latest/",
    supportFile: "cypress/support/e2e.ts",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
  },
});
