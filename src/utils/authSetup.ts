import { expect, type Page, type BrowserContext } from '@playwright/test';
import { PageFactory } from '../pages/PageFactory';
import { addAuthCookieIfValid, saveAuthCookie } from './authCookie';

interface AuthOptions {
  role: 'user' | 'admin';
}

export async function ensureAuthenticated(
  context: BrowserContext,
  page: Page,
  { role }: AuthOptions
): Promise<void> {
  const cookieName = 'eauth';
  const cookieFile = `playwright/.auth/${role}_cookie.json`;

  const valid = await addAuthCookieIfValid(context, cookieFile);
  if (valid) {
    console.log('Using stored auth cookie')
    return;
  }

  console.log('Stored cookie is not found. Loggin in...')

  const username =
    role === 'admin' ? process.env.ADMIN_USER : process.env.TEST_USER;
  const password =
    role === 'admin' ? process.env.ADMIN_PASS : process.env.TEST_PASS;

  if (!username || !password) {
    throw new Error(`Missing environment variables for ${role} credentials`);
  }

  const afishaMainPage = PageFactory.afishaMainPage(page);
  await afishaMainPage.open();

  const loginPage = await afishaMainPage.header.navigateToLoginPage();
  await loginPage.login(username, password);

  await expect(afishaMainPage.header.userProfile).toBeVisible();

  await saveAuthCookie(page, cookieName, cookieFile);
}
