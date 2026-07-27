import {test,expect} from '@playwright/test';

test.skip('Dropdowns', async ({page})=>{

    //opening url
    await page.goto('https://practice.expandtesting.com/dropdown',{waitUntil:'domcontentloaded'});

    //locating the dropdown
    const dropdown = page.locator('#country');

    //ways to select options
    //1. By using label
    await dropdown.selectOption({label:'India'});
    await expect(dropdown).toHaveValue('IN');

    //2. By value
    await dropdown.selectOption({value:'IS'});
    await expect(dropdown).toHaveValue('IS');

    //3. By Index
    await dropdown.selectOption({index:1});
    await expect(dropdown).toHaveValue('AF');
    const selectedOption = await dropdown.inputValue(); //capturing the selected value

    //verifying the value selected is not empty
    expect(selectedOption).not.toBe('');

    //Assertion - I: validate number of options in dropdown
    //locate all <option> elements in dropdown
    const options = await dropdown.locator('option');

    //count options in dropdown
    const optionsCount = await options.count();

    //assert options to be more than 200
    expect(optionsCount).toBeGreaterThan(200);

    //Assertion - II: validate presence of a value
    //retrive all <option> elements in dropdown
    //this returns a array of strings
    const allCountries = await options.allTextContents();

    //verify 'India123' is present in dropdown
    expect.soft(allCountries).toContain('India123');

    //verify 'United States' is present in dropdown
    expect(allCountries).toContain('United States');

    await page.waitForTimeout(3000);
})

test('custom dropdown', async ({page})=>{

    //opening url
    await page.goto('https://testautomationpractice.blogspot.com/',{waitUntil:'domcontentloaded'});

    //locating the dropdown element
    const dropdown = page.locator('input#comboBox');

    //clicking on the dropdown
    dropdown.click(); 

    //locating dropdown options
    const options = page.locator('div.option');

    for(let i=0; i<=(await options.count()); i++){

        const optionText = await options.nth(i).textContent();

        if(optionText=="Item 92"){
            await options.nth(i).click();
            break;
        }
    }

    await page.waitForTimeout(5000);
})