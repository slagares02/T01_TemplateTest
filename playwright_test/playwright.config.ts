import { PlaywrightTestConfig} from '@playwright/test';

  const playwrightConfig: PlaywrightTestConfig = {
    testMatch: '/tests/*.ts',
    //testIgnore: 'acceptancetest/test/Movements.spec.ts',
    reporter: [['list'], ['junit', { outputFile: 'reports/results.xml' }]],
    timeout: 60000, //ms
    //fullyParallel: true,
    //grep: new RegExp('@ts'),
    retries: 0, //1
    projects: [
      {
        name: 'Chrome',
        use: {
          browserName: 'chromium',
          channel: 'chrome',
          //channel: 'chromium', //for macOS
        },
      },
    ],
    use: {
      baseURL: 'https://www.utest.com/',
      screenshot: 'only-on-failure',
      video: 'retry-with-video',
    },
  };
  export default playwrightConfig;