import { test, expect } from '@playwright/test';
import { PageFactory } from '../../src/pages/PageFactory';

test('logs in with valid credentials', async ({ page }) => {
  const username = process.env.TEST_USER!;
  const password = process.env.TEST_PASS!;
  const userId = process.env.TEST_USER_ID!;
  const afishaMainPage = PageFactory.afishaMainPage(page);
  const farpostLoginPage = PageFactory.farpostLoginPage(page);

  await afishaMainPage.open();
  await afishaMainPage.header.loginButton.click();

  // для некоторых юзеров при нажатии на кнопку логина открывается меню
  if (await afishaMainPage.header.secondaryLoginButton.isVisible({ timeout: 3000 })) {
    await afishaMainPage.header.secondaryLoginButton.click();
  }

  await farpostLoginPage.phoneInput.fill(username);
  await farpostLoginPage.passwordInput.fill(password);
  await farpostLoginPage.passwordInput.press('Enter');

  await expect(afishaMainPage.header.userProfile).toHaveText(userId);
});
