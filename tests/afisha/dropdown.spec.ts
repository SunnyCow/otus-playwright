import { test, expect } from '@playwright/test';

test('hover opens context menu with cities', async ({ page }) => {
  const dropDown = await page.locator('.dropdown-menu').nth(1);
  await page.goto('');

  // локатор находит 3 элемента для разных разрешений, выбираем нужный нам
  await page.locator('.header__project-city').nth(1).hover();
  await expect(dropDown).toBeVisible();

  const city = dropDown.locator(':scope > a').first();
  await expect(city).toBeVisible();
})
