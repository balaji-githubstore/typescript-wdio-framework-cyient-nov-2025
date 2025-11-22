export const config: Partial<WebdriverIO.Config> = {
  runner: 'local',
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
  specs: ['../test/specs/**/*.ts'],
  exclude: [],
  maxInstances: 1,
  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['appium'],
  reporters: ['spec'],
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      project: 'tsconfig.json'
    }
  }
};  