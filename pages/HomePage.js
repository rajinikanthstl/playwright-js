import {expect} from '@playwright/test';
//Home page class
class HomePage{
    constructor(page){
        this.page = page;
        this.nameOfUser = "#nameofuser";
        this.logout = "#logout2";
        this.cart = "#cartur";
        this.products = "//h4[@class='card-title']/a";
        this.addToCartBtn = "//a[text()='Add to cart']";
    }

    async verifyLogin(){
        await expect(this.page.locator(this.nameOfUser)).toBeVisible();
    }

    async Logout(){
        await this.page.click(this.logout);
    }

    async addToCart(productName){
        console.log(productName);
        let listOfProducts = await this.page.locator(this.products).all();
        for(let product of listOfProducts){
            if((await product.textContent())===productName){
                await product.click();
                break;
            }
            let title = await product.textContent();
            console.log(title);
        }
        this.page.on('dialog',async (dialog)=>{
            await dialog.accept();
        })
        await this.page.locator(this.addToCartBtn).click();
    }

    async goToCart(){
        await this.page.locator(this.cart).click();
    }

}


export {HomePage};  //exporting the HomePage class