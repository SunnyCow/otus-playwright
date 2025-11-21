import { type Locator, type Page } from '@playwright/test';

export abstract class BaseComponent {
  constructor(
    public readonly root: Locator,
    public readonly page?: Page,
  ) {}
}
