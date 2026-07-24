import {test,expect} from "@playwright/test"; 
//test -> for creating tests
//expect -> for assertions

test("open google page and check title",async ({page})=>{

    //test code
    await page.goto("https://www.google.com");

    let pgTitle = await page.title();
    console.log("page title is: "+pgTitle);
    await expect(page).toHaveTitle("Google");

    let pgUrl = page.url(); //.url()->synchronous
    console.log("page url is: "+pgUrl);

    await page.close();

})

//npx playwright test  -> runs all the tests in test folder in headless mode
//npx playwright test FirstTest.spec.js -> runs only specified test in test folder
//npx playwright test FirstTest.spec.js --project=chromium -> runs the specified test in only chromium
//npx playwright test FirstTest.spec.js --project=chromium --headed -> runs the test on chromium in headed mode
//npx playwright test FirstTest.spec.js --project=chromium --debug -> runs the test in debug mode
