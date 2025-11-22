import path from 'path';
import { config as sharedConfig } from './wdio.shared.conf';

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  port: 4723,
  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Android Emulator',
    // 'appium:platformVersion': '13.0',
    'appium:automationName': 'UiAutomator2',
    // 'appium:app': path.join(__dirname, '..', 'apps', 'android', 'khan-academy-7-3-2.apk'),
    'appium:appPackage': 'org.khanacademy.android',
    'appium:appActivity': 'org.khanacademy.android.ui.library.MainActivity',
    'appium:autoGrantPermissions': true,
    'appium:noReset': false,
    'appium:newCommandTimeout': 250
  }]
};