import { test, expect } from '@playwright/test';
import { PageFactory } from '../../src/pages/PageFactory';

test('logs in with valid credentials', async ({ page }) => {
  const username = process.env.TEST_USER!;
  const password = process.env.TEST_PASS!;
  const userId = process.env.TEST_USER_ID!;
  const afishaMainPage = PageFactory.afishaMainPage(page);

  await afishaMainPage.open();

  const farpostLoginPage = await afishaMainPage.header.navigateToLoginPage();
  await farpostLoginPage.login(username, password);

  await expect(afishaMainPage.header.userProfile).toHaveText(userId);
});
