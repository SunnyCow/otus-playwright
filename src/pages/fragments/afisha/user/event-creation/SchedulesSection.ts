import { type Page, type Locator } from '@playwright/test';

export class SchedulesSection {
  readonly venueInput: Locator;
  readonly addressInput: Locator;
  readonly dateInput: Locator;
  readonly timeSelect: Locator;
  readonly addMoreSchedulesButton: Locator;

  constructor(component: Locator, private readonly page: Page) {
    this.venueInput = component.getByLabel('Место проведения');
    this.addressInput = component.getByLabel('Адрес');
    this.dateInput = component.getByLabel('Дата');
    this.timeSelect = component.getByLabel('Время');
    this.addMoreSchedulesButton = component.getByRole('button', { name: 'Добавить еще' });
  }

  async fillFirstSchedule(venue = 'Daisy'): Promise<void> {
    await this.venueInput.fill(venue);
    await this.page.getByRole('option', { name: venue }).click();
  }
}
