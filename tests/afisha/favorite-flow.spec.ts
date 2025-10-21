import { test, expect } from '@playwright/test';
import { PageFactory } from '../../src/pages/PageFactory';

test.describe('Afisha favorites', () => {
  let afishaMainPage: ReturnType<typeof PageFactory.afishaMainPage>;

  test.beforeEach(async ({ page }) => {
    afishaMainPage = PageFactory.afishaMainPage(page);
    await afishaMainPage.open();
  });

  test('adds event to favorites', async () => {
    const beforeCount = await afishaMainPage.header.getFavCount();

    await afishaMainPage.markEventFav();

    await expect(async () => {
      const isAdded = await afishaMainPage.isFavoritted();
      const afterCount = await afishaMainPage.header.getFavCount();

      expect(isAdded).toBe(true);
      expect(afterCount).toBe(beforeCount + 1);
    }).toPass();
  });

  test('removes event from favorite when user clicks the favorite icon again', async () => {
    await afishaMainPage.markEventFav();
    expect(await afishaMainPage.isFavoritted()).toBe(true);

    const beforeCount = await afishaMainPage.header.getFavCount();

    await afishaMainPage.markEventFav();

    await expect(async () => {
      const isAdded = await afishaMainPage.isFavoritted();
      const afterCount = await afishaMainPage.header.getFavCount();

      expect(isAdded).toBe(false);
      expect(afterCount).toBe(beforeCount);
    }).toPass();
  });
});
