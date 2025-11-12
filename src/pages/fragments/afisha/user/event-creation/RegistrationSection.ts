import { type Locator } from '@playwright/test';

export class RegistratoinSection {
  public readonly freeCheckbox: Locator;
  readonly priceFromInput: Locator;
  readonly priceToInput: Locator;
  readonly priceCommentInput: Locator;

  constructor(component: Locator) {
    this.freeCheckbox = component.getByLabel('Бесплатно');
    this.priceFromInput = component.getByLabel('от');
    this.priceToInput = component.getByLabel('до');
    this.priceCommentInput = component.getByLabel('Комментарий');
  }
}
