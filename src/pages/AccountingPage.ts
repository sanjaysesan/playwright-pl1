import {Page, Locator} from '@playwright/test';

export default class AccountingPage {

  readonly page: Page;
  public accounting: {
    accountingLink: Locator;
    reports: Locator;
    dailyTransaction: Locator;
    fiscalYear: Locator;
    load: Locator;
    settings: Locator;
    searchBar: Locator;
    activate: Locator;
    deactivate: Locator;
  };

  constructor(page: Page) {
    this.page = page;
    this.accounting = {
      accountingLink: page.locator('//a[@href="#/Accounting"]'),
      reports: page.locator('(//a[@href="#/Accounting/Reports"])[2]'),
      dailyTransaction: page.locator('//a[@href="#/Accounting/Reports/DailyTransactionReport"]'),
      fiscalYear: page.locator("select.ng-untouched"),
      load: page.locator('//button[text()=" Load "]'),
      settings: page.locator(''),
      searchBar: page.locator(''),
      activate: page.locator(''),
      deactivate: page.locator(""),
    };
  }

  /**
   * @Test7 Verifies the daily transaction report table by navigating through the accounting module and loading the report for a specified fiscal year.
   *
   * @param {Record<string, string>} data - The input data containing the fiscal year to be used for loading the report.
   * @returns {Promise<void>} - Returns void; logs error if any step fails.
   *
   * Steps:
   * 1. Navigate to the Accounting module.
   * 2. Open the Reports section and select the Daily Transaction report.
   * 3. Set the Fiscal Year field to the specified year and load the report.
   */
  async verifyTable() {

    await this.page.waitForTimeout(20000);

    await this.accounting.accountingLink.click();
    await this.page.pause();
    await this.accounting.reports.click();
    await this.page.pause();
    await this.accounting.dailyTransaction.click();
    await this.page.pause();
    await this.accounting.fiscalYear.selectOption('2023');
    await this.page.pause();
    await this.accounting.load.click();

    await this.page.waitForTimeout(10000);


  }
}
