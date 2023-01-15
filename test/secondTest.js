'use strict'

const { Builder, By, Key, Options } = require('selenium-webdriver')
const assert = require('assert')
var should = require('chai').should()
// add this line below after you make a capabilities file with the code from capabilities-generator
const ltCapabilities = require('../capabilities').capabilities

// describe
describe('Add todo test', function () {
  var driver
  // username
  const USERNAME = ltCapabilities['LT:Options'].username
  // key
  const KEY = ltCapabilities['LT:Options'].accessKey

  // host
  const GRID_HOST = 'hub.lambdatest.com/wd/hub'
  // grid url
  const gridUrl = 'http://' + USERNAME + ':' + KEY + '@' + GRID_HOST
  // web application url
  const todoEndpoint = 'https://lambdatest.github.io/sample-todo-app/'

  this.beforeEach(function () {
    ltCapabilities['LT:Options'].name = this.currentTest.title // change the title of test in lambdatest
    driver = new Builder()
      .usingServer(gridUrl)
      .withCapabilities(ltCapabilities)
      .build()
  })

  this.afterEach(async function () {
    // await driver.quit()
  })

  // it block
  it('successfully added todo to application', async function () {
    // launch the browser moving this up in the beforeEach() for reusability
    // let driver = await new Builder().forBrowser('chrome').build()
    // navigate to our web application
    await driver.get(todoEndpoint)

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
    todoText.should.equal('Learn Selenium')

    // close the browser
    // await driver.quit()
  })
})
