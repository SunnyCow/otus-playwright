import { BaseComponent } from '../../../../../base/BaseComponent';

export class PosterComponent extends BaseComponent {
  public readonly uploadInput = this.root.locator('input[type="file"][hidden]');
  public readonly previewImage = this.root.locator('img.preview');
  public readonly removeButton = this.root.getByRole('button', { name: 'Удалить' });
  public readonly changeButton = this.root.getByRole('button', { name: 'Изменить' });

  public async uploadPoster(filePath: string): Promise<void> {
    await this.uploadInput.setInputFiles(filePath);
  }

  public async removePoster(): Promise<void> {
    await this.removeButton.click();
  }
}
