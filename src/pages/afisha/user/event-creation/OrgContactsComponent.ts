import { BaseComponent } from '../../../../base/BaseComponent';

export class OrgContactsComponent extends BaseComponent {
  public readonly emailInput = this.root.getByLabel('Email');
  public readonly contactsInput = this.root.getByLabel('Дополнительные контакты');
}
