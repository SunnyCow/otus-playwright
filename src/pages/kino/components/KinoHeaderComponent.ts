import { PageFactory } from '../../PageFactory';
import { type FarpostLoginPage } from '../../FarpostLoginPage';
import { BaseComponent } from '../../../base/BaseComponent';

export class KinoHeaderComponent extends BaseComponent {
  readonly searchButton = this.root.locator('.header__search-form-toggle');
  readonly loginButton = this.root.getByRole('link', { name: 'Войти' });
  readonly userProfile = this.root.locator('.nav_personal__label');

  async navigateToLoginPage(): Promise<FarpostLoginPage> {
    await this.loginButton.click();

    return PageFactory.farpostLoginPage(this.getPage());
  }
}
