export class AddnewuserPage{

    constructor(page){
        this.page=page,
        this.moreinfo=page.getByRole('link',{name:"More info "}).nth(0)
        this.newbutton=page.getByRole('link',{name:" New"}).nth(1)
        this.newusernametab=page.getByRole('textbox',{name:"username"})
        this.newuserpasswordtab=page.getByRole('textbox',{name:"password"})
        this.usertype=page.getByLabel('User Type ')
        this.savebutton=page.getByRole('button',{name:" Save"})
        this.closemsg=page.locator('.close')
    }
    async clickmoreinfor(){
        await this.moreinfo.click()
    }
    async clicknewuserbutton(){
        await this.newbutton.click()
    }
    async addnewuser(newusername,newuserpassword){
        await this.newusernametab.fill(newusername)
        await this.newuserpasswordtab.fill(newuserpassword)
        const selectnewusertypedropdown = this.usertype
        await selectnewusertypedropdown.selectOption({value:'admin'})
    }

    async clicksavebutton(){
        await this.savebutton.click()
    }
    async clickonclosemsg(){
        await this.closemsg.click()
    }

}