import { test, expect } from '@playwright/test';
import { PageFactory } from '../../src/pages/PageFactory';

test('opens main vl.ru page on logo click', async ({ page }) => {
  const afishaMainPage = PageFactory.afishaMainPage(page);
  await afishaMainPage.open();

  await afishaMainPage.header.logo.click();

  expect(page).toHaveURL('https://www.vl.ru/');
});
