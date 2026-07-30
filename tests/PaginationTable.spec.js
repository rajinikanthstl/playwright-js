import {test,expect} from '@playwright/test';

test('dynamic web table automation', async ({page})=>{

    //open url
    await page.goto('https://testautomationpractice.blogspot.com/');

    //locating the table
    const table = await page.locator('#productTable');

    //locating table headings
    const headers = await table.locator('thead>tr>th');

    //locating table rows
    const rows = await table.locator('tbody>tr');

    //locating navigation buttons
    const navBtn = await page.locator('.pagination li a');

    //printing table data with pagination
    for(let p=0; p<await navBtn.count();p++){
        //clicking on next nav button
        await navBtn.nth(p).click();

        //looping through the table contents
        for(let i=0;i<await rows.count();i++){
            //capturing data in the row
            let currentRow = await rows.nth(i).locator('td').allTextContents();

            //condition to check the product as selected
            if(currentRow.includes('Laptop')||currentRow.includes('Smartwatch')||currentRow.includes('Desktop Computer')){
                await rows.nth(i).locator('td>input').check();
            }
            
            //printing each row's data
            console.log(await rows.nth(i).locator('td').allTextContents());
        }
        console.log('--------------------------------------------');
    }    
})