# LamdaTest Setup

- Sign up at https://accounts.lambdatest.com/dashboard
- go to https://www.lambdatest.com/capabilities-generator/
- select desired options(OS, browser, language, vesions, tools used)
- copy capabilities
- make a file called capabilities.js and paste capabilities.
- add this line at the bottom to be able to export the variable
- module.export = { capabilites }
- you need these lines in your Describe block to connect to the lambdatest servers
- const USERNAME = ltCapabilities['LT:Options'].username
- const KEY = ltCapabilities['LT:Options'].accessKey
- const GRID_HOST = 'hub.lambdatest.com/wd/hub'
- const gridUrl = 'http://' + USERNAME + ':' + KEY + '@' + GRID_HOST
