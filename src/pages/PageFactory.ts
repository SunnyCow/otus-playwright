import { type Page } from '@playwright/test';
import { AfishaMainPage } from './afisha/AfishaMainPage';
import { FarpostLoginPage } from './FarpostLoginPage';
import { SearchResultPage } from './afisha/SearchResultPage';

export class PageFactory {
  static afishaMainPage(page: Page, userId?: string): AfishaMainPage {
    return new AfishaMainPage(page, userId);
  }

  static farpostLoginPage(page: Page): FarpostLoginPage {
    return new FarpostLoginPage(page);
  }

  static searchResultPage(page: Page): SearchResultPage {
    return new SearchResultPage(page);
  }
}
