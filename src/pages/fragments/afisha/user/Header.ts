import { type Locator, type Page } from '@playwright/test';
import { PageFactory } from '../../../PageFactory';
import { type FarpostLoginPage } from '../../../FarpostLoginPage';
import { type EventCreationPage } from '../../../afisha/EventCreationPage';

export class Header {
  readonly logo: Locator;
  readonly projectCity: Locator;
  readonly dropdown: Locator;
  readonly dropdownCity: Locator;
  readonly searchInput: Locator;
  readonly favButton: Locator;
  readonly addEventButton: Locator;
  readonly loginButton: Locator;
  readonly secondaryLoginButton: Locator;
  readonly userProfile: Locator;

  constructor(readonly page: Page) {
    this.logo = page.getByRole('link', { name: 'VL.ru', exact: true });
    this.projectCity = page.locator('.header__project-city').nth(1);
    this.dropdown = page.locator('.dropdown-menu').nth(1);
    this.dropdownCity = this.dropdown.locator(':scope > a').first();
    this.searchInput = page.getByRole('textbox', { name: 'Поиск' });
    this.favButton = page.locator('.favorite__list-link');
    this.addEventButton = page.getByRole('link', { name: 'Добавить событие' });
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

  async getFavCount(): Promise<number> {
    return Number(await this.favButton.getAttribute('data-content'));
  }

  async navigateToLoginPage(): Promise<FarpostLoginPage> {
    await this.loginButton.click();

    // для некоторых юзеров при нажатии на кнопку логина открывается меню
    if (await this.secondaryLoginButton.isVisible({ timeout: 3000 })) {
      await this.secondaryLoginButton.click();
    }

    return PageFactory.farpostLoginPage(this.page);
  }

  async navigateToEventCreationPage(): Promise<EventCreationPage> {
    await this.addEventButton.click();

    return PageFactory.eventCreationPage(this.page);
  }
}
