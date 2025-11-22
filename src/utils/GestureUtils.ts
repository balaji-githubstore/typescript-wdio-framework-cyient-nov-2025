export class GestureHelper {
  static async swipeUp(distance: number = 500): Promise<void> {
    const { width, height } = await driver.getWindowSize();
    const startX = width / 2;
    const startY = height * 0.8;
    const endY = startY - distance;

    await driver.performActions([{
      type: 'pointer',
      id: 'finger1',
      parameters: { pointerType: 'touch' },
      actions: [
        { type: 'pointerMove', duration: 0, x: startX, y: startY },
        { type: 'pointerDown', button: 0 },
        { type: 'pause', duration: 200 },
        { type: 'pointerMove', duration: 300, x: startX, y: endY },
        { type: 'pointerUp', button: 0 }
      ]
    }]);

    await driver.releaseActions();
  }

  static async swipeDown(distance: number = 500): Promise<void> {
    const { width, height } = await driver.getWindowSize();
    const startX = width / 2;
    const startY = height * 0.2;
    const endY = startY + distance;

    await driver.performActions([{
      type: 'pointer',
      id: 'finger1',
      parameters: { pointerType: 'touch' },
      actions: [
        { type: 'pointerMove', duration: 0, x: startX, y: startY },
        { type: 'pointerDown', button: 0 },
        { type: 'pause', duration: 200 },
        { type: 'pointerMove', duration: 300, x: startX, y: endY },
        { type: 'pointerUp', button: 0 }
      ]
    }]);

    await driver.releaseActions();
  }

  static async swipeLeft(): Promise<void> {
    const { width, height } = await driver.getWindowSize();

    await driver.performActions([{
      type: 'pointer',
      id: 'finger1',
      parameters: { pointerType: 'touch' },
      actions: [
        { type: 'pointerMove', duration: 0, x: width * 0.9, y: height / 2 },
        { type: 'pointerDown', button: 0 },
        { type: 'pause', duration: 200 },
        { type: 'pointerMove', duration: 300, x: width * 0.1, y: height / 2 },
        { type: 'pointerUp', button: 0 }
      ]
    }]);

    await driver.releaseActions();
  }

  static async swipeRight(): Promise<void> {
    const { width, height } = await driver.getWindowSize();

    await driver.performActions([{
      type: 'pointer',
      id: 'finger1',
      parameters: { pointerType: 'touch' },
      actions: [
        { type: 'pointerMove', duration: 0, x: width * 0.1, y: height / 2 },
        { type: 'pointerDown', button: 0 },
        { type: 'pause', duration: 200 },
        { type: 'pointerMove', duration: 300, x: width * 0.9, y: height / 2 },
        { type: 'pointerUp', button: 0 }
      ]
    }]);

    await driver.releaseActions();
  }

  static async scrollToElement(
    element: WebdriverIO.Element,
    maxScrolls: number = 10
  ): Promise<void> {
    for (let i = 0; i < maxScrolls; i++) {
      if (await element.isDisplayed()) return;
      await this.swipeUp();
    }
    throw new Error('Element not found after scrolling');
  }

  static async longPress(element: WebdriverIO.Element, duration: number = 1000): Promise<void> {
    const loc = await element.getLocation();
    const size = await element.getSize();
    
    const x = loc.x + size.width / 2;
    const y = loc.y + size.height / 2;

    await driver.performActions([{
      type: 'pointer',
      id: 'finger1',
      parameters: { pointerType: 'touch' },
      actions: [
        { type: 'pointerMove', duration: 0, x, y },
        { type: 'pointerDown', button: 0 },
        { type: 'pause', duration },
        { type: 'pointerUp', button: 0 }
      ]
    }]);

    await driver.releaseActions();
  }
}