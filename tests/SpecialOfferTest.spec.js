import { test, expect } from '../Fixtures/testFixtures.js';
test.setTimeout(90000);

test.beforeEach("Login Test with valid credential", async ({ loginPage }) => {
    await loginPage.goto('https://advantageonlineshopping.com/#/');
    await loginPage.clickOnlogInIcon();
    await loginPage.enteruserName('Yogesh');
    await loginPage.enterPassword('Password@123');
    await loginPage.clickRememberMe();
    await loginPage.clickSignInButton();
    const loggedUserName = await loginPage.getLoggedInUserName();
    await expect(loggedUserName).toHaveText(/gesh/i);


});
/*
test("verify special offer flow",async({specialOffer})=>{
await specialOffer.clickOnSpecialOffer();
await expect(specialOffer.verifySpecialOfferSection()).toBeVisible();
const availableProductInSpecialOffer=await specialOffer.getSpecialOfferProductName();
await specialOffer.clickOnSeeOfferButton();
const productNameAfterOpenPoductDetail=await specialOffer.productNameOnOfferDeatilPages();
await expect(availableProductInSpecialOffer.toLowerCase()).toBe(productNameAfterOpenPoductDetail.toLowerCase());


});
*/

