import { type Page, type Locator } from '@playwright/test';

export class SchedulesSection {
  readonly venueInput: Locator;
  readonly addressInput: Locator;
  readonly dateInput: Locator;
  readonly timeSelect: Locator;
  readonly addMoreSchedulesButton: Locator;

  constructor(page: Page) {
    this.venueInput = page.getByLabel('Место проведения');
    this.addressInput = page.getByLabel('Адрес');
    this.dateInput = page.getByLabel('Дата');
    this.timeSelect = page.getByLabel('Время');
    this.addMoreSchedulesButton = page.getByRole('button', { name: 'Добавить еще' });
  }
}
