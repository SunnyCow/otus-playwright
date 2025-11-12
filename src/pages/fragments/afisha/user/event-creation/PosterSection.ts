import { type Page, type Locator } from '@playwright/test';

export class PosterSection {
  readonly uploadInput: Locator;
  readonly previewImage: Locator;
  readonly removeButton: Locator;
  readonly changeButton: Locator;

  constructor(readonly page: Page) {
    this.uploadInput = page.locator('input[type="file"][hidden]');
    this.previewImage = page.locator('img.preview');
    this.removeButton = page.getByRole('button', { name: 'Удалить' });
    this.changeButton = page.getByRole('button', { name: 'Изменить' });
  }

  async uploadPoster(filePath: string): Promise<void> {
    await this.uploadInput.setInputFiles(filePath);
  }

  async removePoster(): Promise<void> {
    await this.removeButton.click();
  }
}
