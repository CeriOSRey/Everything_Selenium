# Mocha

- MOCHA Framework

- npm install mocha
- default timeout of 2 seconds...need to do below flag in terminal.
  - npx mocha --no-timeouts 'tests/\*.js
- by default mocha looks for directory called tests so no need to specify path.
  - npx mocha --no-timeouts
- you can also add the --no-timeouts flag in the script of package.json to so we dont include it in terminal.
  - npm test
- to run tests in parallel, add the flag --parallel to the end of the script in package.json

# Mochawesome

- Generate reports
- add --reporter mochawesome to script to enable reports
- --require mochawesome/register to register mochawesome as a hook
- generates a directory.
- this flag generates a custom directory and a custom name
  - --reporter-options reportDir=/Users/reycerio/Everything_Selenium/test-reports,reportFilename=sampleTestReport"

# Reason Cross Browser Issues

- Parameterization: adding parameters to tests so we can reuse the test with different data(crossbrowser testing)

Font size mismatch in different browsers.
JavaScript implementation can be different.
CSS,HTML validation difference can be there.
Some browser still not supporting HTML5.
Page alignment and div size.
Image orientation.
Browser incompatibility with OS. Etc.
