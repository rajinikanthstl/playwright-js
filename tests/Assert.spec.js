import {test,expect} from '@playwright/test';

test.skip('Assertions In Tests', async ({page})=>{
    
    //open url
    await page.goto('https://practice.expandtesting.com/bookstore');

    //1.Page level assertions
    //verify page title
    await expect(page).toHaveTitle('E-commerce Bookstore Example for Practicing Automated Tests');

    //verify page url
    await expect(page).toHaveURL('https://practice.expandtesting.com/bookstore');

    //2.Element state assertions

    await page.getByText('Sign In').click();
    // await expect(page).toHaveTitle('E-commerce Bookstore Example signin | Automated Tests');
    // await expect(page).toHaveURL('https://practice.expandtesting.com/bookstore/user/signin');

    //locate Email and Password

    const userEmail = page.locator('#email');
    const password = page.locator('#password');
    const signinButton = page.locator('#submit');
    const errorMessage = page.locator('#flash');
    
    //verify email and password fields are visible
    await expect(userEmail).toBeVisible();
    await expect(password).toBeVisible();
    await expect(signinButton).toBeVisible();

    //verify web elements to be enabled and editable
    await expect(userEmail).toBeEnabled();
    await expect(password).toBeEnabled();
    await expect(signinButton).toBeEnabled();

    await expect(userEmail).toBeEditable();
    await expect(password).toBeEditable();

    //3.Text and Value Assertion
    await userEmail.fill('rajinikanthc.testing@gmail.com');
    await expect(userEmail).toHaveValue('rajinikanthc.testing@gmail.com');

    await password.fill('Rajesh@123');
    await expect(password).toHaveValue('Rajesh@123');
    await expect(errorMessage).not.toBeVisible();

    await signinButton.click();
    
    //verify user navigated to homepage
    const profile = page.locator('#core h1');
    const username = page.locator('#welcome-message');

    await expect(profile).toBeVisible();
    await expect(profile).toHaveText('Profile');
    await expect(username).toBeVisible();
    await expect(username).toContainText('Hello');
    console.log(await username.textContent());

    //4. Attribute - Assertion
    const dropdownButton = page.locator('#navbarDropdown');
    await expect(dropdownButton).toHaveAttribute('role');

    //6.Class - Assertion
    await expect(dropdownButton).toHaveClass('nav-link dropdown-toggle d-flex align-items-center');

    //7.Id - Assertion
    await expect(dropdownButton).toHaveId('navbarDropdown');

    //8.count - Assertion
    await page.getByText('All Books').click();
    const books = page.locator('div.card-product-user');

    await expect(books).toHaveCount(5);

    await dropdownButton.click();
    await page.locator('#logout').click();


    await page.waitForTimeout(4000);

})