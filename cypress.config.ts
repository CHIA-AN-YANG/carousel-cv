import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    pageLoadTimeout: 120000,
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // Implement event listeners if needed
    }
  },
})
