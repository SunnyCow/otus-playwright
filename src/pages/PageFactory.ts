import { type Page } from '@playwright/test';
import { AfishaMainPage } from './afisha/AfishaMainPage';
import { FarpostLoginPage } from './FarpostLoginPage';
import { SearchResultPage } from './afisha/SearchResultPage';
import { VLMainPage } from './VLMainPage';
import { EventCreationPage } from './afisha/user/event-creation/EventCreationPage';
import { KinoMainPage } from './kino/KinoMainPage';

export class PageFactory {
  static afishaMainPage(page: Page): AfishaMainPage {
    return new AfishaMainPage(page);
  }
  static kinoMainPage(page: Page): KinoMainPage {
    return new KinoMainPage(page);
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

  static eventCreationPage(page: Page): EventCreationPage {
    return new EventCreationPage(page);
  }
}
