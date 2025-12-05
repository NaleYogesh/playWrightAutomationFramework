import{test,expect} from "@playwright/test";
test.setTimeout(60000);
test('check promise all feature',{tag:"@smoke"},async({page})=>{
await page.goto('https://httpbin.org/forms/post')
 const name=  page.locator("//input[@name='custname']");
const telephoen = page.getByRole('textbox', { name: 'Telephone:' });
const email= page.locator("//input[@name='custemail']");
const pizzaSize= page.getByRole('radio', { name: 'Small' });
const pizzToping=  page.locator("//input[@value='bacon']");
const deliveryTiming= page.getByRole('textbox', { name: 'Preferred delivery time:' });
const deliveryInstruction= page.locator("//textarea[@name='comments']");

await Promise.all([
name.fill("Yogesh Sopan nale"),
pizzToping.check(),
deliveryTiming.fill("12:30"),
deliveryInstruction.fill("All good "),

]);

await telephoen.fill('9604677424');
await email.fill("naleyogesh@gmail.com");

await pizzaSize.check();
await Promise.all([
    page.waitForNavigation(),
    page.getByText('Submit order').click()
  ]);
});

test("Run for Array",async({page})=>{
  const user=[
{username:'Yogesh',sirname:"Nale"},
{username:'mahesh',sirname:'Dange'}
  ]

  for(const de of user){
    console.log(de.username +" And "+de.sirname);
  }
  
});