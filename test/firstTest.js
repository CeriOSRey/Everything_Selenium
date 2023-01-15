'use strict'
const { Builder, By, Key } = require('selenium-webdriver')
const assert = require('assert')
var should = require('chai').should()

// describe
describe('Add todo test', function () {
  // it block
  it('successfully added todo to application', async function () {
    // launch the browser
    let driver = await new Builder().forBrowser('chrome').build()
    // navigate to our web application
    await driver.get('https://lambdatest.github.io/sample-todo-app/')

    // add a todo
    await driver
      .findElement(By.id('sampletodotext'))
      .sendKeys('Learn Selenium', Key.RETURN)

    // assert
    let todoText = await driver
      .findElement(By.xpath('//li[last()]'))
      .getText()
      .then(function (value) {
        return value
      })
    assert.strictEqual(todoText, 'Learn Selenium')

    // assert with chai
    todoText.should.equal('Learn javascript')

    // close the browser
    await driver.quit()
  })
})

// Mochaless implementation
// async function example() {

// }
// example()
