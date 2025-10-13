import { test, expect } from '@playwright/test';
import { PageFactory } from '../../src/pages/PageFactory';

test('adds event to favorite', async ({ page }) => {
  const afishaMainPage = PageFactory.afishaMainPage(page);

  await afishaMainPage.open();

  await afishaMainPage.clickEventFavButton();
  await expect(afishaMainPage.eventFavButton).toHaveClass(/\badded\b/);

  await afishaMainPage.headerFavButton.waitFor({ state: 'visible' });
  const beforeFavCount = await afishaMainPage.getFavCount();
  await expect(afishaMainPage.headerFavButton).toHaveAttribute('data-content', `${beforeFavCount + 1}`);

  await afishaMainPage.clickEventFavButton();
  await expect(afishaMainPage.eventFavButton).not.toHaveClass(/added/);
  await expect(afishaMainPage.headerFavButton).toHaveAttribute('data-content', `${beforeFavCount}`)
});
