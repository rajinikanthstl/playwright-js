import {test,expect} from '@playwright/test';
import fs from 'fs';
import {parse} from 'csv-parse/sync';


let testUsers = parse(fs.readFileSync('./test-data/data.csv','utf-8'), { columns: true , skip_empty_lines: true});

test.describe('Data Driven Testing',()=>{
    
    for (let data of testUsers){
        test(`login with ${data.username} and ${data.password}`, async({page})=>{
                await page.goto('https://practice.expandtesting.com/login');
                await page.locator('#username').fill(data.username);
                await page.locator('#password').fill(data.password);
                await page.locator('button[type="submit"]').click();

                if(data.expectedResult === 'success'){
                    await expect.soft(page.locator('#username')).toContainText(data.username);
                    await page.locator('a[href="/logout"]').click();
                }else{
                    await expect.soft(page.locator('.alert-danger')).toContainText('invalid!');
                }

                await page.close();
            })
    }
})