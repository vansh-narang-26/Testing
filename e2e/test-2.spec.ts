import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 900,
    width: 1600
  }
});

test('test', async ({ page }) => {
  await page.goto('https://www.xenonstack.com/');
  await page.getByRole('link', { name: 'Foundry' }).click();
  await page.getByRole('heading', { name: 'Data and AI Foundry: Shaping' }).click();
  await page.getByRole('link', { name: 'Neural AI' }).click();
  await page.getByRole('heading', { name: 'Accelerate, Optimize and' }).click();
  await page.locator('#headerblock').getByText('ElixirData').click();
  await page.locator('#headerblock').getByText('MetaSecure').click();
  await page.locator('#headerblock').getByText('Akira AI').click();
  await page.getByText('XAI', { exact: true }).click();
});