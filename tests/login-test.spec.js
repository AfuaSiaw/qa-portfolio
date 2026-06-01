const { test, expect } = require('@playwright/test')

test('successful login', async ({ page }) => {
    // Step 1 - Go to the login page
    await page.goto('https://the-internet.herokuapp.com/login')
    
    // Step 2 - Fill in the username
    await page.fill('#username', 'tomsmith')
    
    // Step 3 - Fill in the password
    await page.fill('#password', 'SuperSecretPassword!')
    
    // Step 4 - Click the login button
    await page.click('button[type="submit"]')
    
    // Step 5 - Check that login was successful
    await expect(page.locator('.flash.success')).toBeVisible()
    console.log('Login test passed!')
})
test('failed login with wrong password', async ({ page }) => {
    // Step 1 - Go to the login page
    await page.goto('https://the-internet.herokuapp.com/login')
    
    // Step 2 - Fill in correct username but wrong password
    await page.fill('#username', 'tomsmith')
    await page.fill('#password', 'wrongpassword')
    
    // Step 3 - Click the login button
    await page.click('button[type="submit"]')
    
    // Step 4 - Check that error message appeared
    await expect(page.locator('.flash.error')).toBeVisible()
    console.log('Failed login test passed!')
})
test('check success message text after login', async ({ page }) => {
    // Step 1 - Go to login page
    await page.goto('https://the-internet.herokuapp.com/login')
    
    // Step 2 - Login with correct credentials
    await page.fill('#username', 'tomsmith')
    await page.fill('#password', 'SuperSecretPassword!')
    await page.click('button[type="submit"]')
    
    // Step 3 - Check the exact success message text
    await expect(page.locator('.flash.success')).toContainText('You logged into a secure area!')
    console.log('Success message text is correct!')
})