const { test, expect } = require('@playwright/test')

test('my first test', async ({ page }) => {
    await page.goto('https://playwright.dev')
    await expect(page).toHaveTit
    le('Fast and reliable end-to-end testing for modern web apps | Playwright')
    console.log('Page title is correct!')
})