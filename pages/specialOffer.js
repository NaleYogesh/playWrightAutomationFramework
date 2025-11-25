import{test,expect} from '../Fixtures/testFixtures';

export class specialOffer{
constructor(page){
    this.page=page;
this.specialOffer=page.locator("//a[text()='SPECIAL OFFER']");
this.specialOfferSection=page.locator("//h3[text()='SPECIAL OFFER']");
this.seeOfferButton=page.locator('#see_offer_btn');
this.specialOfferPrductname=page.locator("//h1[@class='roboto-thin ng-binding']");
this.productNameOnOfferDeatilPage =page.locator("//h1[@class='roboto-regular screen768 ng-binding']");
}



async clickOnSpecialOffer(){
await this.specialOffer.click();
}

 verifySpecialOfferSection(){
    return  this.specialOfferSection;
}

async clickOnSeeOfferButton(){
   await this.seeOfferButton.click();
}
async getSpecialOfferProductName(){
    return await this.specialOfferPrductname.textContent();
}

async productNameOnOfferDeatilPages(){
    return (await this.productNameOnOfferDeatilPage).textContent();
}

}