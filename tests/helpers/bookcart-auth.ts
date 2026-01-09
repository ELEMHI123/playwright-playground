import { expect, Page } from '@playwright/test';

export async function getBearerFromUI(page: Page): Promise<string> {
  await page.goto('https://bookcart.azurewebsites.net');
  await expect(page).not.toHaveURL(/login/i);

  const raw = await page.evaluate(() => localStorage.getItem('currentUser'));
  const currentUser = raw ? JSON.parse(raw) : null;

  const token = currentUser?.accessToken ?? currentUser?.token;
  expect(token).toBeTruthy();
  return token;
}
