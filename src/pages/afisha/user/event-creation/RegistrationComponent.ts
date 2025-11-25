import { BaseComponent } from '../../../../base/BaseComponent';

export class RegistratoinComponent extends BaseComponent {
  public readonly enableAllButton = this.root.getByRole('button', { name: 'Включить все' });
  public readonly enableToggle = this.root.getByRole('switch');
  public readonly phoneInput = this.root.getByLabel('Номер телефона');
  public readonly emailInput = this.root.getByLabel('Email');
}
