const { Builder, By } = require('selenium-webdriver');

(async function testPage() {
  // Start Chrome
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Open local HTML page (adjust if hosted elsewhere)
    await driver.get('http://localhost:8080/index.html');

    // Find the element with ID 'title'
    let heading = await driver.findElement(By.id('title'));
    let text = await heading.getText();

    if (text === 'Welcome to Selenium JS Test!') {
      console.log('Test Passed: Correct heading found.');
    } else {
      console.log('Test Failed: Unexpected heading text.');
    }

  } finally {
    // Close browser
    await driver.quit();
  }
})();