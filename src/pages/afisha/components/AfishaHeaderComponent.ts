import { PageFactory } from '../../PageFactory';
import { type FarpostLoginPage } from '../../FarpostLoginPage';
import { type EventCreationPage } from '../user/event-creation/EventCreationPage';
import { BaseComponent } from '../../../base/BaseComponent';

export class AfishaHeaderComponent extends BaseComponent {
  public readonly logo = this.root.getByRole('link', { name: 'VL.ru' });
  public readonly projectCity = this.root.locator('.header__project-city').first();
  public readonly dropdown = this.root.locator('.dropdown-menu').first();
  public readonly dropdownCity = this.dropdown.locator(':scope > a').first();
  public readonly searchInput = this.root.getByRole('textbox', { name: 'Поиск' });
  public readonly favButton = this.root.locator('.favorite__list-link');
  public readonly addEventButton = this.root.getByRole('link', { name: 'Добавить событие' });
  public readonly loginButton = this.root.getByText('Войти');
  public readonly userProfile = this.root.locator('.nav_personal__text');

  async searchFor(query: string): Promise<void> {
    await this.searchInput.fill(query);
    await this.searchInput.press('Enter');
  }

  public async getFavCount(): Promise<number> {
    return Number(await this.favButton.getAttribute('data-content'));
  }

  public async navigateToLoginPage(): Promise<FarpostLoginPage> {
    await this.loginButton.click();

    return PageFactory.farpostLoginPage(this.getPage());
  }

  public async navigateToEventCreationPage(): Promise<EventCreationPage> {
    await this.addEventButton.click();

    return PageFactory.eventCreationPage(this.getPage());
  }
}
