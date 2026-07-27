import {test,expect} from '@playwright/test';

test.skip('checkboxes', async ({page})=>{

    await page.goto('https://practice.expandtesting.com/checkboxes');

    //locating checkbox-1
    const boxOne = page.getByLabel('Checkbox 1');

    //locating checkbox-2
    const boxTwo = page.getByLabel('Checkbox 2');

    //unchecking checkbox-2
    await boxTwo.uncheck();

    await expect.soft(boxTwo.isChecked()).toBeFalsy(); //false
    await page.waitForTimeout(2000);
    
    //checking checkbox-1
    await boxOne.check();

    await expect.soft(boxOne).toBeChecked(); 
    await page.waitForTimeout(2000);
})

test('checkbox-II', async ({page})=>{

    //opening url
    await page.goto('https://testautomationpractice.blogspot.com/');

    //locating all checkboxes into an array
    let weekdays = await page.locator('//input[@type="checkbox"][@class="form-check-input"]').all();

    //iterating through webelements and checking
    for(let day of weekdays){
        await day.check();
        await page.waitForTimeout(1000);
    } 

    // page.locator('//input[@type="checkbox"][@class="form-check-input"]').first().check();
    // page.locator('//input[@type="checkbox"][@class="form-check-input"]').nth(4).check();

    await page.waitForTimeout(3000);
})