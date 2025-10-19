import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../BasePage';
import { Header } from '../fragments/Header';

export class AfishaMainPage extends BasePage {
  readonly header: Header;
  readonly eventTitle: Locator;
  readonly eventFavButton: Locator;
  readonly userProfileLink?: Locator;
  readonly carouselEvent: Locator;

  constructor(page: Page) {
    super(page);
    this.header = new Header(page);
    this.eventFavButton = page.locator('.event-list__item-link-favorite').first();
    this.eventTitle = page.locator('.event-list__item-title > span');
    this.carouselEvent = page.locator('.widget-popular-events .event-list__item-image').first();
  }

  async markEventFav(): Promise<void> {
    await this.eventFavButton.evaluate((el) => (el as HTMLElement).click());
  }

  async clickCarouselEvent(): Promise<void> {
    await this.carouselEvent.evaluate(element => (element as HTMLElement).click());
  }

  async isFavoritted(): Promise<boolean> {
    const classAttr = await this.eventFavButton.getAttribute('class');
    return classAttr?.includes('added') ?? false;
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
}
