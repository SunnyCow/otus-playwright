import { test, expect } from '../../fixtures/auth.fixture';
import { PageFactory } from '../../src/pages/PageFactory';

test.describe('User Event Creation Page', () => {
  test.describe('Smoke UI Verification @smoke', () => {
    test('loads the page and displays core elements', async ({ userPage }) => {
      const eventPage = PageFactory.eventCreationPage(userPage);
      await eventPage.open();

      await expect(eventPage.basicInfoComponent.root).toBeVisible({ timeout: 20_000 });
      await expect(eventPage.posterComponent.root).toBeVisible();
      await expect(eventPage.descriptionComponent.root).toBeVisible();
      await expect(eventPage.eventContactsComponent.root).toBeVisible();
      await expect(eventPage.priceComponent.root).toBeVisible();
      await expect(eventPage.schedulesComponent.root).toBeVisible();
      await expect(eventPage.registrationComponent.root).toBeVisible();
      await expect(eventPage.orgContactsComponent.root).toBeVisible();
      await expect(eventPage.publishButton).toBeDisabled();
    });
  });
});
