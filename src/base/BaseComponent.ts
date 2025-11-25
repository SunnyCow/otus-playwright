import { type Locator, type Page } from '@playwright/test';

export abstract class BaseComponent {
  constructor(
    public readonly root: Locator,
    public readonly page?: Page,
  ) {}

  protected getPage(): Page {
    if (!this.page) {
      throw new Error(
        `Component ${this.constructor.name} was initialized without a page object, but tried to access it.`,
      );
    }
    return this.page;
  }
}
