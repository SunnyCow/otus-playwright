import { BaseComponent } from '../../../../base/BaseComponent';

export class SchedulesComponent extends BaseComponent {
  public readonly venueInput = this.root.getByLabel('Место проведения');
  public readonly venueList = this.getPage().getByRole('listbox');
  public readonly venueListOptions = this.venueList.getByRole('option');
  public readonly addressInput = this.root.getByLabel('Адрес');
  public readonly dateInput = this.root.getByLabel('Дата');
  public readonly timeSelect = this.root.getByLabel('Время');
  public readonly addMoreSchedulesButton = this.root.getByRole('button', { name: 'Добавить еще' });

  public async selectVenue(venue = 'Daisy'): Promise<void> {
    await this.venueInput.click();
    await this.venueInput.fill(venue);
    await this.venueListOptions.filter({ hasText: 'Daisy' }).click();
  }
}
