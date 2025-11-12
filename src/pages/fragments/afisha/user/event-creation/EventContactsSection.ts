import { type Locator } from '@playwright/test';

export class EventContactsSection {
  readonly addContactButton: Locator;
  readonly contactTypeSelect: Locator;
  readonly contactValueInput: Locator;
  readonly contactCommentInput: Locator;
  readonly deleteContactButton: Locator;
  readonly addAnotherContactButton: Locator;

  constructor(component: Locator) {
    this.addContactButton = component.getByRole('button', { name: 'Добавить' });
    this.contactTypeSelect = component.getByLabel(/Тип контакта/);
    this.contactValueInput = component.getByLabel(/Контакт/);
    this.contactCommentInput = component.getByLabel('Комментарий');
    this.deleteContactButton = component.getByRole('button', { name: 'Удалить' });
    this.addAnotherContactButton = component.getByRole('button', { name: 'Добавить ещё' });
  }
}
