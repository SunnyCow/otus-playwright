import { BasePage } from '../../base/BasePage';
import { AfishaHeaderComponent } from './components/AfishaHeaderComponent';

export class AfishaMainPage extends BasePage {
  public readonly header = new AfishaHeaderComponent(this.page.locator('.header'), this.page);
  public readonly eventTitle = this.page.locator('.event-list__item-title > span');
  public readonly eventFavButton = this.page.locator('.event-list__item-link-favorite').first();
  public readonly carouselEvent = this.page.locator('.event-list__item-image').first();

  public async markEventFav(): Promise<void> {
    await this.eventFavButton.evaluate((el) => (el as HTMLElement).click());
  }

  public async openCarouselEvent(): Promise<void> {
    await this.carouselEvent.evaluate((element) => (element as HTMLElement).click());
  }

  public async isFavoritted(): Promise<boolean> {
    const classAttr = await this.eventFavButton.getAttribute('class');
    return classAttr?.includes('added') ?? false;
  }

  public async getEventTitle(position = 0): Promise<string> {
    const title = await this.eventTitle.nth(position).textContent();

    if (!title) {
      throw new Error(`Event title not found at position ${position}`);
    }

    return title.trim();
  }

  public cleanEventTitle(dirtyTitle: string): string {
    return dirtyTitle.replace(/\..*$/, '').replace(/[^a-zA-Z0-9А-Яа-яЁё\s]/g, '');
  }
}
