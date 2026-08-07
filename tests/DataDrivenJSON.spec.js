import {test,expect} from '@playwright/test';
import fs from 'fs';


let {testUsers} = JSON.parse(fs.readFileSync('./test-data/data.json','utf-8'));
test.describe('Data Driven Testing',()=>{
    for (let {username,password,expectedResult} of testUsers){
        test(`login with ${username} and ${password}`, async({page})=>{
                await page.goto('https://practice.expandtesting.com/login');
                await page.locator('#username').fill(username);
                await page.locator('#password').fill(password);
                await page.locator('button[type="submit"]').click();

                if(expectedResult === 'success'){
                await expect.soft(page.locator('#username')).toContainText(username);
                await page.locator('a[href="/logout"]').click();
                }else{
                await expect.soft(page.locator('.alert-danger')).toContainText('invalid!');
                }

                await page.close();
            })
    }
})