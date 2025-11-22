import { GestureHelper } from "../utils/GestureUtils";
import { WaitHelper } from "../utils/WaitHelpers";

export abstract class BasePage {
  protected waitHelper = WaitHelper;
  protected gestureHelper = GestureHelper;

  async waitForPageLoad(): Promise<void> {
    await browser.pause(1000);
  }

  async getText(element: WebdriverIO.Element): Promise<string> {
    await this.waitHelper.waitForElement(element);
    return await element.getText();
  }

  protected async getAttribute(element: WebdriverIO.Element,attribute: string): Promise<string> {
    await this.waitHelper.waitForElement(element);
    return await element.getAttribute(attribute)
  }

  async click(element: WebdriverIO.Element): Promise<void> {
    await this.waitHelper.waitAndClick(element);
  }

  async sendKeys(element: WebdriverIO.Element, text: string): Promise<void> {
    await this.waitHelper.waitAndSendKeys(element, text);
  }

  async isDisplayed(element: WebdriverIO.Element): Promise<boolean> {
    try {
      return await element.isDisplayed();
    } catch {
      return false;
    }
  }
  async clickOnElement(element: WebdriverIO.Element): Promise<void> {
    try {
        await element.waitForDisplayed({timeout:4000});
        // await element.waitForClickable()
        await element.click()
    } catch {
      
    }
  }

//   async scrollToElement(element: WebdriverIO.Element): Promise<void> {
//     await this.gestureHelper.scrollToElement(element);
//   }
}