const { test, expect } = require('@playwright/test')
const { LoginPage } = require('../pages/LoginPage')

test('successful login with POM', async ({ page }) => {
    const loginPage = new LoginPage(page)
    
    await loginPage.goto()
    await loginPage.login('tomsmith', 'SuperSecretPassword!')
    
    await expect(loginPage.successMessage).toBeVisible()
    await expect(loginPage.successMessage).toContainText('You logged into a secure area!')
    console.log('POM login test passed!')
})

test('failed login with POM', async ({ page }) => {
    const loginPage = new LoginPage(page)
    
    await loginPage.goto()
    await loginPage.login('tomsmith', 'wrongpassword')
    
    await expect(loginPage.errorMessage).toBeVisible()
    console.log('POM failed login test passed!')
})