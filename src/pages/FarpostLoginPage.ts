import { type Page, type Locator } from '@playwright/test';

export class FarpostLoginPage {
  readonly phoneInput: Locator;
  readonly passwordInput: Locator;

  constructor(page: Page) {
    this.phoneInput = page.getByRole('textbox', { name: 'Телефон / Логин' });
    this.passwordInput = page.getByRole('textbox', { name: 'Пароль' });
  }

  async login(username: string, password: string): Promise<void> {
    await this.phoneInput.fill(username);
    await this.passwordInput.fill(password);
    await this.passwordInput.press('Enter');
  }
}
