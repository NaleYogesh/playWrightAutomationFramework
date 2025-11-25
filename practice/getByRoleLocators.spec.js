import{test,expect} from '@playwright/test'
test.setTimeout(60000);

test('alert handaling',async({page})=>{
    await page.goto("https://demoqa.com/elements");
    await page.getByText('Text Box').click();
    const box=await page.getByRole('textbox',{name:'Full Name'})
    await box.click();
    await box.fill('Yogesh');
    await page.getByText('Links').nth(0).click();
    await page.getByRole('link',{name:'Created'}).click();
    
    
});
