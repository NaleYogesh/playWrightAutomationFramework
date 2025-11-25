import { test, expect } from "@playwright/test"

test("user intraction", async ({ page }) => {

    await page.goto("https://demoqa.com/");
    //click Intraction
  /*  await page.getByText('Interactions').click();
    await page.getByText('Selectable').click();

    //double click
    await page.getByText('Elements').click();
    await page.getByText('Buttons').nth(0).click();
    await page.getByText('Double Click Me').dblclick();
    const text = await page.getByText('You have done a double click');
    await expect(text).toBeVisible();
    await expect(text).toHaveText('You have done a double click');

//right click
await page.getByText('Right Click Me').click({button:'right'});
await expect(await page.getByText('You have done a right click')).toBeVisible();

//type
await page.getByText('Text Box').click();
await page.locator('#userName').click();
await page.locator('#userName').type("Yogesh",{delay:1000});
await page.locator('#userName').clear();

//check uncheck
await page.getByText('Check Box').click();
await page.locator('.rct-checkbox').check();
console.log(await page.locator('.rct-checkbox').isChecked());
await page.locator('.rct-checkbox').uncheck();
console.log(await page.locator('.rct-checkbox').isChecked());


//dropdown handaling 
await page.locator("//div[text()='Forms']").click();
await page.getByText('Practice Form').click();
await page.locator("//div[@id='state']").click();
await page.getByText("Uttar Pradesh", { exact: true }).click();
await page.locator('div').filter({ hasText: /^Select City$/ }).first().click();
await page.getByText("Agra", { exact: true }).click();

//hover
await page.getByText('Widgets').click();
await page.getByText('Tool Tips').click();
await page.locator("//button[@id='toolTipButton']").hover();


//upload file
await page.getByText('Elements').click();
await page.getByText('Upload and Download').click();
await page.getByRole('button', { name: 'Select a file' }).setInputFiles(
  'C:/Documents/The bridge Document/#37671 - Add a Date Picker to the P.txt'
);
*/
//drag and drop
await page.getByText('Interactions').click();
await page.getByText('Droppable').click();

page.dragAndDrop("//div[@id='draggable']","//div[@id='droppable']");
await page.getByText('Upload and Download').click();


});