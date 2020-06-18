const { CUCUMBER_TIMEOUT, WAIT_FOR_TIMEOUT, CONNECT_RETRY_TIMEOUT, CONNECT_RETRY_COUNT, PORT } = require('../tests/constants');
require('dotenv').config(); ;
exports.config = {
    // ====================
    // Runner and framework
    // Configuration
    // ====================
    runner: 'local',
    framework: 'cucumber',
    cucumberOpts: {
        requireModule: ['@babel/register'],
        compiler: [],
        dryRun: false,
        monochrome: true,
        failFast: false,
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tags: [],
        timeout: CUCUMBER_TIMEOUT,
        ignoreUndefinedDefinitions: false,
        tagExpression: 'not @skip',
    },
    specs: ['tests/features/**/*.feature'],
    sync: true,
    // debug | silent | info
    logLevel: 'silent',
    deprecationWarnings: true,
    // Stop after certain amount of failures.
    bail: 0,
    waitforTimeout: WAIT_FOR_TIMEOUT,
    connectionRetryTimeout: CONNECT_RETRY_TIMEOUT,
    connectionRetryCount: CONNECT_RETRY_COUNT,
    /* Use outputDir if you want to have the logs in a folder.
    If commented, logs are shown in console depending on log level. */
    // outputDir: './test-report/output',
    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: './test-report/allure-result/',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
                useCucumberStepReporter: true,
            },
        ],

    ],

    // ====================
    // Appium Configuration
    //  ====================
    services: [
        ['appium', {
            command: 'appium'
        }]
    ],
    port: PORT,
    path: '/wd/hub'

};
