import {test,expect} from '@playwright/test';

test('static web table automation', async ({page})=>{

    //open url
    await page.goto('https://testautomationpractice.blogspot.com/');

    //locating the table
    const table = await page.locator('table[name="BookTable"]');

    //locating rows of table
    const rows = await table.locator('tbody tr');

    //locating columns in table
    const columns = await table.locator('tbody tr th');

    //locating all cells
    const cells = await table.locator('tbody tr td');

    console.log("number of rows:",await rows.count());
    console.log("number of columns:",await columns.count());
    console.log("number of cells:",await cells.count());


    //printing all rows of the table
    for(let i=0;i<await rows.count();i++){
        console.log(await rows.nth(i).textContent());
        console.log('------------------')
    }

})