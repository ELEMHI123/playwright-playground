import { expect, test } from '@playwright/test';
import path from 'path';
import { BookcartLoginPage } from '../../pages/bookcartLoginPage';

test('save bookcart storage state', async ({ page, context }) => {
  await page.goto('https://bookcart.azurewebsites.net/');

  const loginPage = new BookcartLoginPage(page);
  await loginPage.goto();
  await loginPage.login(process.env.bookcart_login!, process.env.bookcart_password!);

  await Promise.all([
    page.waitForURL((url) => !url.toString().includes('/login')),
  ]);


  await page.goto('https://bookcart.azurewebsites.net');

  await expect(page).not.toHaveURL(/login/i);

  await context.storageState({ path: path.resolve(process.cwd(), 'state/state-bookcart.json') });
});
