import { BaseComponent } from '../../../../base/BaseComponent';

export class DescriptionComponent extends BaseComponent {
  public readonly editor = this.root.frameLocator('.tox-edit-area__iframe').locator('#tinymce');
}
