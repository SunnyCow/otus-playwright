import { type Page } from '@playwright/test';
import { AfishaMainPage } from './afisha/AfishaMainPage';
import { FarpostLoginPage } from './FarpostLoginPage';

export class PageFactory {
  static afishaMainPage(page: Page, userId?: string): AfishaMainPage {
    return new AfishaMainPage(page, userId);
  }

  static farpostLoginPage(page: Page): FarpostLoginPage {
    return new FarpostLoginPage(page);
  }
}
