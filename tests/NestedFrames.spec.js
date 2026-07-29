import {test,expect} from '@playwright/test';

test('nested frame', async ({page})=>{

    //open url
    await page.goto('https://selectorshub.com/iframe-scenario/');

    //locating parent frame
    const parentFrame = await page.frameLocator('.e-con-inner iframe#pact1');

    //accessing parwnt frame elements
    await parentFrame.getByRole('textbox',{name:'First Crush'}).fill('crush');

    //locating child frame
    const childFrame = await parentFrame.frameLocator('iframe#pact2');

    //accessing child frame elements
    await childFrame.getByRole('textbox',{name:"Current Crush Name"}).fill('current crush');

    //locating inner child frame
    const innerChildFrame = await childFrame.frameLocator('iframe#pact3');

    //acessing inner child elements
    await innerChildFrame.getByRole('textbox',{name:'Destiny'}).fill('QA World');

    await page.waitForTimeout(4000);
})