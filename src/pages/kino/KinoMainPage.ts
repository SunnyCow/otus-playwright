import { type Page } from '@playwright/test';
import { BasePage } from '../../base/BasePage';
import { Header } from '../components/kino/user/Header';

export class KinoMainPage extends BasePage {
  readonly header: Header;

  constructor(page: Page) {
    super(page);
    this.header = new Header(page);
  }
}
