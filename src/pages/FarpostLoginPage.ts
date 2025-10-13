import { Page, Locator } from '@playwright/test';

export class FarpostLoginPage {
  readonly phoneInput: Locator;
  readonly passwordInput: Locator;

  constructor(page: Page) {
    this.phoneInput = page.getByRole('textbox', { name: 'Телефон / Логин' });
    this.passwordInput = page.getByRole('textbox', { name: 'Пароль' });
  }
}
