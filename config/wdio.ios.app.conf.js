const { config } = require('./wdio.shared.conf');

config.cucumberOpts.require = ['./tests/step_definition/app*.steps.js'];

// ============
// Capabilities
// ============
config.capabilities = [
    {
        platformName: 'iOS',
        maxInstances: 1,
        // http://appium.io/docs/en/writing-running-appium/caps/
        'appium:deviceName': 'DEVICE NAME',
        'appium:platformVersion': 'VERSION',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'XCUITest',
        // can use path to .app or .app.zip OR can use bundleId like this(app must be installed and running on device)
        'appium:app': 'APP .app or .app.zip PATH',
        'appium:noReset': true,
        'appium:newCommandTimeout': 2400,
    }
];

exports.config = config;
