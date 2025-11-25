    
 import { test,expect } from "../Fixtures/testFixtures.js";

test.setTimeout(60000);
test.describe('login suite',()=> {

    test.beforeEach(async({loginPage})=>{
await loginPage.goto('https://advantageonlineshopping.com/#/');
await loginPage.clickOnlogInIcon();
    });
test("Login Test with valid credential",async ({loginPage,ourProducts})=>{
    

await loginPage.enteruserName('Yogesh');
await loginPage.enterPassword('Password@123');
await loginPage.clickRememberMe();
await loginPage.clickSignInButton();
const loggedUserName=await loginPage.getLoggedInUserName();
await expect(loggedUserName).toHaveText(/gesh/i);


});

test('invalid username',async({loginPage})=>{

await loginPage.enteruserName('Samadhan');
await loginPage.enterPassword('Password@123');
await loginPage.clickRememberMe();
await loginPage.clickSignInButton();
const populatedMSG=await loginPage.invalidUserDeatilErrorMsg();
await expect(populatedMSG).toBeVisible({ timeout: 10000 });

});

});