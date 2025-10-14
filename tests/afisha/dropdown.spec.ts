import { test, expect } from '@playwright/test';
import { PageFactory } from '../../src/pages/PageFactory';

test('opens context menu with cities on hover', async ({ page }) => {
  const afishaMainPage = PageFactory.afishaMainPage(page);
  await afishaMainPage.open();

  await afishaMainPage.header.openCityDropdown();
  await expect(afishaMainPage.header.dropdown).toBeVisible();
  await expect(afishaMainPage.header.dropdownCity).toBeVisible();
})
