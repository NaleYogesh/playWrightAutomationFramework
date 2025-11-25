import { test, expect } from '../Fixtures/testFixtures.js';

export class popularItem {
    constructor(page) {
        this.page = page;
        this.popularItem = page.locator("//a[text()='POPULAR ITEMS']");
        this.popularItemSection = page.locator("//h3[text()='POPULAR ITEMS']");
        this.productInPopularItem = page.locator("//p[@class='center productName roboto-medium ng-binding']");
        this.veiwDeatilButton = page.getByText("View Details");
        this.popularProductNameOnDetailPage=page.locator("//h1[@class='roboto-regular screen768 ng-binding']");
    }

    async clickOnPopularItem() {
        await this.popularItem.click();

    }

    verifyPopularItemSection() {
        return this.popularItemSection;
    }

    async  productsAvailableInPopularItemSection() {
        await this.page.waitForTimeout(5000);
      return   this.productInPopularItem.elementHandles();
        
    }

   async checkProductsAvailable() {
        const availablePopularElement = await this.productsAvailableInPopularItemSection();
        if (availablePopularElement.length === 0) {
            return false;
        }
        else {
            
            return true;
        }
    }
    async getfirstPupularProductName(){
       return (await this.productInPopularItem.first().textContent()).trim();
    }

    async clickOnViewMoreButton(){
        await this.veiwDeatilButton.first().click();
    }
    async getProductNameOnDetailPage(){
        return  (await this.popularProductNameOnDetailPage.textContent()).trim();
    }
        
}