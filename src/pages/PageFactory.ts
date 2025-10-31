/* eslint-disable @typescript-eslint/no-extraneous-class */
import { type Page } from '@playwright/test';
import { AfishaMainPage } from './afisha/AfishaMainPage';
import { FarpostLoginPage } from './FarpostLoginPage';
import { SearchResultPage } from './afisha/SearchResultPage';
import { VLMainPage } from './VLMainPage';

export class PageFactory {
  static afishaMainPage(page: Page): AfishaMainPage {
    return new AfishaMainPage(page);
  }

  static farpostLoginPage(page: Page): FarpostLoginPage {
    return new FarpostLoginPage(page);
  }

  static searchResultPage(page: Page): SearchResultPage {
    return new SearchResultPage(page);
  }

  static vlMainPage(): VLMainPage {
    return new VLMainPage();
  }
}
