import { Locator, Page } from '@playwright/test';

export class BaseHeader {
  readonly logo: Locator;
  readonly projectCity: Locator;
  readonly dropdown: Locator;
  readonly dropdownCity: Locator;
  readonly searchInput: Locator;

  constructor(readonly page: Page) {
    this.logo = page.getByRole('link', { name: 'VL.ru', exact: true });
    this.projectCity = page.locator('.header__project-city').nth(1);
    this.dropdown = page.locator('.dropdown-menu').nth(1);
    this.dropdownCity = this.dropdown.locator(':scope > a').first();
    this.searchInput = page.getByRole('textbox', { name: 'Поиск' });
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
