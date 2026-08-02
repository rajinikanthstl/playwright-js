import {test,expect} from '@playwright/test';

//declaring date object and creating timestamp for screenshot
let now = new Date();
let timestamp = now.getDate()+"-"+(now.getMonth()+1)+"-"+now.getFullYear()
+"-["+now.getHours()+"-"+now.getMinutes()+"-"+now.getSeconds()+"]";

//capturing the screenshot of visible part of page
test('capturing screenshots - I', async ({page})=>{

    await page.goto('https://www.demoblaze.com/');

    await page.screenshot({path:"./screenshots/"+timestamp+" visiblepage.png"});
})

//capturing the screenshot of full page
test('capturing screenshots - II', async ({page})=>{

    await page.goto('https://www.demoblaze.com/');

    await page.screenshot({path:"./screenshots/"+timestamp+" fullpage.png",fullPage:true});
})

//capturing the screenshot of an element
test('capturing screenshots - III', async ({page})=>{

    await page.goto('https://www.demoblaze.com/');

    let activeImage = page.locator('div.active img');

    await activeImage.screenshot({path:"./screenshots/"+timestamp+" carouselImg.png"});
})