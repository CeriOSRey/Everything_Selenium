# Selenium Components

- Selenium IDE: Chrome/Firefox plugin. records the user action on the web browser and exports them as a reusable script.
- Selenium RC: is a server that allows users to write application tests in various programming languages. Test scripts are then taken by server and are sent to the browser as selenium core Javascript commands. Browser will execute the test scripts.
- Selenium WebDriver: a API that helps create and run test cases. It makes provision to act on web elements. Unlike RC, this does not require a server. The scripts go straight to the browser.
- Selenium Grid: Distribute commands to different machines simultaneiously. It allows the parallel execution of tests on different browsers and different operating systems. It is integrated with other components for simultaneous exectution.

# Limitation of Selenium:

- No reliable tech support: open source but has forums and documentation.
- Can only test web applications: can be integrated to Appium a mobile test automation tool
- Limited support for image testing: can be integrated to Securly an image testing tool
- No built in reporting facility: can be integrated to TestNG, ReportNG ect.
- Limited test management: automation dev needs to know how to code

# Testing types supported by Selenium

- Regression testing: a full or partial selection of already executed test cases which are re-exectued to ensure existing functionalities work. Steps are Retesting, Regression test selection and Prioritization of test cases.
  Re-testing: All existing tests are executed. Expensive and time-consuming.
  Regression test:
  Feature test: end to end testing of a feature
  Integration tests: individual components tested to validate interaction with software
  End to End tests: testing workflow from beginning to end
  Prioritization of test cases: based on Critical functionalities and business impact.
- Functional testing:
  - involves verification of every function of the application with required specifications.
    Steps are as follows:
    - identify test input
    - compute test outcome
    - execute test
    - assert test outcome with actual outcome
      Types of tests simple tests:
      Smoke test: non-exhaustive test that tests the important functions
      Sanity test: perform basic tests
      Install test: test for feature intallation success
      Database test: load test and stress test of database

# Selenium 2.0: addition of Webdriver and depreciation of RC

- IDE, WebDriver, RC(but depreciated), Grid
  Selenium 3.0: RC was completely removed
- IDE, WebDriver, Grid

Same Origin Policy: Security purposes, A web browser allows scripts from one webpage to access the contents of another webpage provided both the pages have the same origin(domain).

- Selenium RC was used to handle same origin policy because all the scripts ran from one server.

Selenese: Set of selenium commands used to test your web application.

- Action: directly interacts with the application
- Accessors: store values
- Assertions: Verifies current state with an expected state

# Types of WebLocator: a command that tells selenium IDE which GUI element to operate on.

- Locator by ID: .findElement(By.id())
- Locator by link or parial link: .findElement(By.linkText())
- Locator by Name: .findElement(By.name())
- TagName: .findElement(By.tagName())
- ClassName: .findElement(By.className())
- XPath: .findElement(By.xpath())
- CSS Selector: .findElement(By.cssSelector())

Type of Waits supported by WebDriver - Sometimes elements takes time to load.

- Implicit wait: tells selenium to wait for a certain amount of time before throwing a "No such element" exception

driver.manage().timeouts().implicitlyWait(TimeOut, TimeUnit.Seconds);

- Explicit wait: used to tell the WebDriver to wait for certain conditions before throwing an "ElementNotVisibleException" exception.

WebDriverWait wait = new WebDriverWait(WebDriver Reference, TimeOut);

- Fluent wait: Same as explicit as well as checking the frequency with which we want to check the condition before throwing the "ElementNotVisibleException" exception.

Wait wait = new FluentWait(WebDriver reference).withTimeout(timeout, SECONDS).pollingEvery(timeout, SECONDS).pollingEvery(timeout, SECONDS).ignoring(Exception.class);

# Type of Navigation Commands:

- navigate to provided URL: driver.navigate().to("https://www.ebay.ph/");
- Refresh current webpage: driver.navigate().refresh()
- Like clicking forward: driver.navigate().forward()
- Like clicking back: driver.navigate().back()

# Difference between .close() and .quit()

- .close only closes the focuses window while .quit quits the session and closes all the windows, tabs, popups, etc.

Entering text in the input box - .sendKeys()
WebElement email = driver.findElement(By.id("email"));
email.sendKeys("abc.efgh@gmail.com")

Click on a hyperlink
driver.findElement(By.linkText("Today's deals")).click();

Scroll down the page using JavaScript
executeScript("window.scrollBy(x-pixel, y-pixels)");
scrollBy()

- first create a Javascript Object
  JavascriptExecutor js = (JavascriptExecutor) driver;

- launch the desired applicaiton
  driver.get("https://www.amazon.com")

- scroll down to the desired location
  js.executeScript("window.scrollBy(0,1000)");

# Assert title of a webpage

- Get title and store in variable:
  String actualTitle = driver.getTitle();
- Type in the expected title:
  String expectedTitle = "abcdefgh";
- Verify if both are equal:
  if (actualTitle.equalsIgnoreCase(expectedTitle))
  System.out.println("title matched");
  else
  System.out.println("title did not match");

- alternatively,
  Assert.assertEquals(actualTitle, expectedTitle);

# Mouse hover over an element

- Instantiate Action class
  Actions action = new Actions(driver);

- hover over search box of a website
  actions.moveToElement(driver.findElement(By.id("id of the searchbox"))).perform();

CSS Property of an element - .getAttribute() only pulls what is in the DOM no the css

- getCssValue()
- driver.findElement(By.id("email")).getCssValue("font-size");

# POM - Page Object Model

- is a design pattern that helps create object repositories for the web elements
- every webpage has a corresponding page class that is responsible for locating the web elements and performing actions on them
- POM improves code re-usability and readability. Multiple tests cases can be run on the object repository
- Selenium offers Page Factory to generate a POM

# Cannot Automate Captcha

- Captcha is a security feature that prevents bots and automated programs from accessing sensitive information
- NO, Selenium can not automate Captcha
- Test engineer has to manually type the captcha
- ask devs to disable captcha so you can write a test suite for the application.

# Windows based pop-up

- Integrate third party tools like AutoIT, Robot etc to Selenium.

Screenshots in WebDriver

- create source file: File scrFile = ((TakeScreenshot)driver).getScreenshotAs(outputType.FILE);
- will need a destination: File dest = new File("./Screenshot/fblogin.png");
- copy source into the dest: Files.copy(scrFile, dest);

# Type w/out using sendKeys()

- use JavaScriptExecutor:
  JavascriptExecutor jse = (JavascriptExecutor) driver;
  jse.executeScript("document.getElementByID('email').value="abc.efg@xyz.com");

# Select a value from a dropdown list

- use Select class
  WebElement testDrop = driver.findElement(By.id("testingDropdown"));
  Select dropdown = new Select(testDrop);
- dropdown.selectByIndex(5);
- dropdown.selecByValue("Books");
- dropdown.selectByVisibleText("The Alchemist");

switchTo(): used to switch betweens windows with the application. Every window instantiated by the webdriver is given a unique alphanumeric value called Window Handle

- get window handle:
  String handle = driver.getWindowHandle();
- switch to the desired window
  driver.switchTo().window(handle);
- Alternatively
  for(String handle = driver.getWindowHandles()) {
  driver.switchTo().window(handle);
  }

# Upload a file in Selenium WebDriver

- sendKeys() - if there is a textbox for the file path
- Robot tool will open the explorer windows

# Set browser window size in WebDriver

- maximize
  driver.manage().window().maximize();
- set size
  Dimension d = new Dimension(400,600);
  driver.manage().window().setSize(d);
- alternatively,
  Window size can be reset using JavascripExecutor
  ((JavascriptExecutor)driver).executeScript("window.resizeTo(1024,768)");

# Find elements

- findElement(): use to find the first element matching the specified locator
- findElements(): use to find all the elements in the current webpage matching the specified locator value.

Pause on exception in Selenium IDE

- pauses the execution if at all there is any. CLick the pause button in the top right to enable.

Logging in on an Authentication Pop-up for username and password

- use explicit wait command to verify the
  WebDriverWait wait = new WebDriverWait(driver, 10);
- Alert class is used to verify the alert
  Alert alert = wait.until(ExpectedConditions.alertIsPresent());
- Once verified alert class exist, provide the credentials
  alert.authenticateUsing(new UserAndPassword(<username>, <password>));

# Difference between single and double slash in Xpath

- click ChroPath option on the menubar of the console to find Xpath and CSS locator.
- Single slash is used to create Xpath with absolute path
  /html/body/div[2]/div[2]/div[1]/a
- Double slash is used to create Xpath with a relative path
  //div[class="qa-logo"]/a

# Finding broken links in Selenium WebDriver

- 200 = OK
- 404 = Link Not Found
- 400 = Bad Request
- 401 = Unauthorized
- 500 = Internal error

  - Navigate to the webpage
  - Collect all the links from the webpage. All the links are associated with the TAG 'a'
    list<WebElement> links = driver.findElements(By.tagName("a"));
  - Create a list of type WebElements to store all the Link Elements into it.
    for (int i=0; i<links.size(); i++) {
    WebElement element = links.get(i);
    String url=element.getAttribute("href");
    verifyLink(url);
    }

    // Fetch all elements with "a" tag or anchor
    List<WebElement> links = driver.findElements(By.tagName("a"));
    for(WebElement ele: links) {
    url = ele.getAttribute("href");
    System.out.println(url);
    // Check if url is null or ""
    if (url == null || url.isEmpty()) {
    System.out.println("URL is either not configured for anchor tag or it is empty");
    continue;
    }
    // This is where you send the HEAD request
    try {
    huc = (HttpURLConnection)(new URL(url).openConnection());
    huc.setRequestMethod("HEAD");
    huc.connect();

        int respCode = huc.getResposeCode();
        if(respCode >= 400) {
          System.out.println(url + " is a broken link");
        } else {
          System.out.println(url + " is a valid link");
        }

    } catch (Exception error) {
    error.printStackTrace();
    }
    }
