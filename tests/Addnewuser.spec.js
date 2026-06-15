import{test,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginpage'
import { AddnewuserPage } from '../pages/adduserpage'
const data = require('../utils/testdata.json')

test('Add new user',async({page})=>{
    const login=new LoginPage(page)
    await login.gotourl()
    await login.enterlogindetails(data.username,data.password)
    await login.clicksigninbutton()
    const newuser=new AddnewuserPage(page)
    await newuser.clickmoreinfor()
    await expect(page.locator(".btn.btn-rounded.btn-danger")).toBeVisible()
    await newuser.clicknewuserbutton()
    await newuser.addnewuser(data.newusername,data.newpassword)
    await newuser.clicksavebutton()
    await expect(page.getByText('User Created Successfully')).toBeVisible()
    await newuser.clickonclosemsg()
    const name=data.newusername
    await expect(page.getByRole('cell',{name})).toBeVisible()
})

//1.Install allure : npm install -D allure-playwright allure-commandline  
//2.update playwright.config.js : reporter ['list'],['allure-playwright']],
//3.run test : npx playwright test tests/allurereports.spec.js
//4.generate report:npx allure generate allure-results --clean -o allure-report.  (here allure-results(.json and video) and alllure report folder will be created)
//5.open report : npx allure open allure-report