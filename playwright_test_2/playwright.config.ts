import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  //grep: new RegExp('@t'), //Just for local debug
  timeout: 40000,
  reporter: [['list'],['monocart-reporter', {name: "Test Report", outputFile: 'test-results/index.html'}]],
  //reporter: [['html', { open: 'always', outputFolder: 'test-results'  }]],
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 1,
  use: {
    baseURL: 'https://www.dafiti.com.co/',
  },

  /* Configure projects for major browsers */
  projects: [

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome']},
    },
    
  /*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    */
   /*
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  */
  /* 
  {
    name: 'Microsoft Edge',
    use: { ...devices['Desktop Edge'], channel: 'msedge' },
  }
  */
  /*
  {
    name: 'Google Chrome',
    use: { ...devices['Desktop Chrome'], channel: 'chrome' },
  },
  */


  /* Test against mobile viewports. */
  /*
  {
    name: 'Mobile Chrome',
    use: { ...devices['Moto G4'] },
    }
   */
  {
   name: 'Mobile Safari',
   use: { ...devices['iPhone 12'] },
   }

  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },

  
});
