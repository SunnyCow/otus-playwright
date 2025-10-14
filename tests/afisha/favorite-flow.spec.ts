import { test, expect } from '@playwright/test';
import { PageFactory } from '../../src/pages/PageFactory';

test.describe('Afisha favorites', () => {
  test('adds event to favorites', async ({ page }) => {
    const afishaMainPage = PageFactory.afishaMainPage(page);
    await afishaMainPage.open();

    const beforeCount = await afishaMainPage.header.getFavCount();

    await afishaMainPage.clickEventFavButton();

    await expect(async () => {
      const isAdded = await afishaMainPage.isFavoriteAdded();
      const afterCount = await afishaMainPage.header.getFavCount();

      expect(isAdded).toBe(true);
      expect(afterCount).toBe(beforeCount + 1);
    }).toPass();
  });

  test('removes event from favorite when user clicks the favorite icon again', async ({ page }) => {
    const afishaMainPage = PageFactory.afishaMainPage(page);

    await afishaMainPage.open();

    await afishaMainPage.clickEventFavButton();
    expect(await afishaMainPage.isFavoriteAdded()).toBe(true);

    const beforeCount = await afishaMainPage.header.getFavCount();

    await afishaMainPage.clickEventFavButton();

    await expect(async () => {
      const isAdded = await afishaMainPage.isFavoriteAdded();
      const afterCount = await afishaMainPage.header.getFavCount();

      expect(isAdded).toBe(false);
      expect(afterCount).toBe(beforeCount);
    }).toPass();
  });
});
