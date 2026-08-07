import {test,expect} from '@playwright/test';

test('reading dotenv', async({page})=>{
    //fetching data from .env file
    let url = process.env.url;
    let uname = process.env.uname;
    let pwd = process.env.password;
    let keyword = process.env.keyword;

    //printing the data from .env
    console.log(url);
    console.log(uname);
    console.log(pwd);
    console.log(keyword);

    await page.goto(url);

    let search = page.getByRole('searchbox',{name:'Search Amazon.in'});
    await search.fill(keyword);
    await search.press('Enter');
})

/*
steps to configure and read a dotenv file:
install dotenv -> npm install dotenv
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });
*/