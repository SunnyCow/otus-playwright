import { Locator, Page } from '@playwright/test';
import { PageFactory } from '../../../PageFactory';
import { type FarpostLoginPage } from '../../../FarpostLoginPage';
import { BaseHeader } from '../../BaseHeader';

export class Header extends BaseHeader {
  readonly searchButton: Locator;
  readonly loginButton: Locator;
  readonly userProfile: Locator;

  constructor(page: Page) {
    super(page);
    this.searchButton = page.locator('.header__search-form-toggle');
    this.loginButton = page.getByRole('link', { name: 'Войти' })
    this.userProfile = page.locator('.nav_personal__label');
  }

  async navigateToLoginPage(): Promise<FarpostLoginPage> {
    await this.loginButton.click();

    return PageFactory.farpostLoginPage(this.page);
  }
}
