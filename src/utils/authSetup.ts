import { expect, type Page, type BrowserContext } from '@playwright/test';
import { PageFactory } from '../pages/PageFactory';
import { addAuthCookieIfValid, saveAuthCookie } from './authCookie';
import { getCredentials } from '../../config/auth.config';

interface AuthOptions {
  role: 'user' | 'admin';
}

export async function ensureAuthenticated(context: BrowserContext, page: Page, { role }: AuthOptions): Promise<void> {
  const cookieName = 'eauth';
  const cookieFile = `playwright/.auth/${role}_cookie.json`;

  const valid = await addAuthCookieIfValid(context, cookieFile);
  if (valid) {
    return;
  }

  const { username, password } =
    role === 'admin' ? getCredentials('admin') : getCredentials('regular');

  const afishaMainPage = PageFactory.afishaMainPage(page);
  await afishaMainPage.open();

  const loginPage = await afishaMainPage.header.navigateToLoginPage();
  await loginPage.login(username, password);

  await expect(afishaMainPage.header.userProfile).toBeVisible();

  await saveAuthCookie(page, cookieName, cookieFile);
}
