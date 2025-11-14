import { type Locator } from '@playwright/test';

export class OrgContactsSection {
  private readonly emailInput: Locator;
  private readonly contactsInput: Locator;

  constructor(component: Locator) {
    this.emailInput = component.getByLabel('Email');
    this.contactsInput = component.getByLabel('Дополнительные контакты');
  }

  async fillOrgEmail(email = 'sannikov_yao@farpost.com'): Promise<void> {
    await this.emailInput.click();
    await this.emailInput.fill(email);
  }

  async fillOrgContacts(email = 'sannikov_yao@farpost.com'): Promise<void> {
    await this.contactsInput.click();
    await this.contactsInput.fill(email);
  }
}
