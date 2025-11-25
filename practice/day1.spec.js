//Import test and expect
import{test,expect} from "@playwright/test";

// problem 1st-Goes to https://www.wikipedia.org/
//Prints the title
// Prints the URL

test('Open Wikipedia',async({page}) =>{
 await page.goto("https://www.wikipedia.org/");
 console.log("Title of page " + await page.title());
 let URLPage=await page.url();
console.log("Page URL " + URLPage);
});


