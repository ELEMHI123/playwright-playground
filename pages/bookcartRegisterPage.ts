import { expect, Locator, Page } from '@playwright/test';

export class BookcartRegisterPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly genderButton: Locator;
  readonly registerButton: Locator;

  constructor(page: Page) {

    this.page = page;
    this.firstNameInput = page.locator('input[formcontrolname="firstName"]');
    this.lastNameInput = page.locator('input[formcontrolname="lastName"]');
    this.usernameInput = page.locator('input[formcontrolname="userName"]');
    this.passwordInput = page.locator('input[formcontrolname="password"]');
    this.confirmPasswordInput = page.locator('input[formcontrolname="confirmPassword"]');
    this.genderButton = page.getByRole('radio', { name: 'Female' });
    this.registerButton = page.getByRole('button', { name: 'Register' });
  }

  async goto() {
    await this.page.goto('https://bookcart.azurewebsites.net/register');
  }

    async register(firstname: string, lastname: string, username: string, password: string, confirmpassword: string) {
        await this.firstNameInput.click();
        await this.firstNameInput.fill(firstname);
            await this.page.keyboard.press('Tab');
        await this.lastNameInput.fill(lastname);
            await this.page.keyboard.press('Tab');
        await this.usernameInput.fill(username);
            await this.page.keyboard.press('Tab');
        await this.passwordInput.fill(password);
            await this.page.keyboard.press('Tab');
    await this.confirmPasswordInput.fill(confirmpassword);
    await this.genderButton.click();
    await this.registerButton.click();

    await expect(this.page).not.toHaveURL(/register/i);
  }
}
