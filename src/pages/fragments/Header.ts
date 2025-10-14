import { Locator, Page } from '@playwright/test';

export class Header {
  readonly projectCity: Locator;
  readonly dropdown: Locator;
  readonly dropdownCity: Locator;
  readonly searchInput: Locator;
  readonly favButton: Locator;
  readonly loginButton: Locator;
  readonly secondaryLoginButton: Locator;
  readonly userProfile: Locator;

  constructor(page: Page) {
    this.projectCity = page.locator('.header__project-city').nth(1);
    this.dropdown = page.locator('.dropdown-menu').nth(1);
    this.dropdownCity = this.dropdown.locator(':scope > a').first();
    this.searchInput = page.getByRole('textbox', { name: 'Поиск' });
    this.favButton = page.locator('.favorite__list-link');
    this.loginButton = page.locator('.nav_personal__btn .nav_personal__text');
    this.secondaryLoginButton = page.locator('.nav_personal__auth-button');
    this.userProfile = page.locator('.nav_personal__text');
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
