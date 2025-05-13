const { Builder, By } = require('selenium-webdriver');

async function runTests() {
  const driver = await new Builder().forBrowser('chrome').build();
  const fileUrl = 'file://' + __dirname + '/login.html';

  async function runTest(name, username, password, expectedMessage) {
    await driver.get(fileUrl);
    await driver.sleep(1000);

    // Fill form
    await driver.findElement(By.id('username')).sendKeys(username);
    await driver.findElement(By.id('password')).sendKeys(password);

    // Submit form
    await driver.findElement(By.css('button')).click();
    await driver.sleep(1000);

    const message = await driver.findElement(By.id('errorMsg')).getText();

    if (message === expectedMessage) {
      console.log(`${name} passed`);
    } else {
      console.log(`${name} failed. Expected: "${expectedMessage}", Got: "${message}"`);
    }
  }

  try {
    await runTest("Test 1 - Empty Username", "", "1234", "Username is required");
    await runTest("Test 2 - Empty Password", "admin", "", "Password is required");
    await runTest("Test 3 - Invalid Credentials", "user", "wrong", "Invalid credentials");
    await runTest("Test 4 - Valid Login", "admin", "1234", "Login unsuccessful");
    await runTest("Test 4 - Valid Login", "admin", "1234", "Login successful!");
  } finally {
    await driver.quit();
  }
}

runTests();
