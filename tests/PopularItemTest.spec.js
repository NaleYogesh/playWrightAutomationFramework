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
test("get Available Product List", async ({ popularItem }) => {
    await popularItem.clickOnPopularItem();
    expect(await popularItem.verifyPopularItemSection()).toBeVisible();
    const getAvailablePopularProductList =await popularItem.productsAvailableInPopularItemSection();
    for(const element of getAvailablePopularProductList ){
        console.log((await element.textContent()).trim());
    }
});
*/
test("check details of available popular product", async ({ popularItem },testInfo) => {
    await popularItem.clickOnPopularItem();
    expect(await popularItem.verifyPopularItemSection()).toBeVisible();
    const popularProductAvailable = await popularItem.checkProductsAvailable();
    if(popularProductAvailable){
        console.log("Test Skiped due to products not available");
        testInfo.skip();

    }
    const firstPopularProduct=await popularItem.getfirstPupularProductName();
    console.log(firstPopularProduct);
    await popularItem.clickOnViewMoreButton();
    const productNameOnDetailPage=await popularItem.getProductNameOnDetailPage();
     console.log(productNameOnDetailPage);
    expect(firstPopularProduct.toLowerCase()).toBe(productNameOnDetailPage.toLowerCase());
});
