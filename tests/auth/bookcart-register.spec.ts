import { expect, test } from '@playwright/test';
import path from 'path';
import { BookcartRegisterPage } from '../../pages/bookcartRegisterPage';

test('register on bookcart', async ({ page, context }) => {
  await page.goto('https://bookcart.azurewebsites.net/');

    const registerPage = new BookcartRegisterPage(page);
    await registerPage.goto();
    await registerPage.register('Elena', 'Test', 'elena-test', 'Password123!!!', 'Password123!!!');

    await Promise.all([
    page.waitForURL((url) => !url.toString().includes('/register')),
    page.click('.body > app-root > div > app-user-registration > div > mat-card > mat-card-content > form > mat-card-actions > button'),
  ]);


  await page.goto('https://bookcart.azurewebsites.net/');

  await expect(page).not.toHaveURL(/register/i);

  await context.storageState({ path: path.resolve(process.cwd(), 'state/state-bookcart.json') });
});
