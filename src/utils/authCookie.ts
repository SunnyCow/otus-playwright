import fs from 'fs';
import path from 'path';
import { type Page, type BrowserContext, type Cookie } from '@playwright/test';

const ensureDir = (filePath: string): void => {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
};

export async function saveAuthCookie(
  page: Page,
  cookieName: string,
  filePath: string,
): Promise<void> {
  const cookies = await page.context().cookies();
  const cookie = cookies.find((c) => c.name === cookieName);

  if (!cookie) throw new Error(`Cookie "${cookieName}" not found after login.`);

  ensureDir(filePath);
  fs.writeFileSync(filePath, JSON.stringify(cookie, null, 2));
}

export function loadAuthCookieSync(filePath: string): Cookie | null {
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as Cookie;
}

export async function addAuthCookieIfValid(
  context: BrowserContext,
  filePath: string,
): Promise<boolean> {
  const cookie = loadAuthCookieSync(filePath);
  if (!cookie) return false;

  const now = Math.floor(Date.now() / 1000);
  if (cookie.expires && cookie.expires < now) {
    return false;
  }

  await context.addCookies([cookie]);
  return true;
}
