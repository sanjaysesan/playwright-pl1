import {Page, Locator} from '@playwright/test';
import testData from '../Data/testData.json';

export default class DispensaryPage {

  readonly page: Page;
  private maxRetries = 3;
  private timeoutDuration = 5000;

  public dispensary: {
    dispensaryLink: Locator;
    activateCounter: Locator;
    counterSelection: Locator;
    counterName: Locator;
    activatedCounterInfo: Locator;
    deactivateCounterButton: Locator;
    titleName: Locator;
    name: Locator;
    prescription: Locator;
    reports: Locator;
    fromDate: Locator;
    showReportButton: Locator;
    userCollectionReport: Locator;
    counterDropdown: Locator;
    counterNameFromTable: Locator;
    morningCounter: Locator;
  };

  constructor(page: Page) {
    this.page = page;
    this.dispensary = {
      dispensaryLink: page.locator('//a[@href="#/Dispensary"]'),
      activateCounter: page.locator('//i[text()="Main Dispensary"]'),
      counterSelection: page.locator('//h5[text()="Morning Counter "]'),
      counterName: page.locator('(//a[@href="#/Dispensary/Sale"])[2]'),
      activatedCounterInfo: page.locator(``),
      deactivateCounterButton: page.locator(``),
      titleName: page.locator(''),
      name: page.locator(''),
      prescription: page.locator(""),
      reports: page.locator(`(//a[@href="#/Dispensary/Reports"])[2]`),
      fromDate: page.locator(`(//input[@id="date"])[1]`),
      showReportButton: page.locator(`//span[text()="Show Report"]`),
      userCollectionReport: page.locator(`//i[text()="User Collection"]`),
      counterDropdown: page.locator(`#ddlCounter`),
      counterNameFromTable: page.locator(``),
      morningCounter: page.locator(''),
    };
  }

  /**
   * @Test11 Generates the Morning Counter report in the Dispensary module by applying the "From Date"
   * filter and verifying the report contains only "Morning Counter" entries.
   *
   * Steps:
   * 1. Navigates to the Dispensary module.
   * 2. Accesses the Reports → User Collection Report section.
   * 3. Sets the "From Date" and selects "Morning Counter" from the dropdown.
   * 4. Clicks the Show Report button and waits for the report to load.
   * 5. Verifies that each row in the report corresponds to "Morning Counter".
   *
   * @param {Record<string, string>} data - An object containing key-value pairs for test data.
   *                                        Expected to include a 'FromDate' key.
   * @returns {Promise<void>} - This method performs validations but does not return a value.
   */
  async generateMorningCounterReport(data: Record<string, string>) {

    await this.page.waitForTimeout(20000);
    await this.dispensary.dispensaryLink.click();

    await this.dispensary.activateCounter.click();
    await this.dispensary.reports.click();
    await this.dispensary.userCollectionReport.click();

    const fromdate = testData.DateRange[0].FromDate as string;
    await this.dispensary.fromDate.fill(fromdate);
    await this.dispensary.counterDropdown.selectOption("Morning Counter");

    await this.dispensary.showReportButton.click();
    await this.page.waitForTimeout(20000);

  }

  /**
   * @Test4 Adds a new patient using the keyboard shortcut (Alt + N) after navigating through the dispensary module.
   *
   * @returns {Promise<void>} - Returns void; logs error if any step fails.
   *
   * Steps:
   * 1. Navigate to the Dispensary module.
   * 2. Activate the counter for morning shift.
   * 3. Use the Alt + N keyboard shortcut to open the New Visit page for adding a new patient.
   */
  async addNewPatientUsingShortcut() {

    await this.page.waitForTimeout(20000);
    await this.dispensary.dispensaryLink.click();

    await this.dispensary.activateCounter.click();
    await this.dispensary.counterSelection.click();

    await this.dispensary.counterName.click();
    await this.page.keyboard.down('Alt');
    await this.page.keyboard.press('N');
    await this.page.keyboard.up('Alt');


  }
}
