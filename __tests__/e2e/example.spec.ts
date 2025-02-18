import test, { expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.creowis.com/');
  await expect(page).toHaveTitle('CreoWis Technologies Private Limited');
});

test('should ensure that blog page link navigates correctly', async ({
  page,
}) => {
  await page.goto('https://www.creowis.com/');
  await page.getByRole('link', { name: 'Blog' }).click();
  await expect(page.getByRole('heading', { name: 'Blogs' })).toBeVisible();
});