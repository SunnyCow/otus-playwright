import { type Page, type Locator } from '@playwright/test';

export class PriceSection {

  readonly freeCheckbox: Locator;
  readonly priceFromInput: Locator;
  readonly priceToInput: Locator;
  readonly priceCommentInput: Locator;

  constructor(page: Page) {
    this.freeCheckbox = page.getByLabel('Бесплатно');
    this.priceFromInput = page.getByLabel('от');
    this.priceToInput = page.getByLabel('до');
    this.priceCommentInput = page.getByLabel('Комментарий');
  }
}
