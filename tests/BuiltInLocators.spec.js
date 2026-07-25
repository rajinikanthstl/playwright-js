
/*
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute.
*/

import {test,expect} from '@playwright/test';

test("Built-in Locators-I", async ({page})=>{
    
   await page.goto("https://practice.expandtesting.com/locators");
   
   //1.getByRole()
   await page.getByRole('button', { name: 'Add Item' }).click();
//    await page.getByRole('link',{name:'Contact'}).click();

   //2.getByText()
   let textElement = await page.getByText("🔥 Hot Deal: Buy 1 Get 1 Free",{exact:true});
   expect(textElement).toBeVisible();
   console.log(await (textElement).textContent());

    //3.getByLabel()
    let labelOptions = await page.getByLabel("Choose a country");
    await labelOptions.selectOption("Japan");
    await page.getByLabel("Email for newsletter").fill("Rajesh");
    

    //4.getByPlaceholder()
    await page.getByPlaceholder("Search the site").fill("playwright");
    await page.getByPlaceholder("Filter by tag").fill("automation");

    //5.getByAltText()
    let image = await page.getByAltText("User avatar");
    await expect(image).toBeVisible();

    //6.getByTitle()
    await page.getByTitle("Refresh content").click();

    //7.getByTestId()
    let testIdElement1 = await page.getByTestId("status-message");
    let testIdElement2 = await page.getByTestId("user-name");
    console.log(await testIdElement1.textContent());
    console.log(await testIdElement2.textContent());

    await page.waitForTimeout(4000);

})

test.skip('Built-in Locators-II',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    //1.getByRole()
    await page.getByRole('button',{name:'Primary Action'}).click();  //button
    await page.getByRole('textbox',{name:"Username"}).fill("playwright");  //textbox
    await page.getByRole('checkbox',{name:"Accept terms"}).check();   //checkbox

    //2.getByText()
    await page.getByText('List item 2 with link').highlight();
    await page.getByText('Submit Form').click();

    //3.getByLabel()
    await page.getByLabel('Email Address:').fill('rajesh@gmail.com');
    await page.getByLabel('Password:').fill('password');
    await page.getByLabel('Your Age:').fill('33');
    await page.getByLabel('Standard').check();

    //4.getByPlaceholder()
    await page.getByPlaceholder('Enter your full name').fill('Rajesh Chatla');
    await page.getByPlaceholder('Phone number (xxx-xxx-xxxx)').fill('0897652134');
    await page.getByPlaceholder('Search products...').fill('books');

    //5.getByAltText()
    let img = await page.getByAltText('logo image');
    await expect(img).toBeVisible();
    console.log(await img.getAttribute('alt'));

    //6.getByTitle()
    await page.getByTitle('Home page link').highlight();
    await page.getByTitle('HyperText Markup Language').hover();
    await page.getByTitle('Tooltip text').highlight();
    await page.getByTitle('Click to save your changes').click();

    //7.getByTestId()
    let profilename = await page.getByTestId('profile-name');
    console.log(await profilename.textContent());
    let product = await page.getByTestId('product-card-2').textContent();
    console.log(product.trim());
    let link = await page.getByTestId('nav-products').textContent();
    console.log(link);


    await page.waitForTimeout(4000);
    
})