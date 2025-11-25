import{test,expect} from '@playwright/test';
test("nested Frames",async({page})=>{

    await page.goto("https://demoqa.com/nestedframes");
    const parentFrame=page.frameLocator('#frame1');
   console.log(await  parentFrame.locator("//body[text()='Parent frame']").textContent());
   const childFrame=parentFrame.frameLocator("iframe");
   console.log(await childFrame.locator("//p[text()='Child Iframe']").textContent());
});