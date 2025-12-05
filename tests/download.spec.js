import { test, expect } from "@playwright/test";

test("download File", async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/download');
    const downloadPromise = page.waitForEvent('download');
    const downloadLink = page.locator("//a[@data-testid='some-file.txt']");
    await downloadLink.waitFor({ state: "visible" });
    await downloadLink.click();
    const download = await downloadPromise;

    await download.saveAs('C:/PlaywrightAuto/test-results/' + download.suggestedFilename());

})

async function genericMethod(page, elmenetToOpenWindow) {
    const newTab = page.waitForEvent('popup', { timeout: 60000 });
    await page.locator(elmenetToOpenWindow).click({timeout:30000});
    const openedTab = await newTab;
    await openedTab.waitForLoadState();
    return openedTab;




}


test("Handaling multiple tab", { tag: "@HnadaleWindow" }, async ({ page }) => {
    await page.goto('https://www.qaplayground.com/practice/window')
    const element = "//button[text()='Open Home Page']";
    const newOpenedWindow = await genericMethod(page, element);
    console.log(await newOpenedWindow.url());
    await newOpenedWindow.bringToFront();
    await newOpenedWindow.locator("//button[text()='Get Started']").click({ timeout: 60000 });
    await page.bringToFront();
    const multipleWindowElement ="//button[text()='Multiple windows']";
    const MultipleWindowTab =await genericMethod(page, multipleWindowElement);
    await MultipleWindowTab.bringToFront();
   const viewTutorialTab="//span[text()='Watch tutorial']";

     const viewTutorial=await genericMethod(viewTutorialTab, viewTutorialTab);





})

test("Handale New Window",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Windows.html");
    await page.getByText('Open New Seperate Windows').click();
    const clickButton ="//button[text()='click']";
   const newWindow= await genericMethod(page,clickButton);
   await newWindow.bringToFront();
 await newWindow.locator("//span[text()='Documentation']").click();
})

test('Handale Frame page.frame',async({page})=>{
    await page.goto("https://testpages.herokuapp.com/pages/embedded-pages/frames/");
 //  const footerFrame= await page.frame({name:'footer'});
    const footerFrame=await page.frameLocator("//frame[@name='footer']");
    await footerFrame.locator("//a[text()='Contact Us']").click();

})

test("te",async({page})=>{
    await page.goto("https://thebridge.dev.bridgespecialty.com/home");
    await page.locator('#i0116').fill('tabdev@yopmail.com');
     await page.locator('#idSIButton9').click();
    await page.locator('#i0118').fill('Password@123');
    await page.locator('#idSIButton9').click();
     await page.locator('#idSIButton9').click();

    
})