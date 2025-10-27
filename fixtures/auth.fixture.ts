import { test as base, type Page } from '@playwright/test';
import { ensureAuthenticated } from '../src/utils/authSetup';

type Fixtures = {
  userPage: Page;
  adminPage: Page;
};

export const test = base.extend<Fixtures>({
  userPage: async ({ browser }, use) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await ensureAuthenticated(context, page, { role: 'user' });
    await use(page);
    await context.close();
  },

  adminPage: async ({ browser }, use) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await ensureAuthenticated(context, page, { role: 'admin' });
    await use(page);
    await context.close();
  },
});
export { expect } from '@playwright/test';
