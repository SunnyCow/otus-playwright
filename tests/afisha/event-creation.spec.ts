import { test, expect } from '../../fixtures/auth.fixture';
import { EventCreationPage } from '../../src/pages/afisha/user/event-creation/EventCreationPage';
import { PageFactory } from '../../src/pages/PageFactory';

test.describe('User Event Creation Page', () => {
  let eventPage: EventCreationPage;

  test.beforeEach(async ({ userPage }) => {
    eventPage = PageFactory.eventCreationPage(userPage);
    await eventPage.open();
  })

  test.describe('Smoke UI Verification', { tag: '@smoke' }, () => {
    test('loads the page and displays core elements', async () => {
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

  test.describe('Event creation', () => {
    test('publish button is enabled if all required fields are filled', async () => {
      await eventPage.fillAllRequiredFields();

      await expect(eventPage.publishButton).toBeEnabled();
    });

    test('creates event with all required fields filled', async () => {
      test.skip(test.info().project.name.toLowerCase().includes('prod'), 'Staging-only test');

      await eventPage.fillAllRequiredFields();

      await eventPage.publishButton.click();
    });
  })
});
