import { Locator, Page, expect } from '@playwright/test';

export class BookcartDashboardPage {
  readonly page: Page;

  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;

    this.heading = page.getByText('Book Cart');
  }

  async goto() {
    await this.page.goto('/');
  }

  async assertLoaded() {
      await expect(this.page).not.toHaveURL(/Login/i);

      await expect(this.heading).toBeVisible();
  }
}
