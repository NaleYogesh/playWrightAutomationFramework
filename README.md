# playWrightAutomationFramework
await promise.all([]);
test.skip(),slow(), fail(),only(),describe(),beforeEach().afterEach(),beforeAll(),afterAll()
testInfo.skip()

ANOTATION

tags for test - to  run perticulat test cases , provide singale tag and multiple tags
command to execute test- npx playwright test --grep "@Sanity" 
command to exclude test using tag - npx playwright test --grep-invert "@Regression" , 
Multiple Tag OR Logic == --grep "@sanity|@Rgression"
And Logic == npx playwright test --grep "(?=.*@Smoke)(?=.*@Sanity)"
provide anotaion to understand in report singale or multiple-test("verify special offer flow",{annotation:{type:'Flanky test',description:'Bug Id123'},tag:'@smoke'},async({specialOffer})=>{

COMMANDS TO RUN TEST
Run all Test
Run Singale Test File
Run Multiple Test File
Run test  with specific line === npx playwright test LoginTest.spec.js:25 --project=chromium
Run test Using title of test ===  npx playwright test -g "Login Test with valid credential"
Run test with specific browser
run test in debug 
run test with headed mode
show reoprt
Run test with count of worker === npx playwright test -g "Login Test with valid credential" --project=chromium --workers=2
last failed =npx playwright test --last-failed
to get list of test ==npx playwright test --list  also you can provide a tag name to get specific tag list == npx playwright test --grep "@smoke" --list --project=chromium


CONFIGURATION USING CONFIGURE FILE 
we can configure to run test on mobile browsers
We can ignore or execure perticular test cases using testIgnore testMatch
We can pass baseURL
we can cpature screen shot , vedio trace 


Parameterized Tests
1.ON test level-provide data in array and use in tets 
2.using CSV File 


Retries for a scenarios which failing concurrentely 
independent===npx playwright test tests/logintest.spec.js --headed --project=chromium --retries=3  --- a tets case which fail again try 3 time execution and before that if pass it stop 
serial -1.without retry ===its execute sequntially and any test fail remeing get skipped  2.with retry---if test fail remenig get skipped and in next retry again all tets cases get execute import { test, expect } from '@playwright/test'
test.describe.serial('Serial test cases', () => {
});


TIMEOUTS
Applicable on each action 
1.in test class -test.setTimeOut(2000);
2.in config file -timeOut:30000

aplicable induall action assertion 
1.in test expect(locator).toBeVisible({ timeout: 10_000 })
2.in config file 