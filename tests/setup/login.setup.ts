import { test as setup, expect } from '@playwright/test';
import { PageFactory } from '../../src/pages/PageFactory';
import { saveAuthCookie, addAuthCookieIfValid } from '../../src/utils/authCookie';

const authCookieFile = 'playwright/.auth/auth_cookie.json';
const authCookieName = 'eauth';

setup('setup authenticated state', async ({ context, page }) => {
  const valid = await addAuthCookieIfValid(context, authCookieFile);

  if (valid) {
    return;
  }

  const username = process.env.TEST_USER!;
  const password = process.env.TEST_PASS!;

  const afishaMainPage = PageFactory.afishaMainPage(page);
  await afishaMainPage.open();

  const loginPage = await afishaMainPage.header.navigateToLoginPage();
  await loginPage.login(username, password);

  await expect(afishaMainPage.header.userProfile).toBeVisible();

  await saveAuthCookie(page, authCookieName, authCookieFile);
});
