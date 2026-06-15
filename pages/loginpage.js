export class LoginPage{

    constructor(page){
        this.page=page,
        this.username=page.getByPlaceholder('Username')
        this.password=page.getByPlaceholder('Password')
        this.signinbutton=page.getByRole('button',{name:"Sign In"})
    }

    async gotourl(){
        await this.page.goto("https://groceryapp.uniqassosiates.com/admin/login")
    }
    async enterlogindetails(username,password){
        await this.username.fill(username)
        await this.password.fill(password)
    }
    async clicksigninbutton(){
        await this.signinbutton.click()
    }
}