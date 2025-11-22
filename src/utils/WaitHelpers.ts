export class WaitHelper {
  static async waitForElement(
    element: WebdriverIO.Element,
    timeout: number = 10000
  ): Promise<void> {
    await element.waitForDisplayed({ timeout });
  }

  static async waitForElementClickable(
    element: WebdriverIO.Element,
    timeout: number = 10000
  ): Promise<void> {
    await element.waitForClickable({ timeout });
  }

  static async waitForElementToDisappear(
    element: WebdriverIO.Element,
    timeout: number = 10000
  ): Promise<void> {
    await element.waitForDisplayed({ timeout, reverse: true });
  }

  static async  waitAndClick(element: WebdriverIO.Element): Promise<void> {
    await this.waitForElementClickable(element);
    await element.click();
  }

  static async waitAndSendKeys(
    element: WebdriverIO.Element,
    text: string
  ): Promise<void> {
    await this.waitForElement(element);
    await element.setValue(text);
  }

  static async customWait(
    condition: () => Promise<boolean>,
    timeout: number = 10000,
    interval: number = 500
  ): Promise<void> {
    const startTime = Date.now();
    while (Date.now() - startTime < timeout) {
      if (await condition()) return;
      await browser.pause(interval);
    }
    throw new Error('Custom wait condition timed out');
  }
}