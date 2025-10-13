import { test, expect } from '@playwright/test';
import { PageFactory } from '../../src/pages/PageFactory';

test('should log in', async ({ page }) => {
  const username = process.env.TEST_USER!;
  const password = process.env.TEST_PASS!;
  const userId = process.env.TEST_USER_ID!;

  const afishaMainPage = PageFactory.afishaMainPage(page, userId);
  const farpostLoginPage = PageFactory.farpostLoginPage(page);

  await afishaMainPage.open();

  await afishaMainPage.loginButton.click();

  // для некоторых юзеров при нажатии на кнопку логина открывается меню
  if (await afishaMainPage.secondaryLoginButton.isVisible({ timeout: 3000 })) {
    await afishaMainPage.secondaryLoginButton.click();
  }

  await farpostLoginPage.phoneInput.fill(username);
  await farpostLoginPage.passwordInput.fill(password);

  await farpostLoginPage.passwordInput.press('Enter');
  await expect(afishaMainPage.userProfileLink).toBeVisible();
});
