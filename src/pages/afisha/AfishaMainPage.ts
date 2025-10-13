import { Page, Locator } from '@playwright/test';
import { BasePage } from '../BasePage';

export class AfishaMainPage extends BasePage {
  readonly eventFavButton: Locator;
  readonly headerFavButton: Locator;
  readonly loginButton: Locator;
  readonly secondaryLoginButton: Locator;
  readonly userProfileLink?: Locator;

  constructor(page: Page, userId?: string) {
    super(page);
    this.eventFavButton = page.locator('.event-list__item-link-favorite').first();
    this.headerFavButton = page.locator('.favorite__list-link');

    // на странице два элемента, которые подходят под locator('#body').getByRole('link', { name: 'Войти' }), поэтому выбираем по классам
    this.loginButton = page.locator('.nav_personal__btn .nav_personal__text');
    this.secondaryLoginButton = page.locator('.nav_personal__auth-button');

    if (userId) {
      this.userProfileLink = page.getByRole('link', { name: userId });
    }
  }

  async clickEventFavButton(): Promise<void> {
    await this.eventFavButton.evaluate((el) => (el as HTMLElement).click());
  }

  async getFavCount(): Promise<number> {
    return Number(await this.eventFavButton.getAttribute('data-content'));
  }
}
