import { test, expect } from '@playwright/test';

test('should open event page from main page carousel event image', async ({ page }) => {
  await page.goto('');

  const firstEvent = page.locator('.widget-popular-events .event-list__item-image').first();

  await firstEvent.evaluate(element => (element as HTMLElement).click());

  await expect(page).toHaveURL(/.+?event\/\d+/);
});
