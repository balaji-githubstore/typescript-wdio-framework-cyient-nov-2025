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
    'appium:app': path.join(__dirname, '..', 'apps', 'android', 'Khan Academy.apk'),
    // 'appium:appPackage': 'com.example.app',
    // 'appium:appActivity': '.MainActivity',
    'appium:autoGrantPermissions': true,
    'appium:noReset': false,
    'appium:newCommandTimeout': 240
  }]
};