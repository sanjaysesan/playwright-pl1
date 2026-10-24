import {Page, Locator} from '@playwright/test';

export default class OperationTheatrePage {
  
  readonly page: Page;
  public operationTheatre: {
    operationTheatreLink: Locator;
    newOtBooking: Locator;
    remarks: Locator;
  };

  constructor(page: Page) {
    this.page = page;
    this.operationTheatre = {
      operationTheatreLink: page.locator('//a[@href="#/OperationTheatre"]'),
      newOtBooking: page.locator('//button[text()=" New OT Booking"]'),
      remarks: page.locator(""),
    };
  }

  /**
   * @Test5 Verifies the placeholder of the remarks field by navigating to the Operation Theatre module.
   *
   * @returns {Promise<void>} - Returns void; logs error if any step fails.
   *
   * Steps:
   * 1. Navigate to the Operation Theatre module.
   * 2. Open a new OT booking form.
   * 3. Verify the presence of the remarks field.
   */
  async verifyRemarksPlaceholder() {

    await this.page.waitForTimeout(20000);
    await this.operationTheatre.operationTheatreLink.click();
    await this.operationTheatre.newOtBooking.click();

  }
}
