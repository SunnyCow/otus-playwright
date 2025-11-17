import { test, expect } from '@playwright/test';
import { PageFactory } from '../../src/pages/PageFactory';
import { getCredentials } from '../../config/auth.config';

test('logs in with valid credentials', async ({ page }) => {
  const { username, password } = getCredentials('regular');

  const kinoMainPage = PageFactory.kinoMainPage(page);

  await kinoMainPage.open();

  const farpostLoginPage = await kinoMainPage.header.navigateToLoginPage();
  await farpostLoginPage.login(username, password);

  await expect(kinoMainPage.header.userProfile).toBeVisible();
});
