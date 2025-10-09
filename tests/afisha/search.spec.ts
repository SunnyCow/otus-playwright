import { test, expect } from '@playwright/test';

test('can find event from seach field', async ({ page }) => {
  await page.goto('', { waitUntil: 'domcontentloaded' });

  const titleElement= page.locator('.event-list__item-title > span').first();
  await titleElement.waitFor({ state: 'visible' });

  const rawTitle = await titleElement.textContent();
  const eventTitle = rawTitle?.trim() ?? '';
  expect(eventTitle).toBeTruthy();

  const searchInput = await page.getByRole('textbox', { name: 'Поиск' });

  await searchInput.fill(eventTitle);
  await searchInput.press('Enter');

  await expect(titleElement).toBeVisible();
});
