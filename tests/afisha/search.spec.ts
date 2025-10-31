import { test, expect } from '@playwright/test';
import { PageFactory } from '../../src/pages/PageFactory';

test('finds event from the search field', async ({ page }) => {
  const afishaMainPage = PageFactory.afishaMainPage(page);
  const searchResultPage = PageFactory.searchResultPage(page);

  await afishaMainPage.open();

  const dirtyTitle = await afishaMainPage.getEventTitle();
  const cleanTitle = afishaMainPage.cleanEventTitle(dirtyTitle);

  await afishaMainPage.header.searchFor(cleanTitle);
  await expect(searchResultPage.currentEvents).toContainText(dirtyTitle);
});
