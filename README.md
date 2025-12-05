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
2.in config file ---{ expect: { timeout: 10_000 } }

Actions--
fill(),check(), locator.selectOption()--using index. value .label.text , Mouse click - click(),dblclick(),click({ button: 'right' }); ,hover();

Type characters- ---press() ,.keyboard.type(" ",{delay:900})




LOCATOR
1.getByLabel -- we can use which element tagname is <input> <textarea> <select> <checkbox> <radio> <switch> aria-label values
2.getByText ---a text value of element like <button> Submit button </submit>
3.getByRole ---button ,link ,checkbox ,radio ,textbox --getByRole('button',{name:''})
4.page.getByPlaceholder()  --- palceholder value 

locate element using --css ,xpath 



ASSERTION
1.toBeChecked(); -To check checkbox is checked 
2.Use .not. to reverse  locator result
3.Soft Assertion - use soft  assertion -await expect(soft(actual value)).toBe(expected);
4.provide custome msg if required -await expect(value, 'should be logged in').toBeVisible();


UPLOAD FILE-
1 .set file -                 import path from 'path';
                              import { fileURLToPath } from 'url';
                              const __filename = fileURLToPath(import.meta.url);
                              const __dirname = path.dirname(__filename);
                              locator().setInputFiles(path.join(__dirname,'../Utils/TestData/data.csv'));
2.Remove Selected File-       locator()setInputFile([]);
3.pass multiple file          locator().setInputFile([path.join(_dirName,'../MydataFile'),path.join(_dirname,'../MydataFile')])


DRAG AND DROP
await page.locator('').dragTo(await page.locator(" "));

SCROLLING-
1.locator().scrollIntoViewIfNeeded();

CAPTURE SCREEN SHOT ON ELEMENT LEVEL
await page.locator().screenshot({path:""})

HANDALE DIALOGS -
we need to wright handale dialog code before its populate 
accept() .dismiss() , and for prompt alert send msg insided then accept or dismiss like accept("some msg);
1--page.on('Accept Dailog',Accept Dailog =>Accept Dailog.accept());
2--page.on('acceptDialog',AcceptDialog =>{
    console.log(acceptDialog.message);
    acceptDialog.accept();
})

DOWNLOAD FILE -

const downloadpromise =page.waitForEvent('download');
page.locator('').click();
const download = await downloadpromise;
await download.saveAs('path' +download.suggestedFilename());


--EVENT WINDOW HANDALING/TAB-- 
const newWindow = page.waitForEvent('popup');
page.locator("").click();
const newOpenedWindow =await newWindow;
await newOpenedWindow.waitForLoadstate();

now newOpenedWindow object use this to handale element which available on child window page 


pageRef.bringToFront()  after open a new tab or to focus on new tab use bringToFront() with that page ref
.close() to close new open window



-------FRAMES-----
we can handale a frames using
1.page.frame('name or URL')
2.page.frameLocator('') --- locate that frame using selectors 

after locate frame store in verible and then use that veriable intsed of page.locator like veriable.locator to handale element available inside frames




---------Manual Testing: Beginner to Pro – Become Industry-Ready with Interview Preparation ---------

*******************1.Lecture ***************

1- Introduction

Welcome & Instructor Introduction
        Welcome & Instructor Introduction

Welcome to our course on Manual Testing: From Beginner to Pro! I’m your instructor, and I’m excited to guide you through this journey to becoming a skilled software tester. Whether you're a complete beginner or have some experience, by the end of this course, you’ll be well-prepared to start working as a software tester.
In this course, I’ll explain why software testing is crucial during the development of any application. We’ll cover all the essential concepts you need to know to become proficient in manual software testing. I will provide you with detailed notes and resources to ensure your success.
Additionally, we’ll explore how to find a job as a software tester, whether you’re a fresher or have prior experience. I’ll guide you on how to navigate job portals, write effective resumes, and stand out in interviews.
By the end of the course, I will also share common interview questions you’re likely to face and provide tips on how to answer them confidently.
Let’s dive in and start learning software testing!


----------Course Overview-------------

----<Introduction to Manual Testing with  Concepts and real time scenarios> ------
First, we’ll cover all the key concepts used in manual testing. You’ll learn the theory behind each concept, and alongside that, I’ll explain these concepts with real-world examples to make the learning process more relatable and practical.
-----Real-Time Work Scenarios---------
After covering the concepts, I’ll walk you through how manual testing works in actual companies. You’ll gain insight into the day-to-day operations of a software testing role in a real-time environment.
--------Interview Preparation-----
I will focus on the most commonly asked questions during the interview process. We’ll not only discuss the theoretical aspects but also how to demonstrate your experience and show your understanding of these concepts in a practical way during interviews.
---------Job Search Guidance----
Finally, at the end of the course, I’ll guide you on how to find a job as a software tester, whether you’re a fresher or experienced. I’ll share tips on creating an effective resume, navigating job portals, and preparing for interviews.


-----------Let’s meet in the next video,[next lecture topis vedio]-----------

***************LECTURE 2**************
1.<What exactly is software testing.
2.<Why is testing is required?
3.<What is the Software Development Life Cycle (SDLC)?
5.<What are the differences between the Agile and Waterfall models, and how do they influence the testing process? 


1.software testing-----
Therotically --<Software testing -- is the process in which we check that the software application is working as per the requirements>.
explanation --- so lets take real time exapmle regarding testing for example lets take example of lift so every one are  used lift , so lift are working with some basic rules like when we press button of lift then lift need to reach that floor then door need to get open then after some fixed duration door again need to get closed and when  we press any foor number like we on the floor 1 and we press 5 th floor number then lift need to move to floor 5th these are besic functionality or we can say working of lift but there are some condition also like if any object detect between lift door , door  will not get closed and without door closed lift can not moove then also condition likes can not exceed the max weight cappacity , door  will not open when lift is moving ,so checking lift is working with this rules means testing and same things doing with software means check that application with some condition and rules we can say software testing 

-------------------#2. Why is Testing Required?#-------------------

Let’s consider the example of a lift. Suppose we didn’t check whether the lift is working as per the requirements before installation. In that case, there are high chances that incidents could occur, such as the lift doors opening while the lift is moving or the lift moving even when overloaded. These are serious safety risks. Hence, before people start using the lift, we need to ensure it meets all safety and functional requirements.
The same principle applies to software testing. If a software application does not work according to the requirements, it can negatively impact both the business and the user experience. Before releasing the application to users, testers check the application under both positive and negative conditions to ensure it functions properly. Only after these tests are completed successfully is the software ready for release.

-------------3.What is the Software Development Life Cycle (SDLC)?---------------

<In:simple terms, the Software Development Life Cycle (SDLC) means the entire process in which our application is developed and ready to be released for users to use.Following are stages which include in SDLC 

1.Requirment gathering and anylysis 
2.Design 
4.coding 
5.Testing 
6.release 
7.maintance 

1.Requirement Gathering and Analysis – This is the initial phase of the SDLC, where Business Analysts collect the information or requirements about the project from the client.BA create the SRS (Software Requirements Specification) document. and after analyze this information BA create functional requirment Specification documnet, the Business Analyst explains the project requirements to the team, including designers, developers, and testers. Once this is done, the project implementation begins.

2.Design -After Getting FRS document the designers start the design the application as per requirment.
3.Coding – After receiving the FRS (Functional Requirements Specification) document, developers start coding according to the requirements.
4.Testing – After coding is complete, testers receive the application to test. In this phase, testers verify the application against the requirements and ensure it is working properly.
5.Release – After the testing phase is complete, the application is released for user use.
6.<Maintenance – After the release on production, if required, maintenance is provided by the organization to the client>.


------5.What are the diffrent models in SDLC?

There are diffrent models in SDLC Agile ,Waterfall and Hybrid but most of the otgnaztion are using Agile models so we only take agile model to reduce the confusion between models and you need only understanding of one model asno one going to ask you explanation about all models you only need to explain a models which you know or a model on which you works so lets start agile model.

before start agile model understand some basic words meaning which using in orgnasation so you can understand clearly -

<Client: An organization or person for whom the software is being developed.
Business Analyst/Project Owner: The head of the project, responsible for understanding the client’s needs and ensuring the project is aligned with those needs.
Team Lead: A person who leads the development team and ensures that the team is working efficiently and following project requirements.
Sprint: A fixed duration in which the decided work (user stories) needs to be completed.
User Story: A requirement written in the form of a story, describing what a user needs from the software.
Project Backlog: A document that contains all project requirements and tasks, created by the Project Owner. It is a prioritized list of features or user stories that need to be developed.
Sprint Backlog: A document where the selected user stories for a specific sprint are stored. It is created by the Project Owner and describes the tasks for the development team during the sprint.



Agile Model
Generally, the sprint duration in the Agile model is 3 weeks. During the development of an application in the Agile model, the team attends different meetings for various purposes. These meetings are as follows:
Sprint Planning Meeting: This meeting is conducted by the Business Analyst, and all team members attend it. In this meeting, the sprint plan is decided, including which user stories will be worked on during the sprint.
Grooming Session: In the grooming session, the Business Analyst explains the selected user stories to the team and assigns them to team members. The team then provides an estimate for each user story, meaning they give a timeline for completing the work.
Estimation depends on the complexity of the user story and the team's understanding of it.
Daily Stand-up Meeting: This meeting is conducted by the Project Owner. As the name suggests, it happens daily, and in this meeting, each team member provides an update on their work. Team members discuss:
Which user story they worked on yesterday,
Whether it’s complete or still pending,
What they are going to work on today, and
Any blockers or issues they are facing that may prevent them from completing their tasks.
Sprint Review Meeting: The Sprint Review Meeting is conducted by the Project Owner. This meeting happens on the last day of the sprint but before the delivery of the application. During this meeting, the work completed in the sprint is reviewed, and a demo of the work is presented to the team and stakeholders.
Retrospective Meeting: The Retrospective Meeting is also conducted by the Project Owner on the last day of the sprint, but after the delivery of the application. During this meeting, the team discusses:
Which phases of the sprint went well,
Where mistakes were made,
What things need to be improved in the future.


<Advantages:
1.sprint duration in agile model is less.
2.new changes are accpetable.
3.Continuous Delivery


<Disadvantages:
1.during the sprint we can accept changes hence dificult to predict final product’s timeline and cost accurately.













