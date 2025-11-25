import{test,expect} from '@playwright/test';

test.setTimeout(60000);
test('WindowHandaling',async({page})=>{

    await page.goto("https://demoqa.com/browser-windows");
    const newTab = page.waitForEvent("popup");
    await page.getByText('New Tab').click();
    const openednewtab =await newTab;
    await openednewtab.waitForLoadState();
    console.log(await openednewtab.url());
    await expect(openednewtab.locator("#sampleHeading")).toBeVisible();
    await page.bringToFront();
    console.log(await page.title());
    openednewtab.close();
  
});