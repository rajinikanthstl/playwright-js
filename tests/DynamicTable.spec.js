import {test,expect} from '@playwright/test';

test('dynamic web table automation', async ({page})=>{

    //open url
    await page.goto('https://testautomationpractice.blogspot.com/');

    //locating table
    const table = await page.locator('//table[@id="taskTable"]');

    //locating table rows
    const rows = await table.locator('tbody tr');

    //locating table columns
    const columns = await table.locator('thead tr th');

    //locating table cells
    const cells = await table.locator('tbody tr td');

    //printing rows count
    console.log('number of rows: ',await rows.count());

    //printing columns count
    console.log('number of columns: ',await columns.count());

    //printing total cells count
    console.log('number of cells: ',await cells.count());

    //printing table headers
     console.log(await columns.nth(0).textContent(),
    await columns.nth(1).textContent(),
    await columns.nth(2).textContent(),
    await columns.nth(3).textContent(),
    await columns.nth(4).textContent());
    console.log('-------------------------------');   

    //printing table data
    for(let i=0;i<await rows.count();i++){
        console.log((await rows.nth(i).textContent()));
    }

    console.log('-------------------------------');   
    //finding the given parameter's data from table

    const searchBrowser = 'Firefox';
    //   const searchProperty = 'CPU (%)';
    const searchProperty = 'Network (Mbps)';
    let row = 0;
    let col = 0;

    //locating the column index
    for(let i=0;i<(await columns.count());i++){
        if(await columns.nth(i).textContent()==searchProperty){
            col = i;
            break;
        }
    }

    //locating the row index
    for(let i=0;i<await rows.count();i++){
        let targetBrowser = await rows.nth(i).textContent();
        if(targetBrowser.includes(searchBrowser)){
            row = i;
            break;
        }
    }
  
    //fetching the target row
    let targetRow = await rows.nth(row).locator('td');

    //fetching the target value
    let targetValue = await targetRow.nth(col).textContent();
    
    //printing final search result
    console.log(`${searchBrowser}'s ${searchProperty} is: ${targetValue}`);
    
})