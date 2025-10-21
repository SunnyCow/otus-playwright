import { test, expect } from '@playwright/test';
import { PageFactory } from '../../src/pages/PageFactory';

test('opens main vl.ru page on logo click', async ({ page }) => {
  const afishaMainPage = PageFactory.afishaMainPage(page);
  const vlMainPage = PageFactory.vlMainPage();
  await afishaMainPage.open();

  await afishaMainPage.header.logo.click();

  await expect(page).toHaveURL(vlMainPage.url);
});
