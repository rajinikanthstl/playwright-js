//login page class
class LoginPage{
    constructor(page){
        this.page = page;
        this.loginLink = "a#login2";
        this.username = "#loginusername";
        this.password = "#loginpassword";
        this.loginBtn = "//button[text()='Log in']";
    }

    async openWebsite(){
        await this.page.goto('https://www.demoblaze.com/');
    }

    async Login(username,password){
        await this.page.click(this.loginLink);
        await this.page.fill(this.username,username);
        await this.page.fill(this.password,password);
        await this.page.click(this.loginBtn);
    }
}

export {LoginPage}; //exporting the LoginPage