import {test,expect} from '@playwright/test';

test('Soft Assertion', async ({page})=>{

    await page.goto('https://practice.expandtesting.com/login');

    //assert page title
    let title = await page.title();

    await expect.soft(title).toBe('Test Login Page for Automation Testing Practices');

    let username = page.getByLabel('Username');
    let password = page.getByLabel('Password');
    let loginBtn = page.getByRole('button',{name:'Login'});

    await username.fill('practice');
    await expect.soft(username).toHaveValue('practice');

    await password.fill('passwords');
    await expect.soft(password).toHaveValue('SuperSecretPassword!');

    await loginBtn.click();

    let uname = await page.locator('#username');
    await expect.soft(uname).toHaveText('rajesh');

    let logout = await page.locator('//i[normalize-space()="Logout"]');
    await logout.click();


})