const { test, expect } = require('@playwright/test')

test('standard user can login successfully', async ({ page }) => {
    await page.goto('https://www.saucedemo.com')
    await page.fill('#user-name', 'standard_user')
    await page.fill('#password', 'secret_sauce')
    await page.click('#login-button')
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    console.log('Standard user login passed!')
})

test('locked out user cannot login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com')
    await page.fill('#user-name', 'locked_out_user')
    await page.fill('#password', 'secret_sauce')
    await page.click('#login-button')
    await expect(page.locator('[data-test="error"]')).toBeVisible()
    await expect(page.locator('[data-test="error"]')).toContainText('locked out')
    console.log('Locked out user test passed!')
})

test('wrong password shows error message', async ({ page }) => {
    await page.goto('https://www.saucedemo.com')
    await page.fill('#user-name', 'standard_user')
    await page.fill('#password', 'wrongpassword')
    await page.click('#login-button')
    await expect(page.locator('[data-test="error"]')).toBeVisible()
    console.log('Wrong password test passed!')
})