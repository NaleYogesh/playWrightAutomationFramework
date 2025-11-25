export class LoginPage {

    constructor(page) {
        this.page=page;
        this.logInIcon = page.locator('#hrefUserIcon');
        this.userName = page.locator("//input[@name='username']");
        this.password = page.locator("//input[@name='password']");
        this.rememberMeCheckBox = page.locator("//input[@name='remember_me']");
        this.SignInButton = page.locator('#sign_in_btn');
        this.loggedUsername=page.locator("//span[@class='hi-user containMiniTitle ng-binding']");
        this.invalidUserNamePasswordMsg =page.getByText('Incorrect user name or password.');

    }

    async goto(url) {
      
        await this.page.goto(url);
    

    }
    async clickOnlogInIcon() {
        await this.logInIcon.click();
    }

    async enteruserName(userName) {
        await this.userName.fill(userName);
    }
       
    async enterPassword(password) {
        await this.password.fill(password);
    }    
    
    async clickRememberMe() {
        await this.rememberMeCheckBox.check();
    }
    async clickSignInButton() {
        await this.SignInButton.click();
    }     
    
    async   getLoggedInUserName(){
      await this.loggedUsername.waitFor({state:'visible'});
        return await this.loggedUsername;
        
    }

    async invalidUserDeatilErrorMsg(){
       return await this.invalidUserNamePasswordMsg;
    }
    
            
}