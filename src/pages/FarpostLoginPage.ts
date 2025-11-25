import { BasePage } from '../base/BasePage';

export class FarpostLoginPage extends BasePage {
  readonly phoneInput = this.page.getByRole('textbox', { name: 'Телефон / Логин' });
  readonly passwordInput = this.page.getByRole('textbox', { name: 'Пароль' });

  async login(username: string, password: string): Promise<void> {
    await this.phoneInput.fill(username);
    await this.passwordInput.fill(password);
    await this.passwordInput.press('Enter');
  }
}
