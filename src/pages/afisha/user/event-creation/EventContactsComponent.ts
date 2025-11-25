import { BaseComponent } from '../../../../base/BaseComponent';

export class EventContactsComponent extends BaseComponent {
  public readonly addContactButton = this.root.getByRole('button', { name: 'Добавить' });
  public readonly contactTypeSelect = this.root.getByLabel(/Тип контакта/);
  public readonly contactValueInput = this.root.getByLabel(/Контакт/);
  public readonly contactCommentInput = this.root.getByLabel('Комментарий');
  public readonly deleteContactButton = this.root.getByRole('button', { name: 'Удалить' });
  public readonly addAnotherContactButton = this.root.getByRole('button', { name: 'Добавить ещё' });
}
