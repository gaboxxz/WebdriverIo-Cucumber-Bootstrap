const { config } = require('./wdio.shared.conf');

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities

config.cucumberOpts.require = ['./tests/step_definition/app*.steps.js'];
config.capabilities = [
    {
        platformName: 'Android',
        maxInstances: 1,
        // http://appium.io/docs/en/writing-running-appium/caps/
        'appium:deviceName': 'DEVICE NAME',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'UiAutomator2',
        'appium:platformName': 'Android',
        'appium:app': 'APK PATH',
        'appium:noReset': true,
        'appium:newCommandTimeout': 2400,
        'appium:autoLaunch': false,
        'appium:disableAndroidWatchers': true,
        'appium:skipDeviceInitialization': true,
        'appium:chromedriverDisableBuildCheck': true
    }

];

exports.config = config;
