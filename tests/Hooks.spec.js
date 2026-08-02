import {test,expect,chromium} from '@playwright/test';

//declaring global browser and page variables
let browser = null;
let page = null;

//launching the browser and navigating to url
test.beforeAll(async ()=>{
    console.log('beforeAll');
    browser = await chromium.launch();
    page = await browser.newPage();
    await page.goto('https://www.demoblaze.com/');
})

//loging into the application
test.beforeEach(async ()=>{
    console.log('beforeEach');
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('rajeshrajie.qa');
    await page.locator('#loginpassword').fill('Rajesh@123');
    await page.getByRole('button',{name:'Log in'}).click();
})

//verifying the login
test('login test',async ()=>{  
    console.log('login test');  
    let username = await page.locator('#nameofuser');
    await expect(username).toBeVisible();
    
})

//adding product to cart and verifying cart
test('add to cart',async ()=>{
    console.log('add to cart');
    await page.locator('//a[text()="Samsung galaxy s6"]').click();
    await page.getByText('Add to cart').click();
    await page.locator('#cartur').click();
    let cartItem = page.locator('#tbodyid td:nth-child(2)');
    await expect(cartItem).toHaveText('Samsung galaxy s6'); 
})

//taking screenshot after test and logging out of application
test.afterEach(async ({},title)=>{
    console.log('afterEach');
    await page.screenshot({path:`./screenshots/${title.title}.png`});
    await page.click('#logout2');
})

//closing the browser and page finally
test.afterAll(async ()=>{
    console.log('afterAll');
    await page.close();
})