    
 import { test,expect } from "../Fixtures/testFixtures.js";

test.setTimeout(90000);
test.describe('login suite',()=> {

    test.beforeEach(async({loginPage})=>{
await loginPage.goto('/#/');
await loginPage.clickOnlogInIcon();
    });

    const userDetail=[
        {username:'Yogesh',password:'Password@123'}
    ];

test("Login Test with valid credential",async ({loginPage,ourProducts,csvData})=>{
    
await loginPage.enteruserName(csvData[0].userName);
await loginPage.enterPassword(csvData[0].Password);
await loginPage.clickRememberMe();
await loginPage.clickSignInButton();
const loggedUserName=await loginPage.getLoggedInUserName();
await expect(loggedUserName).toHaveText(/gesh/i);


});

test('invalid username',async({loginPage,csvData})=>{
await loginPage.enteruserName(csvData[1].userName);
await loginPage.enterPassword(csvData[1].Password);
await loginPage.clickRememberMe();
await loginPage.clickSignInButton();
const populatedMSG=await loginPage.invalidUserDeatilErrorMsg();
await expect(populatedMSG).toBeVisible({ timeout: 10000 });

});

});