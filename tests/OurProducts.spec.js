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

test('get Product List', async ({ ourProducts }) => {
    await ourProducts.getAvailableProduct();
});

test('select product To shop', async ({ ourProducts }) => {
    const selectedproduct = (await ourProducts.availableOurProducts.first().textContent()).trim();
    await ourProducts.selectProductToShop();
    const shownProduct = await ourProducts.userOnSelectedProductPage();
    await expect(shownProduct).toHaveText(selectedproduct);

});


test('Apply price range filter for selecte product', async ({ ourProducts }) => {
    const selectedproduct = (await ourProducts.availableOurProducts.first().textContent()).trim();
    await ourProducts.selectProductToShop();
    const shownProduct = await ourProducts.userOnSelectedProductPage();
    await expect(shownProduct).toHaveText(selectedproduct);
    await ourProducts.clickOnPriceFilter();
    await ourProducts.setMinMaxPriceAndVerify();
    
 
});



test(' Apply Price Filter  And Verify Result',async({ourProducts})=>{
 const selectedproduct = (await ourProducts.availableOurProducts.first().textContent()).trim();
    await ourProducts.selectProductToShop();
    const shownProduct = await ourProducts.userOnSelectedProductPage();
    await expect(shownProduct).toHaveText(selectedproduct);
    await ourProducts.clickOnPriceFilter();
    await ourProducts.setMinMaxPriceAndVerify();
    await ourProducts.verifyProductFilterOutBetweenSelectedPriceRange();

});


test('Apply filters and verify', async ({ ourProducts }) => {
    const selectedproduct = (await ourProducts.availableOurProducts.first().textContent()).trim();
    await ourProducts.selectProductToShop();
    const shownProduct = await ourProducts.userOnSelectedProductPage();
    await expect(shownProduct).toHaveText(selectedproduct);
    const selectedCompatability = await ourProducts.ApplyCompatabilityFilter();
    //const selectedManfacture = await ourProducts.ApplyManfactureFilter();
   // const selectedWeight = await ourProducts.ApplyWeightFilter();
  // const selectedWireless = await ourProducts.ApplyWierlessFilter();
    const verifySelectedOption =await ourProducts.verifyAppliedFilter();
    await expect(selectedCompatability).toBe(verifySelectedOption);
});

test('check after select some product only that product available',async({ourProducts})=>{
    const selectedproduct = (await ourProducts.availableOurProducts.first().textContent()).trim();
    await ourProducts.selectProductToShop();
    console.log(selectedproduct)
    const removeS=selectedproduct.replace(/s$/i,"");
    console.log(removeS);
     await ourProducts.verifyReflectedProducts(removeS);
});

 test('verify breadcums',async({ourProducts})=>{
     const selectedproduct = (await ourProducts.availableOurProducts.first().textContent()).trim();
     await ourProducts.selectProductToShop();
     const selectedPro= await ourProducts.verifyBreadcumForSelectedProducts();
     expect(selectedPro.toLowerCase()).toContain(selectedproduct.toLowerCase());
     const selectedProductTocart=await ourProducts.selectProduct();
     const selectedPros= await ourProducts.verifyBreadCumForSelectedProduct();
     expect(selectedPros.toLowerCase()).toContain(selectedProductTocart.toLowerCase());


 })
     
    