import{test,expect} from '@playwright/test'

test('alert handaling',async({page})=>{

    await page.goto("https://demoqa.com/alerts");

    //accept alert
    page.on('dialog',dialog =>{
 console.log(dialog.message())
 dialog.accept();
    });
 
  await page.locator("//button[@id='alertButton']").click();


  //dissmiss alert
  page.on('dialog1',dialog1=>{
    console.log(dialog1.message());
    dialog1.dismiss();
  })
  await page.locator("//button[@id='confirmButton']").click();

  //send a prompt and then accept aler
  page.on('prompAlert',promptAlert=>{
    console.log(promptAlert.message());
    promptAlert.accept("accepted yor promt");
  })
      await page.locator("//button[@id='promtButton']").click();

});
