import { BasePage } from '../../base/BasePage';

export class SearchResultPage extends BasePage {
  public readonly currentEvents = this.page.locator('.event-list__items:not([data-analytics-show="PastEventShow"])');
}
