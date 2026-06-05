const { test, expect } = require('@playwright/test')

test('products page shows items after login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com')
    await page.fill('#user-name', 'standard_user')
    await page.fill('#password', 'secret_sauce')
    await page.click('#login-button')
    
    // Check page title
    await expect(page.locator('.title')).toContainText('Products')
    
    // Check at least one product is visible
    await expect(page.locator('.inventory_item').first()).toBeVisible()
    console.log('Products page test passed!')
})

test('user can add product to cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com')
    await page.fill('#user-name', 'standard_user')
    await page.fill('#password', 'secret_sauce')
    await page.click('#login-button')
    
    // Add first product to cart
    await page.locator('.btn_inventory').first().click()
    
    // Check cart badge shows 1 item
    await expect(page.locator('.shopping_cart_badge')).toContainText('1')
    console.log('Add to cart test passed!')
})

test('user can navigate to cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com')
    await page.fill('#user-name', 'standard_user')
    await page.fill('#password', 'secret_sauce')
    await page.click('#login-button')
    
    // Add item to cart
    await page.locator('.btn_inventory').first().click()
    
    // Click cart icon
    await page.click('.shopping_cart_link')
    
    // Check we are on cart page
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html')
    console.log('Cart navigation test passed!')
})