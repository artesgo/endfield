import { expect, test } from '@playwright/test';

test.describe('Navigation and User Flow', () => {
  test('should complete a full user journey through the app', async ({ page }) => {
    // Start at home page
    await page.goto('/');

    // Should redirect to products
    await page.waitForURL('**/ui/essence');

    // Verify we're on products page
    const heading = page.locator('h1:has-text("Essence Farm Solver")');
    await expect(heading).toBeVisible();
  });
});
