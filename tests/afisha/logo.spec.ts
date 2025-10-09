import { test, expect } from '@playwright/test';

test('logo click opens main vl.ru page', async ({ page }) => {
  await page.goto('');

  await page.getByRole('link', { name: 'VL.ru', exact: true }).click();
  expect(page).toHaveURL('https://www.vl.ru/');
});
