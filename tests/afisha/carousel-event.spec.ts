import { test, expect } from '@playwright/test';
import { PageFactory } from '../../src/pages/PageFactory';

test('opens event page from main page carousel event image', async ({ page }) => {
  const afishaMainPage = PageFactory.afishaMainPage(page);
  await afishaMainPage.open();

  await afishaMainPage.openCarouselEvent();
  await expect(page).toHaveURL(/event\/\d+/);
});
