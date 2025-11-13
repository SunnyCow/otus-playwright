import { type Locator } from '@playwright/test';

export class DescriptionSection {
  readonly editor: Locator;

  constructor(component: Locator) {
    this.editor = component.frameLocator('iframe[title="Поле форматированного текста"]').locator('#tinymce');
  }

  async fillDescription(text = 'Lorem ipsum dolor sit amet'): Promise<void> {
    await this.editor.waitFor({ state: 'visible', timeout: 15_000 });
    await this.editor.click();
    await this.editor.fill(text);
  }
}
