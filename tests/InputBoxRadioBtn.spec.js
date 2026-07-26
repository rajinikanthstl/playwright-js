import {test,expect} from '@playwright/test';

test('Input in textbox', async ({page})=>{

    //setting timeout for this test
    test.setTimeout(10000);

    //open url
    await page.goto('https://practice.expandtesting.com/inputs');

    //locating input:Text
    const inputText = page.locator('.input-box#input-text');

    //verify input box is visible
    await expect(inputText).toBeVisible();

    //verify input box is empty
    await expect(inputText).toBeEmpty();

    //verify input box is enabled
    await expect(inputText).toBeEnabled();

    //verify input box is editable
    await expect(inputText).toBeEditable();

    //enter some text in input box
    await inputText.fill('automation');

})

test('Radio Buttons', async ({page})=>{

    //open url
    await page.goto('https://practice.expandtesting.com/radio-buttons',{waitUntil:'domcontentloaded'});

    //locate the Red color radio button
    const red = page.locator('#red');

    //locate the Yellow color radio button
    const yellow = page.locator('#yellow');

    //locate the Blue color radio button
    const blue = page.locator('#blue');

    //checking yellow button
    await yellow.check();
    await page.waitForTimeout(3000);
    
    //verifying blue to be checked
    await expect.soft(blue).toBeChecked();
    await page.waitForTimeout(3000);

    //verifying blue button checked to be false
    await expect.soft(blue.isChecked()).toBeFalsy();
    
    //checking blue button
    await blue.check();
    await page.waitForTimeout(3000);

    //verifying yellow button to be checked
    await expect.soft(yellow).toBeChecked();

    //checking red butoon
    await red.check();
    await page.waitForTimeout(3000);

    //verifying red button to br checked is false
    await expect.soft(red.isChecked()).toBeFalsy();

    //checking yellow button
    await yellow.check();  

    await page.waitForTimeout(5000);

})