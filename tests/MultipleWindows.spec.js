import {test,expect} from '@playwright/test';

test('multiple windows', async ({page})=>{

    //open url
    await page.goto('https://practice.expandtesting.com/windows');

    //capturing the childpage event promise after clicking on the link
    let [childPage] = await Promise.all([page.context().waitForEvent('page'),page.locator('text="Click Here"').click()]);

    console.log('parent page title:',await page.title());

    console.log('text from child page:',await childPage.locator('div h1').textContent());

    //closing the childpage
    childPage.close();

    //focusing on parent page
    page.bringToFront();

    console.log('parent page title:',await page.title());

    await page.waitForTimeout(3000);
})