const { test, expect } = require('@playwright/test')

test('my first test', async ({ page }) => {
    await page.goto('https://playwright.dev')
    await expect(page).toHaveTitle(/Playwright/)
    console.log('Page title is correct!')
})