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
    rightPointerIcon: string;
    tooltipText: Locator;
  };

  constructor(page: Page) {
    this.page = page;
    this.dispensary = {
      dispensaryLink: page.locator(''),
      activateCounter: page.locator(""),
      counterSelection: page.locator(''),
      counterName: page.locator(''),
      activatedCounterInfo: page.locator(``),
      deactivateCounterButton: page.locator(``),
      titleName: page.locator(''),
      name: page.locator(''),
      prescription: page.locator(""),
      reports: page.locator(``),
      fromDate: page.locator(``),
      showReportButton: page.locator(``),
      userCollectionReport: page.locator(``),
      counterDropdown: page.locator(``),
      counterNameFromTable: page.locator(``),
      rightPointerIcon: '',
      tooltipText: page.locator(''),
    };
  }

 /**
 * @Test1 Verify tooltip text when hovering over the dispensary pointer icon.
 *
 * @returns {Promise<string>} - Returns the trimmed tooltip text; throws an error if the tooltip text does not match the expected value.
 *
 * Steps:
 * 1. Click on the Dispensary link to open the dispensary section.
 * 2. Hover over the right-pointing icon to trigger the tooltip.
 * 3. Capture the tooltip text displayed.
 * 4. Verify that the tooltip text matches the expected message:
 *    "You are currently in Main Dispensary dispensary. To change, you can always click here."
 * 5. Return the actual tooltip text.
 */

  async verifyAndReturnDispensaryTooltipText(): Promise<string> {
    return '';
  }
}
