import { test, expect } from '../../fixtures/auth.fixture';
import { PageFactory } from '../../src/pages/PageFactory';

test.describe('User Event Creation Page', () => {
    test.describe('Smoke UI Verification @smoke', () => {
        test('loads the page and displays core elements', async ({ userPage }) => {
            const eventPage = PageFactory.eventCreationPage(userPage);
            await eventPage.open();

            await expect(eventPage.titleCard).toBeVisible({ timeout: 20_000 });
            await expect(eventPage.posterCard).toBeVisible();
            await expect(eventPage.descriptionCard).toBeVisible();
            await expect(eventPage.contactsCard).toBeVisible();
            await expect(eventPage.priceCard).toBeVisible();
            await expect(eventPage.schedulesCard).toBeVisible();
            await expect(eventPage.orgContactsCard).toBeVisible();
            await expect(eventPage.registrationCard).toBeVisible();
            await expect(eventPage.publishButton).toBeDisabled();
        });
    });
});
