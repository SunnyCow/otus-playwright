import { BasePage } from '../../base/BasePage';
import { KinoHeaderComponent } from './components/KinoHeaderComponent';

export class KinoMainPage extends BasePage {
  public readonly header = new KinoHeaderComponent(this.page.locator('.header'), this.page);
}
