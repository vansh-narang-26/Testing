import { test, expect } from "@playwright/test";

test.describe("Checking social media handles", () => {
  test("Youtube", async ({ page }) => {
    const page1Promise = page.waitForEvent("popup");
    await page.getByRole("link", { name: "Youtube" }).click();
    const page1 = await page1Promise;
    await expect(
      page1.getByRole("link", { name: "YouTube Home" }),
    ).toBeVisible();
  });

});
