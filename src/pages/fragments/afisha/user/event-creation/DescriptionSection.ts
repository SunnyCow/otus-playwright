import { Page, Locator } from '@playwright/test';

export class DescriptionSection {
  readonly editor: Locator;

  constructor(page: Page) {
    this.editor = page.frameLocator('.tox-edit-area__iframe').locator('#tinymce');
  }
}
