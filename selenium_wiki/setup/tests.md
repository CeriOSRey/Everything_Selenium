# Test Breakdown

# Node Test Parts

- should use async

- requires
- builder
- test function
- launch the browser
- actions
- asserts
- close the browser
- call the test function

# Node Test Example

const {Builder, By, Key} - require ("selenium-webdriver");
async function example() {
let driver = await new Builder().forBrowser("chrome").build()
await driver.get("https://lambdatest.github.io/sample-todo-app/")
await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN)
await diver.quit()
}
example()

# Mocha Test Example - see secondTest.js

- Describe: test suite
- it: test cases
- beforeEach and afterEach functions
