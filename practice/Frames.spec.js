import{test,expect} from '@playwright/test';
test("Handales Frames",async ({page})=>{

    await page.goto('https://demoqa.com/frames');
    const frame=await page.frameLocator('#frame1');
    await frame.locator("//h1[text()='This is a sample page']").click();

    console.log(await frame.locator("//h1[text()='This is a sample page']").textContent());
    await page.getByText('Elements').click();

});