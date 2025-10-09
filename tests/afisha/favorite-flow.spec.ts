import { test, expect } from '@playwright/test';

test('should add event to favourite', async ({ page }) => {
  await page.goto('');

  const eventFavButton = page.locator('.event-list__item-link-favorite').first();
  const headerFavButton = page.locator('.favorite__list-link');

  await eventFavButton.waitFor({ state: 'visible' });
  await eventFavButton.evaluate(element => (element as HTMLElement).click());
  await expect(eventFavButton).toHaveClass(/\badded\b/);

  await headerFavButton.waitFor({ state: 'visible' });
  const beforeFavCount = Number(await headerFavButton.getAttribute('data-content') ?? 0);
  await expect(headerFavButton).toHaveAttribute('data-content', `${beforeFavCount + 1}`);

  await eventFavButton.evaluate(element => (element as HTMLElement).click());
  await expect(eventFavButton).not.toHaveClass(/added/);
  await expect(headerFavButton).toHaveAttribute('data-content', `${beforeFavCount}`)
});
