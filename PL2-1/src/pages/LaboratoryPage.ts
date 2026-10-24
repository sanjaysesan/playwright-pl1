export default class LaboratoryPage {

  private page: Page;
  private laboratoryLink: Locator;
  private laboratoryDashboard: Locator;
  private sampleCollectionTab: Locator;
  private from_date: Locator;
  private ok_button: Locator;
  private col_requestingDept: Locator;
  private requestdept_hamburger: Locator;
  private select_dropdown: Locator;
  private start_with_option: Locator;
  private req_dept_search: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.laboratoryLink = page.locator('');
    this.laboratoryDashboard = page.locator('');
    this.sampleCollectionTab = page.locator('');
    this.from_date = page.locator("");
    this.ok_button = page.locator('');
    this.col_requestingDept = page.locator('');
    this.requestdept_hamburger = page.locator("");
    this.select_dropdown = page.locator("");
    this.start_with_option = page.locator("");
    this.req_dept_search = page.locator("");
  }

  /**
   * @Test9 Verify table filtering for "Male Ward"
   *
   * 1. Navigate to https://healthapp.yaksha.com/Home/Index#/Lab/Dashboard
   * 2. Select the Sample Collections tab.
   * 3. Enter From Date as 01-01-2020 and click OK.
   * 4. Hover over the Requesting Department column and click Hamburger Menu.
   * 5. Select Starts with from the dropdown.
   * 6. Enter Male Ward in the text field.
   *
   *
   */

  async verifyTableFiltering() {
  }
}
