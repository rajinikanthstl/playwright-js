import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';   //importing page objects
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

let page;
//using hooks beforeEach and afterEach
test.beforeEach(async ({browser})=>{
    page = await browser.newPage();
    let login = new LoginPage(page);
    await login.openWebsite();
    await login.Login('rajeshrajie.qa','Rajesh@123');
})

test.afterEach(async ()=>{
    let home = new HomePage(page);
    await home.Logout();
    await page.close();
})

//verifying login
test('login test', async ()=>{
    let home = new HomePage(page);
    await home.verifyLogin();
})

//adding product to cart
test('add to cart', async ()=>{
    let home = new HomePage(page);
    await page.waitForTimeout(2000);
    await home.addToCart('Sony vaio i5');
})

//verifying the product present in cart
test('verify a product from cart', async ()=>{
    let home = new HomePage(page);
    let cart = new CartPage(page);
    await home.goToCart();
    await page.waitForTimeout(2000);
    await cart.verifyAddToCart('Sony vaio i5');
})

//deleting a product from cart
test('delete a product from cart', async ()=>{
    let home = new HomePage(page);
    let cart = new CartPage(page);
    await home.goToCart();
    await page.waitForTimeout(2000);
    await cart.deleteFromCart('Sony vaio i5');
})