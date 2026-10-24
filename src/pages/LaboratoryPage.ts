import {Page, Locator} from '@playwright/test';
export default class LaboratoryPage {

  private page: Page;
  private laboratoryLink: Locator;
  private laboratoryDashboard: Locator;
  private settingsSubModule: Locator;
  private addNewLabTest: Locator;
  private addButton: Locator;
  private closeButton: Locator;
  private starIcon: Locator;
  private errorMessageLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.laboratoryLink = page.locator('//a[@href="#/Lab"]');
    this.laboratoryDashboard = page.locator('');
    this.settingsSubModule = page.locator('');
    this.addNewLabTest = page.locator('');
    this.addButton = page.locator('');
    this.closeButton = page.locator('');
    this.starIcon = page.getByTitle('Remember this Date');
    this.errorMessageLocator = page.locator(``);
  }

  /**
   * @Test7 This method verifies the error message when attempting to add a new lab test without entering required values.
   *
   * @description Navigates to Laboratory > Settings, selects "Add New Lab Test," and clicks the Add button without
   *              providing any input. Captures and returns the displayed error message.
   * @Note Do not close "Add Lab Test" Modal
   */
  async verifyErrorMessage() {
  }

  /**
   * @Test12 Verifies that the tooltip associated with the star icon in the Laboratory Dashboard
   * appears on hover and logs the tooltip text.
   *
   * Steps:
   * 1. Navigates to the Laboratory module and opens the Dashboard.
   * 2. Hovers over the star icon to trigger the tooltip.
   * 3. Verifies the icon is visible.
   * 4. Retrieves and logs the tooltip text from the `title` attribute.
   *
   * @returns {Promise<void>} - This method logs tooltip visibility and text but does not return a value.
   */
  async verifyStarTooltip() {

    await this.page.waitForTimeout(20000);
    await this.laboratoryLink.click();
    await this.page.pause();

    await this.starIcon.hover();
    await this.page.waitForTimeout(10000);
    return true;

  }
}
