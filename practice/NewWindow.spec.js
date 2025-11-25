import{test,expect} from '@playwright/test';
test.setTimeout(60000);
test("window handaling",async({page})=>{
const browser = await firefox.launch();
    await page.goto('https://demoqa.com/browser-windows');
    const newWindow =page.waitForEvent('popup');
    await page.getByText('New Window').nth(0).click();
    const newWindowOpened= await newWindow ;
    await newWindowOpened.waitForLoadState();
    console.log(await newWindowOpened.url());
    page.bringToFront();
  //  newWindowOpened.close();
 await page.getByText('New Window').first().click();
});