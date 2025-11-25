import { BaseComponent } from '../../../../base/BaseComponent';

export class BasicInfoComponent extends BaseComponent {
  public readonly titleInput = this.root.getByLabel(/Название/);
  public readonly citySelect = this.root.getByLabel(/Город/);
  public readonly categorySelect = this.root.getByLabel(/Категория/);

  public async fillTitle(value = `Test - ${Date.now()}`): Promise<void> {
    await this.titleInput.fill(value);
  }

  public async selectCity(city = 'Владивосток'): Promise<void> {
    await this.citySelect.click();
    await this.getPage().getByRole('option', { name: city }).click();
  }

  public async selectCategory(category = 'Вечеринки'): Promise<void> {
    await this.categorySelect.click();
    await this.getPage().getByRole('option', { name: category }).click();
  }

  public async fillAll(): Promise<void> {
    await this.fillTitle();
    await this.selectCity();
    await this.selectCategory();
  }
}
