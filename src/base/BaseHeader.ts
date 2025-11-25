// Пока оставлю этот класс, ещё подумаю над архитектурой

import { type Locator, type Page } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

export class BaseHeader extends BaseComponent {
  public readonly logo = this.root.getByRole('link', { name: 'VL.ru', exact: true });
  public readonly projectCity = this.root.locator('.header__project-city').nth(1);
  public readonly dropdown = this.root.locator('.dropdown-menu').nth(1);
  public readonly dropdownCity = this.dropdown.locator(':scope > a').first();
  public readonly searchInput = this.root.getByRole('textbox', { name: 'Поиск' });

  constructor(root: Locator, page: Page) {
    super(root, page);
  }

  async openCityDropdown(): Promise<void> {
    await this.projectCity.hover();
    await this.dropdown.waitFor({ state: 'visible' });
  }

  async searchFor(query: string): Promise<void> {
    await this.searchInput.fill(query);
    await this.searchInput.press('Enter');
  }
}
