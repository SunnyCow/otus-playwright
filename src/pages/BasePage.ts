import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async open(url: string = ''): Promise<void> {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  }
}
