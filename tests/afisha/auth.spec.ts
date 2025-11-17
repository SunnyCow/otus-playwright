import { test, expect } from '@playwright/test';
import { PageFactory } from '../../src/pages/PageFactory';
import { getCredentials } from '../../config/auth.config';

test('logs in with valid credentials', async ({ page }) => {
  const { username, password } = getCredentials('regular');

  const afishaMainPage = PageFactory.afishaMainPage(page);

  await afishaMainPage.open();

  const farpostLoginPage = await afishaMainPage.header.navigateToLoginPage();
  await farpostLoginPage.login(username, password);

  await expect(afishaMainPage.header.userProfile).not.toHaveText('Войти');
});
