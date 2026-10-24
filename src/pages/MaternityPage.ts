import {Page, Locator} from '@playwright/test';
import testData from '../Data/testData.json';

export default class MaternityPage {
  
  readonly page: Page;
  public maternity: {
    maternityLink: Locator;
    reports: Locator;
    maternityallowance: Locator;
    fromDate: Locator;
    showreport: Locator;
    viewdetails: Locator;
    star_button: Locator;
    star_button_tooltip: Locator;
  };

  constructor(page: Page) {
    this.page = page;
    this.maternity = {
      maternityLink: page.locator('//a[@href="#/Maternity"]'),
      reports: page.locator("(//a[@href='#/Maternity/Reports'])[2]"),
      maternityallowance: page.locator('//a[@href="#/Maternity/Reports/MaternityAllowance"]'),
      fromDate: page.locator('(//input[@id="date"])[1]'),
      showreport: page.locator('//button[contains(text(), "Show Report")]'),
      viewdetails: page.locator('//a[contains(text(),"View Details")]'),
      star_button: page.locator(''),
      star_button_tooltip: page.locator(""),
    };
  }

  /**
   * @Test1 Verifies the functionality of the Receipt Modal in the Maternity module by navigating through the required steps and applying filters.
   *
   * @param {Record<string, string>} data - Contains 'FromDate' to filter the report.
   *
   * Steps:
   * 1. Navigate to Maternity module and access reports.
   * 2. Filter the report based on the provided "FromDate."
   * 3. Generate the report and view details.
   *
   * @returns {Promise<void>} - Returns void; logs error if any step fails.
   */
  async verifyReceiptModal() {

    await this.page.waitForTimeout(20000);
    await this.maternity.maternityLink.click();
    await this.maternity.reports.click();
    await this.maternity.maternityallowance.click();
  
    const fromdate = testData.DateRange[0].FromDate as string;
    await this.maternity.fromDate.fill(fromdate);

    await this.maternity.showreport.click();
    await this.maternity.viewdetails.click();
    await this.page.waitForTimeout(3000);
    

  }

}
