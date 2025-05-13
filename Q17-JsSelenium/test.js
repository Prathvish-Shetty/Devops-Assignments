const { Builder, By } = require('selenium-webdriver');

(async function testClickButton() {
  // Create a driver instance for Chrome
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Load the local HTML file
    await driver.get('file://' + __dirname + '/index.html');

    // Wait a bit for the page to fully render
    await driver.sleep(2000);

    // Click the button
    let button = await driver.findElement(By.id('clickMe'));
    await button.click();

    // Wait to observe the message update
    await driver.sleep(2000);

    // Wait and check the result
    let message = await driver.findElement(By.id('message')).getText();
    if (message === 'Hello from JavaScript!') {
      console.log('Test Passed: Message displayed correctly.');
    } else {
      console.log('Test Failed: Message not as expected.');
    }
  } finally {
    // Quit browser
    await driver.quit();
  }
})();
