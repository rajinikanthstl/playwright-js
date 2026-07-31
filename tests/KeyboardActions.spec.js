import {test,expect} from '@playwright/test';

test.skip('pressing keys', async ({page})=>{

    //open url
    await page.goto('https://practice.expandtesting.com/key-presses');

    //locating result text
    const result = page.locator('#result');

    //pressing key 'A'
    await page.keyboard.press('A');

    //verify result text
    await expect(result).toHaveText('You entered: A');

    //pressing key 'Enter'
    await page.keyboard.press('Enter');

    //verify result text
    await expect(result).toHaveText('You entered: ENTER');

    //pressing key 'Ctrl'
    await page.keyboard.press('Control');

    //verify result text
    await expect(result).toHaveText('You entered: CONTROL');
})

test.skip('copy paste action', async ({page})=>{

    //open url
    await page.goto('https://testautomationpractice.blogspot.com/');

    //enter text in name field
    await page.locator('#name').click();
    await page.keyboard.type('automation');
    
    //selecting text
    await page.keyboard.press('Control+A');

    //copying text
    await page.keyboard.press('Control+C');

    //pasting text
    await page.locator('#email').click();
    await page.keyboard.press('Control+V');

    //verifying the pasted text
    await expect(page.locator('#email')).toHaveValue('automation');

    await page.waitForTimeout(4000);
})

test('copy pasting using shift key', async ({page})=>{

    //open url
    await page.goto('https://testautomationpractice.blogspot.com/');

    //enter text in name field
    await page.locator('#name').click();
    await page.keyboard.type('automation test');

    //pressing and holding Shift after pointing to starting of text
    await page.keyboard.press('Home');
    await page.keyboard.down('Shift');

    //selecting text char by char with right arrow
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');

    //releasing Shift key
    await page.keyboard.up('Shift');

    //copying the selected text
    await page.keyboard.press('Control+C');

    //pasting the selected text in email textbox
    await page.locator('#email').click();
    await page.keyboard.press('Control+V');

    //verifying the pasted text
    await expect(await page.locator('#email')).toHaveValue('automation');

    await page.waitForTimeout(3000);
})