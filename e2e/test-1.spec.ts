import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.xenonstack.com/");
  await page
    .getByRole("heading", { name: "Build Agentic Systems for" })
    .click();

  await page.getByRole("img", { name: "Xenonstack Hamburger" }).click();

  // await expect(page.getByRole("link", { name: "Foundry" })).toBeVisible();

  await page.getByRole("link", { name: "Get Started" }).click();

  await page
    .getByRole("heading", { name: "Interested in Solving your" })
    .click();
   // await page.locator('product-main-section-one').getByRole('link', { name: 'Explore Further button-arrow' }).click();
   // await page.getByRole('heading', { name: 'Bringing Agentic AI into' }).click();
});
