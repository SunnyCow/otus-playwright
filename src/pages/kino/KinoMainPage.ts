import { Page } from '@playwright/test';
import { BasePage } from '../BasePage';
import { Header } from '../fragments/kino/user/Header';

export class KinoMainPage extends BasePage {
  readonly header: Header;

  constructor(page: Page) {
    super(page);
    this.header = new Header(page);
  }
}
