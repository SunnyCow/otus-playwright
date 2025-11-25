import { BaseComponent } from '../../../../base/BaseComponent';

export class DescriptionComponent extends BaseComponent {
  public readonly editor = this.root.frameLocator('.tox-edit-area__iframe').locator('#tinymce');

  public async fillDescription(text = 'Lorem ipsum'): Promise<void> {
    await this.editor.click();
    await this.editor.fill(text);
  }
}
