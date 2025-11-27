import{test,expect} from '@playwright/test'


test('just temp test',async({page})=>{
const a = new Date();
console.log(a);
const dateOnly = a.toISOString().split('T')[0];
console.log(dateOnly); //

});