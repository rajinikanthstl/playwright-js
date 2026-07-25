import {test,expect} from '@playwright/test';

test('selectorshub locators practice', async ({page})=>{

    await page.goto('https://selectorshub.com/xpath-practice-page/');

    // await page.locator('input[id^="shub"]').focus();     //css
    // await page.locator('//input[contains(@id,"shub")]').focus();  //xpath
    // await page.locator('//input[starts-with(@id,"shub")]').focus();  //xpath
    // await page.locator('input[id*="shub"]').focus();  //css
    // await page.click('input[id^="shub"]');  //css
    // await page.fill('input[id^="shub"]','rajesh@gmail.com');  //css

    await page.getByPlaceholder('Enter email').focus();
    await page.getByRole('textbox',{name:'email'}).fill('rajesh@gmail.com');

    
    // await page.locator('#pass').fill('rajesh');
    await page.getByTitle('Password').fill('rajesh');

    await page.locator('div.element-companyId input[name="company"]').fill('microsoft');  //css

    await page.locator('(//input[@placeholder="Enter your mobile number"])[1]').fill('8787654543'); //xpath

    await page.getByText("Country").filter({has:page.getByRole('textbox')}).fill('India');

    // await page.getByRole('button',{name:'Submit'}).click();
    await page.getByText('Submit').click();
    // await page.locator('button[value="Submit"]').click();  //css

    // await page.getByRole('textbox',{name:"First Crush"}).fill('Crush');
    // await page.getByPlaceholder('First Crush').fill('Crush');
    await page.getByTitle('Enter your first crush name').fill('Crush');

    await page.waitForTimeout(3000);
})