import { BaseComponent } from '../../../../../base/BaseComponent';

export class SchedulesComponent extends BaseComponent {
  public readonly venueInput = this.root.getByLabel('Место проведения');
  public readonly addressInput = this.root.getByLabel('Адрес');
  public readonly dateInput = this.root.getByLabel('Дата');
  public readonly timeSelect = this.root.getByLabel('Время');
  public readonly addMoreSchedulesButton = this.root.getByRole('button', { name: 'Добавить еще' });
}
