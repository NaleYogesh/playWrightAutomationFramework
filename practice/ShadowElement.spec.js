import{test,expect} from '@playwright/test';
test("Shadow element handaling",async({page})=>{

    await page.goto("https://shoelace.style/");
    await page.locator(".only-light").click();
    await page.locator(".menu-item__label").nth(1).click();
     await page.locator(".only-dark").click();
     await page.locator("[value='light']").click();

});
