import { test, expect } from '@playwright/test';

test('should log in successfully', async ({ page }) => {
  await page.goto('', { waitUntil: 'domcontentloaded' });
  const userId = '14497131';

  // на странице два элемента, которые подходят под locator('#body').getByRole('link', { name: 'Войти' }), поэтому выбираем по классам
  await page.locator('.nav_personal__btn .nav_personal__text').click();

  const phoneInput = page.getByRole('textbox', { name: 'Телефон / Логин' });
  const passwordInput = page.getByRole('textbox', { name: 'Пароль' });
  const loginButton = page.getByRole('button', { name: 'Войти с паролем' });
  const secondaryLoginButton = page.locator('.nav_personal__auth-button');
  const userProfileLink = page.getByRole('link', { name: userId });

  if (await secondaryLoginButton.isVisible()) {
      await secondaryLoginButton.click();
  }

  await expect(phoneInput).toBeVisible()
  await phoneInput.fill(process.env.TEST_USER!);
  await passwordInput.fill(process.env.TEST_PASS!);

  await loginButton.click();
  await expect(userProfileLink).toBeVisible();
});
