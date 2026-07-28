import {test,expect} from '@playwright/test';

test('Multi Select Dropdown', async ({page})=>{

    //open url
    await page.goto('https://testautomationpractice.blogspot.com/',{waitUntil:'domcontentloaded'});

    //locating multiselect dropdown
    const multiselect = page.locator('#colors');

    //ways to select options from multi select dropdown
    //1.Using value
    // await multiselect.selectOption([{value:'red'},{value:'green'},{value:'yellow'}]);

    //2.Using label
    await multiselect.selectOption([{label:'Red'},{label:'Green'}]);

    //verify options are selected
    // let selectedOptions = await multiselect.locator('option:checked');
    // console.log(await selectedOptions.allInnerTexts());

    await expect(multiselect.locator('option:checked')).toContainText(['Red','Green']);

    //Assertions/validations
    //1.verify dropdown is multi select
    await expect(multiselect).toHaveAttribute('multiple');

    //2.verify total number of options in dropdown
    const options = multiselect.locator('option');
    await expect(options).toHaveCount(7);

    //3.verify an option is available in dropdown
    const optionsList = await options.all();

    let flag = false;

    let optionLookup = 'Red';

    // for(let option of optionsList){
    //     // console.log((await option.textContent()).trim());
    //     let optionText = (await option.textContent()).trim();

    //     if(optionText==optionLookup){
    //         flag = true;
    //         break;
    //     }
    // }

    let LookupValue = 'red';
    for(let option of optionsList){
        // console.log((await option.textContent()).trim());
        let optionValue = (await option.getAttribute('value'));

        if(optionValue==LookupValue){
            flag = true;
            break;
        }
    }

    //final assertion
    expect(flag).toBeTruthy();

    await page.waitForTimeout(4000);

})