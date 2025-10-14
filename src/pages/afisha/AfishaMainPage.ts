import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../BasePage';

export class AfishaMainPage extends BasePage {
  readonly eventTitle: Locator;
  readonly eventFavButton: Locator;
  readonly headerFavButton: Locator;
  readonly loginButton: Locator;
  readonly secondaryLoginButton: Locator;
  readonly userProfileLink?: Locator;

  constructor(page: Page, userId?: string) {
    super(page);
    this.eventFavButton = page.locator('.event-list__item-link-favorite').first();
    this.headerFavButton = page.locator('.favorite__list-link');
    this.eventTitle = page.locator('.event-list__item-title > span');
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
    return Number(await this.headerFavButton.getAttribute('data-content'));
  }

  async expectFavoriteAdded(): Promise<void> {
    await expect(this.eventFavButton).toHaveClass(/\badded\b/);
  }

  async expectFavoriteRemoved(): Promise<void> {
    await expect(this.eventFavButton).not.toHaveClass(/added/);
  }

  async expectFavCountToIncrease(count: number): Promise<void> {
    await expect(this.headerFavButton).toHaveAttribute('data-content', `${count + 1}`);
  }

  async expectFavCountToEqual(count: number): Promise<void> {
    await expect(this.headerFavButton).toHaveAttribute('data-content', `${count}`);
  }

  async getEventTitle(position: number = 0): Promise<string> {
    const title = await this.eventTitle.nth(position).textContent();

    if (!title) {
      throw new Error(`Event title not found at position ${position}`);
    }

    return title.trim();
  }

  async getCleanEventTitle(dirtyTitle: string): Promise<string> {
    return dirtyTitle
    .replace(/\..*$/, '')
    .replace(/[^a-zA-Z0-9А-Яа-яЁё\s]/g, '');
  }

  async searchFor(query: string): Promise<void> {
    const searchInput = this.page.getByRole('textbox', { name: 'Поиск' });
    await searchInput.fill(query);
    await searchInput.press('Enter');
    await this.page.waitForSelector('.event-list__items', { state: 'visible' });
  }
}
