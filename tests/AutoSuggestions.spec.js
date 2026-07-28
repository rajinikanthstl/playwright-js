import {test,expect} from '@playwright/test';

test('auto suggestions', async ({page})=>{

    //open url
    await page.goto('https://www.amazon.in/',{waitUntil:'domcontentloaded'});
    
    //locating the search box
    const searchBox = await page.locator('input#twotabsearchtextbox');

    //entering search terms into search box
    await searchBox.fill('iphone');

    //capturing search suggestions
    const searchSuggestions = await page.locator('.left-pane-results-container>div[id^="sac-suggestion"]').all();

    //traversing through search suggestions and selecting a suggestion
    for(let suggestion of searchSuggestions){
        let suggestText = await suggestion.textContent();
        // console.log(suggestText);
        if(suggestText.trim() =='iphone 17 pro'){
            await suggestion.click();
            break;
        }
    }

    await page.waitForTimeout(3000);
})