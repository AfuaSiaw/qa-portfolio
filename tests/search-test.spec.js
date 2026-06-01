const { test, expect } = require('@playwright/test')

test('check playwright docs page', async ({ page }) => {
    await page.goto('https://playwright.dev/docs/intro')
    await expect(page).toHaveTitle(/Installation/)
    console.log('Docs page test passed!')
})