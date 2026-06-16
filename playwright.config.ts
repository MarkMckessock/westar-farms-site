import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests/playwright',
  fullyParallel: true,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Tablet',
      use: { viewport: { width: 768, height: 1024 }, ...devices['Desktop Chrome'] },
    },
    {
      name: 'Desktop',
      use: { viewport: { width: 1280, height: 800 }, ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
  },
})
