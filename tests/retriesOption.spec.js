import{test} from "@playwright/test";

test.describe("to check serial functionaliyty",( )=>{

    test("first tets",async({page})=>{
        console.log("execution of first test");
    });
     test("2nd tets",async({page})=>{
        console.log("execution of 2nd test");
    });
     test("3rd tets",async({page},testInfo)=>{
        console.log("execution of 3rd tes " +         testInfo.retry);
        if(testInfo.retry<9){
            test.fail();
        }
    });
     test("4th tets",async({page})=>{
        console.log("execution of 4th test");
    });
});
