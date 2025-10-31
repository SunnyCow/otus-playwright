import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async open(url = ''): Promise<void> {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  }
}
