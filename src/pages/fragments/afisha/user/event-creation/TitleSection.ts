import { type Page, type Locator } from '@playwright/test';

export class TitleSection {
  readonly titleInput: Locator;
  readonly citySelect: Locator;
  readonly categorySelect: Locator;

  constructor(component: Locator, private readonly page: Page) {
    this.titleInput = component.getByLabel('Название');
    this.citySelect = component.getByLabel('Город');
    this.categorySelect = component.getByLabel('Категория');
  }

  async fillTitle(title = `Test Event - ${Date.now()}`): Promise<void> {
    await this.titleInput.fill(title);
  }

  async selectCity(city: string): Promise<void> {
    await this.citySelect.click();
    await this.page.getByRole('option', { name: city }).click();
  }

  async selectCategory(category = 'Вечеринки'): Promise<void> {
    await this.categorySelect.click();
    await this.page.getByRole('option', { name: category }).click();
  }
}
