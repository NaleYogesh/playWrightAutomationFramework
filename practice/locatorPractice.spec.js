import { test, expect } from '@playwright/test';

test('practice locator', async ({ page }) => {

    await page.goto("https://demoqa.com");

    // CSS selectors  

    //locate element using text 
    await page.getByText('Elements').click();
    await page.getByText('Text Box').click();


    //locate element using css id 

    const FullName = await page.locator('#userName');
    console.log(await page.locator('#userName').getAttribute("id"));
    await FullName.click();
    await FullName.fill("Yogesh Sopan Nale");

    //locate element using css atribute and value
    const emailID = await page.locator('[placeholder="name@example.com"]');
    await emailID.click();
    await emailID.fill("yogeshnale@yopmail.com")

    //locate element using css combination id and placeholder

    const address = await page.locator('#currentAddress[placeholder="Current Address"]');
    await address.click();
    await address.fill("Astagaon rahata");

    //locate element using xpath
    const permanentAddress = await page.locator("//textarea[@id='permanentAddress']");
    await permanentAddress.click();
    await permanentAddress.fill("fdhfjndfn jkefbef");

    //locate element using xpath text
    await page.locator("//span[text()='Check Box']").click();

    //locate element using css class
    const checkBox = await page.locator('.rct-checkbox');
    checkBox.click();
    await expect(checkBox).toBeChecked();

    //extract text
    await page.getByText('Radio Button').click();
    const text = await page.getByText('Do you like the site?');
    console.log(await text.textContent());
    console.log(await text.innerText());
    console.log(await text.allTextContents());


    //asertion with time out ans ignore case
await page.getByText('Web Tables').click();
const tableText=await page.locator("//h1[text()='Web Tables']");
await expect(tableText,{timeouts:1000}).toBeVisible();

const firstName =await page.locator("//div[text()='First Name']");
await expect(firstName).toHaveText("FIRST NAME",{ignoreCase:true});

});