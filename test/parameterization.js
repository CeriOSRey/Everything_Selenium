'use strict'

const { Builder, By, Key, Options } = require('selenium-webdriver')
const assert = require('assert')
var should = require('chai').should()
// add this line below after you make a capabilities file with the code from capabilities-generator
const ltCapabilities = require('../capabilities').capabilities

describe('Add todo test', function () {
  var driver
  const USERNAME = ltCapabilities['LT:Options'].username
  const KEY = ltCapabilities['LT:Options'].accessKey
  const GRID_HOST = 'hub.lambdatest.com/wd/hub'
  const gridUrl = 'http://' + USERNAME + ':' + KEY + '@' + GRID_HOST
  const todoEndpoint = 'https://lambdatest.github.io/sample-todo-app/'

  const browsers = [
    { browser: 'Chrome', bVersion: '93.0', os: 'Windows 10' },
    { browser: 'Firefox', bVersion: '91.0', os: 'Windows 10' },
    { browser: 'Firefox', bVersion: '90.0', os: 'Windows 10' },
  ]

  browsers.forEach(({ browser, bVersion, os }) => {
    it(`successfully added todo for ${browser} with version ${bVersion}.`, async function () {
      ltCapabilities.browser = browser
      ltCapabilities.browserVersion = bVersion
      ltCapabilities['LT:Options'].platformName = os
      ltCapabilities['LT:Options'].name = this.test.title

      driver = new Builder()
        .usingServer(gridUrl)
        .withCapabilities(ltCapabilities)
        .build()
      await driver.get(todoEndpoint)
      await driver
        .findElement(By.id('sampletodotext'))
        .sendKeys('Learn Selenium', Key.RETURN)
      let todoText = await driver
        .findElement(By.xpath('//li[last()]'))
        .getText()
        .then(function (value) {
          return value
        })
      assert.strictEqual(todoText, 'Learn Selenium')
      todoText.should.equal('Learn Selenium')
      await driver.quit()
    })
  })
})
