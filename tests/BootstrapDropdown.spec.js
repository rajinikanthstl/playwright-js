import {test,expect} from '@playwright/test';

test('bootstrap dropdown automation', async ({page})=>{

    //open url
    await page.goto('https://seleniumpractise.blogspot.com/2016/08/bootstrap-dropdown-example-for-selenium.html');

    //locating dropdown button
    const dropdown = page.locator('#menu1');

    //clicking on the dropdown button
    await dropdown.click();

    //locating all options in dropdown
    const options = await page.locator('ul[aria-labelledby="menu1"]>li').all();

    //traversing through options to select
    for(let option of options){
        let optionText = await option.textContent();
        if(optionText=='JavaScript'){
            await option.click();
            break;
        }
    }

    await page.waitForTimeout(4000);

})