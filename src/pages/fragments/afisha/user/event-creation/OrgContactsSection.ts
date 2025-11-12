import { type Page, type Locator} from '@playwright/test';

export class OrgContactsSection {
  readonly emailInput: Locator;
  readonly contactsInput: Locator;

  constructor(readonly page: Page) {
    this.emailInput = page.getByLabel('Email');
    this.contactsInput = page.getByLabel('Дополнительные контакты');
  }
}
