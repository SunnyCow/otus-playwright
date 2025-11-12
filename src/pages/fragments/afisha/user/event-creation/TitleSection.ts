import { Page, Locator } from '@playwright/test';

export class TitleSection {
  readonly titleInput: Locator;
  readonly citySelect: Locator;
  readonly categorySelect: Locator;

  constructor(readonly page: Page) {
    this.titleInput = page.getByLabel('Название');
    this.citySelect = page.getByLabel('Город');
    this.categorySelect = page.getByLabel('Категория');
  }

  async fillTitle(value: string): Promise<void> {
    await this.titleInput.fill(value);
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
