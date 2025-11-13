import { type Locator } from '@playwright/test';

export class PosterSection {
  readonly uploadInput: Locator;
  readonly previewImage: Locator;
  readonly removeButton: Locator;
  readonly changeButton: Locator;

  constructor(component: Locator) {
    this.uploadInput = component.locator('input[type="file"][hidden]');
    this.previewImage = component.locator('img.preview');
    this.removeButton = component.getByRole('button', { name: 'Удалить' });
    this.changeButton = component.getByRole('button', { name: 'Изменить' });
  }

  async uploadPoster(filePath: string): Promise<void> {
    await this.uploadInput.setInputFiles(filePath);
  }

  async removePoster(): Promise<void> {
    await this.removeButton.click();
  }
}
