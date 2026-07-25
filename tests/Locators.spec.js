import {test,expect} from '@playwright/test';

test('Locators in playwright',async ({page})=>{

        await page.goto('https://testautomationpractice.blogspot.com/');

        //printing the page title
        console.log(await page.title());

        // await page.locator('id=name').fill('Rajesh');   //property locator
        // await page.locator('#name').fill('Rajesh');         //css locator
        await page.fill('//input[@id="name"]','Rajesh');    //xpath locator

        // await page.fill('input[placeholder="Enter EMail"]','rajesh@gmail.com'); //css locator
        await page.fill('//input[@placeholder="Enter EMail"]','rajesh@mail.com'); //xpath locator

        await page.fill('#Wikipedia1_wikipedia-search-input','playwright');    //css locator
        await page.click('//input[@class="wikipedia-search-button"][@type="submit"]'); //xpath locator

        //wait for elements to appear
        await page.waitForSelector('//div[@id="wikipedia-search-result-link"]'); 
                                    
        //locating group of elements
        let firstSearchResults = await page.locator('//div[@id="wikipedia-search-result-link"]').first(); 
        console.log("first search result: ",await firstSearchResults.textContent());

        let lastSearchResults = await page.locator('//div[@id="wikipedia-search-result-link"]').last(); 
        console.log("last search result: ",await lastSearchResults.textContent());

        let resultCount =  await page.locator('//div[@id="wikipedia-search-result-link"]').count();

        let searchResults = await page.locator('//div[@id="wikipedia-search-result-link"]').all();  

        console.log("Total Search Results:",resultCount);

        for(let result of searchResults){
            let text = await result.textContent();
            console.log(text);
        }

        await page.waitForTimeout(3000);

        await page.close();
})