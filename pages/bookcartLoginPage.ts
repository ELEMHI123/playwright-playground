import { expect, Locator, Page } from '@playwright/test';

export class BookcartLoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {

    this.page = page;
    this.usernameInput = page.locator('input[id="mat-input-0"]');
    this.passwordInput = page.locator('input[type="password"]');
    this.loginButton = page.locator('mat-card-actions').getByRole('button', { name: 'Login' });
  }

  async goto() {
    await this.page.goto('https://bookcart.azurewebsites.net/login');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();

    await expect(this.page).not.toHaveURL(/login/i);
  }
}
