import{test,expect} from '@playwright/test';

test.setTimeout(60000);

test.describe("describe test",()=>{

    test.beforeAll(async()=>{
console.log("it will get execute before all");
    });

    test.afterAll(async()=>{
console.log("it will get execute after all");
    });

    test.beforeEach(async({page})=>{
console.log("it will get execute before each ");
    });

    test.afterEach(async({page})=>{
console.log("it will get execute after each");
    });

    test("info",async({page})=>{
console.log('test1');
    });
    test('info1',async({page})=>{
console.log('test2');
    });
});

 test("info",async({page})=>{
console.log('another test outside');
    });