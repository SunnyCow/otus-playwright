import { test, expect } from '@playwright/test';

test('can find event from search field', async ({ page }) => {
  await page.goto('', { waitUntil: 'domcontentloaded' });

  const titleElement= page.locator('.event-list__item-title > span').first();
  await titleElement.waitFor({ state: 'visible' });

  const rawTitle = await titleElement.textContent();

  const eventTitle = rawTitle?.trim() ?? '';
  expect(eventTitle).toBeTruthy();

  // чистим название события, потому что поиск плохо переваривает длинные названия и небуквенные символы
  const query = eventTitle
  .replace(/\..*$/, '')
  .replace(/[^a-zA-Z0-9А-Яа-яЁё\s]/g, '');

  const searchInput = page.getByRole('textbox', { name: 'Поиск' });

  await searchInput.fill(query);
  await searchInput.press('Enter');
  await page.waitForSelector('.event-list__items', { state: 'visible' });

  // селектором исключаем архивные события, которые могут быть на странице
  const currentEvents = page.locator('.event-list__items:not([data-analytics-show="PastEventShow"])');
  await expect(currentEvents).toContainText(eventTitle);
});
