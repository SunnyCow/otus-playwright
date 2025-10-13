import { test, expect } from '@playwright/test';
import { PageFactory } from '../../src/pages/PageFactory';

test.describe('Afisha favorites', () => {
  test('adds event to favorite when user clicks the favorite icon', async ({ page }) => {
    const afishaMainPage = PageFactory.afishaMainPage(page);

    await afishaMainPage.open();

    await afishaMainPage.clickEventFavButton();
    await afishaMainPage.expectFavoriteAdded();

    const beforeFavCount = await afishaMainPage.getFavCount();
    await afishaMainPage.expectFavCountIncrease(beforeFavCount);
  });

  test('removes event from favorite when user clicks the favorite icon again', async ({ page }) => {
    const afishaMainPage = PageFactory.afishaMainPage(page);

    await afishaMainPage.open();

    await afishaMainPage.clickEventFavButton();
    await afishaMainPage.expectFavoriteAdded();

    const beforeFavCount = await afishaMainPage.getFavCount();
    await afishaMainPage.expectFavCountIncrease(beforeFavCount);

    await afishaMainPage.clickEventFavButton();
    await afishaMainPage.expectFavoriteRemoved();
    await afishaMainPage.expectFavCountToBe(beforeFavCount);
  });
});
