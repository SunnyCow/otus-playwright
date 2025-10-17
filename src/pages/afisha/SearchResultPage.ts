import { Page, Locator } from '@playwright/test';

export class SearchResultPage {
  readonly currentEvents: Locator;

  constructor(page: Page) {
    this.currentEvents = page.locator('.event-list__items:not([data-analytics-show="PastEventShow"])');
  }
}
