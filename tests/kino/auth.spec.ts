import { test, expect } from '@playwright/test';
import { PageFactory } from '../../src/pages/PageFactory';

test('logs in with valid credentials', async ({ page }) => {
  const username = process.env['TEST_USER'];
  const password = process.env['TEST_PASS'];

  if (!username || !password) {
    throw new Error('Environment variables for username or password are not found!');
  }

  const kinoMainPage = PageFactory.kinoMainPage(page);

  await kinoMainPage.open();

  const farpostLoginPage = await kinoMainPage.header.navigateToLoginPage();
  await farpostLoginPage.login(username, password);

  await expect(kinoMainPage.header.userProfile).toBeVisible();
});
