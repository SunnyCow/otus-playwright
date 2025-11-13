import { type Locator} from '@playwright/test';

export class OrgContactsSection {
  readonly emailInput: Locator;
  readonly contactsInput: Locator;

  constructor(component: Locator) {
    this.emailInput = component.getByLabel('Email');
    this.contactsInput = component.getByLabel('Дополнительные контакты');
  }

  async fillOrgContacts(email = 'sannikov_yao@farpost.com'): Promise<void> {
    await this.emailInput.fill(email);
  }
}
