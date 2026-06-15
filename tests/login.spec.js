import{test,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginpage'

const data = require('../utils/testdata.json') 

test('Login to grocery app',async({page})=>{
    const login=new LoginPage(page)
    await login.gotourl()
    await expect(page.locator('.login-page')).toBeVisible()
    await expect(page.locator('.card-body.login-card-body')).toBeVisible()
    await login.enterlogindetails(data.username,data.password)
    await login.clicksigninbutton()
})
