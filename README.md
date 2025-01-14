# Automation framework excerise

    This automation framework is built with Playwright and Typescript. The purpose of this automation framework is to test the checkout flow of the website as demostrate skeleton
    for POM implementation.
## Prerequisites

- Node.js
- Playwright
- Chrome

## Installation

1. Clone the repository `git clone https://github.com/alejandrobettini6/playwright-demo.git`
2. Run `npm install` to install the dependencies
3. Install playwright browser `npx playwright install`

## Running the tests

To run the tests, use the following command:

```
npm run test
```

or

```
npx playwright test
```


If you want to run a specific test, you can use the following command:

```
npm run test -- --grep "test name"
```

If you want to run all tests in a specific file, you can use the following command:

```
npx playwright test tests/<test-file>.spec.js
```

If you want to run one specific project file, you can use the following command:

```
npx playwright test --project="<project-name>"
```

If you want to run it in headless mode, you can use the following command:

```
npx playwright test --headed
```

If you want to run it in debug mode, you can use the following command:

```
npx playwright test --debug
```

If you want to run it without parallel execution, you can use the following command:

```
npx playwright test --workers 1
```

## Reporting

You can generate a report in html format with the following command:

```
npx playwright show-report
```

Remember that the report should be generated automatically after the tests are finished.

To open the report for performance tests with lighthouse, you can use the following command:

If you are using bash/zsh command line use

```
open ./lighthouse-reports/lighthouse-report.html
```

instead if you are using powershell command line use

```
start ./lighthouse-reports/lighthouse-report.html
```

or

```
ii ./lighthouse-reports/lighthouse-report.html
```

## Playwright Configuration

Remember that you can modify the playwright.config.js file to change the default settings.

```
timeout: 30000,
  expect: {
    timeout: 7000,
  },
  globalTimeout: 80000,
```

Modify the timeout values you need. Timeout for scenario timeout, expect for assertion timeout and globalTimeout for the entire test suite.

```
   trace: 'on-first-retry',
    screenshot: 'on',
    video: 'retain-on-failure'
```

Modify the trace, screenshot and video values you need.
Options on, off and retain-on-failure.

For more information about playwright, you can visit the following link:

https://playwright.dev/docs/intro

## Developer comments

This framework is build with a POM where we have one class defined for each page, such as login page, checkout, pdp (product detail page), plp (product listing page), cart, etc. This classes have the methods to interact with the page and the locators are defined as properties of the class. This allow as to have structureted code and to reuse the same methods for different tests and also simplify 
test maintenance and updates, not only with the automation steps but also with locator updates.

All this classes are being instanced in the fixture file. This fixture file is being imported in the test file and we avoid to instance
each class in each test file. With this appoach we can use all the methods in the test file and for the locators that are used for assertions (all this locators are public instead of private).

In terms of test data, we have two differents things: the first one is the test-data folder where we have yaml files (instead of json just because it's easier to read and write) with static data we can use for the test (like valid data for cards, but also we can put there data for users, products, login, etc). On the other hand, we have the random data that is generated with faker library. To generate this data we have a utils file where we have a function to generate random data for each type of data we need (like name, email, address, phone, etc).

One important point to mention is that the data-test-id has been modified in the playwright.config.js file, this allow us to use the tag selected by the developer team to locate elements with more stability.

Finally, the test-results folder, report and node modules are included in the gitignore file to avoid issues in the integration with ci/cd pipelines.

For the quick report we have the REPORT.md file where we have one summary example of the test execution.