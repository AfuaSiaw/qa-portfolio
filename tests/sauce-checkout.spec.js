const { test, expect } = require('@playwright/test')

test('user can complete full checkout flow', async ({ page }) => {
    // Step 1 - Login
    await page.goto('https://www.saucedemo.com')
    await page.fill('#user-name', 'standard_user')
    await page.fill('#password', 'secret_sauce')
    await page.click('#login-button')

    // Step 2 - Add product to cart
    await page.locator('.btn_inventory').first().click()

    // Step 3 - Go to cart
    await page.click('.shopping_cart_link')
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html')

    // Step 4 - Click checkout
    await page.click('#checkout')
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html')

    // Step 5 - Fill in details
    await page.fill('#first-name', 'Georgina')
    await page.fill('#last-name', 'Siaw')
    await page.fill('#postal-code', '00233')

    // Step 6 - Continue
    await page.click('#continue')
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html')

    // Step 7 - Finish
    await page.click('#finish')
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html')

    // Step 8 - Confirm order complete
    await expect(page.locator('.complete-header')).toContainText('Thank you for your order!')
    console.log('Full checkout flow passed!')
})

test('checkout fails without filling in details', async ({ page }) => {
    // Login
    await page.goto('https://www.saucedemo.com')
    await page.fill('#user-name', 'standard_user')
    await page.fill('#password', 'secret_sauce')
    await page.click('#login-button')

    // Add product and go to cart
    await page.locator('.btn_inventory').first().click()
    await page.click('.shopping_cart_link')

    // Click checkout without filling details
    await page.click('#checkout')
    await page.click('#continue')

    // Check error message appears
    await expect(page.locator('[data-test="error"]')).toBeVisible()
    console.log('Checkout validation test passed!')
})
