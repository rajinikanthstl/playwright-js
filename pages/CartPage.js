import { expect } from "playwright/test";
//Cart page class
class CartPage{
    constructor(page){
        this.page = page;
        this.products = "#tbodyid>tr>td:nth-child(2)";
        this.delete = "#tbodyid>tr>td>a";
    }

    async verifyAddToCart(productName){
        let listOfProducts = this.page.locator(this.products);
        let found = false;
        for(let i=0;i<await listOfProducts.count();i++){
            console.log(await listOfProducts.nth(i).textContent());
            if(await listOfProducts.nth(i).textContent()===productName){
                found = true;
                break;
            }
        }
        await expect(found).toBeTruthy();
    }

    async deleteFromCart(productName){
        let listOfProducts = this.page.locator(this.products);
        let deleteBtn = this.page.locator(this.delete);
        for(let i=0;i<await listOfProducts.count();i++){
            if(await listOfProducts.nth(i).textContent()===productName){
                console.log(await listOfProducts.nth(i).textContent());
                await deleteBtn.nth(i).click();
                await this.page.waitForTimeout(2000);
                break;
            }
        }
    }
}
export {CartPage}; //exporting the CartPage