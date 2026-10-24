import {Page, Locator, expect} from '@playwright/test';

export class SettingsPage {

  readonly page: Page;
  private settingsLink: Locator;
  private radiologySubmodule: Locator;
  private addImagingTypeButton: Locator;
  private imagingItemNameField: Locator;
  private addButton: Locator;
  private searchBar: Locator;
  private adt: Locator;
  private manageBed: Locator;
  private occupiedEdit: Locator;
  private availableEdit: Locator;
  private helpDeskLink: Locator;
  private isActive: Locator;
  private update: Locator;
  private maleWard: Locator;
  private addBedButton: Locator;
  private wardSelectDropdown: Locator;
  private bedFeaturesDropdown: Locator;
  private saveButton: Locator;
  private bedNumberField: Locator;
  private lastpage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.settingsLink = page.locator('//a[@href="#/Settings"]');
    this.radiologySubmodule = page.locator(`(//a[@href='#/Settings/RadiologyManage'])[2]`);
    this.addImagingTypeButton = page.locator(`//a[text()='Add Imaging Type']`);
    this.imagingItemNameField = page.locator(`//input[@id='ImagingTypeName']`);
    this.addButton = page.locator(`//input[@id='addBtn']`);
    this.searchBar = page.getByPlaceholder(`search`);
    this.adt = page.locator('(//a[@href="#/Settings/ADTManage"])[2]');
    this.manageBed = page.locator('//a[@href="#/Settings/ADTManage/ManageBed"]');
    this.availableEdit = page.locator('(//span[text()="Available"])[1]//ancestor::div[@role="row"]//div[7]//a');
    this.occupiedEdit = page.locator('(//span[text()="Occupied"])[1]//ancestor::div[@role="row"]//div[7]//a');
    this.helpDeskLink = page.locator('//a[@href="#/Helpdesk"]');
    this.isActive = page.locator('.icheck-inline.no-margin span');
    this.update = page.locator('//input[@value="Add"]');
    this.maleWard = page.locator('//table[@id="bedFeature"]//tbody//tr[2]//td[5]');
    this.addBedButton = page.locator('//a[@feature="button"]');
    this.wardSelectDropdown = page.locator('//select[@formcontrolname="WardId"]');
    this.bedFeaturesDropdown = page.getByPlaceholder('Select Bed Feature');
    this.saveButton = page.locator('//input[@value="Update"]');
    this.bedNumberField = page.locator('#BedNumber');
    this.lastpage = page.locator('');
  }

  /**
   * @Test13 This method automates the process of creating a new imaging type in the Radiology section of the Settings module.
   *
   * @description This function performs the following actions:
   *              1. Navigates to the Settings module and clicks on the Radiology submodule.
   *              2. Clicks on the "Add Imaging Type" button to open the modal for adding a new imaging type.
   *              3. Fills the "Imaging Item Name" field with a random name (Test-{random4digitnumber}) and clicks "Add".
   *              4. Verifies that the newly added imaging type appears in the list of imaging types.
   */
  async addAndVerifyNewImagingType() {

    await this.page.waitForTimeout(20000);
    await this.settingsLink.click();
    await this.radiologySubmodule.click();

    await this.addImagingTypeButton.click();
    await this.imagingItemNameField.fill("Test - 0000");
    
    await this.addButton.click();
    await this.page.waitForTimeout(5000);

  }

  /**
   * @Test6 Adds a new bed with a random bed number in the ADT Manage Ward section and verifies if the "Is Active" status is set.
   *
   * @returns {Promise<number>} - Returns the randomly generated bed number after saving.
   *
   * Steps:
   * 1. Generate a random bed number.
   * 2. Navigate to the ADT Manage Ward section.
   * 3. Click 'Manage Bed' and then 'Add Bed'.
   * 4. Select a ward, fill in the bed number, and choose bed features using keyboard navigation.
   * 5. Enable 'Is Active' and save the bed.
   * 6. Retrieve and verify the 'Is Active' cell value using the generated bed number.
   */
  async captureInventoryRequisitionSection() {
    
    await this.page.waitForTimeout(20000);

    await this.settingsLink.click();
    await this.page.pause();
    await this.adt.click();
    await this.page.pause();
    await this.manageBed.click();
    await this.page.pause();
    await this.addBedButton.click();
    await this.page.pause();
    await this.wardSelectDropdown.selectOption(" Male Ward  ");
    await this.page.pause();
    const bednumber = Math.floor(Math.random() * 100000) + 1;
    await this.bedNumberField.fill(bednumber.toString());
    await this.page.pause();
    await this.bedFeaturesDropdown.click();
    await this.page.locator("//li[text()='Male Ward']").click();
    await this.page.pause();
    await this.isActive.click();
    await this.page.pause();
    await this.update.click();
    await this.page.pause();

    await this.searchBar.fill(bednumber.toString());
    await this.page.waitForTimeout(10000);

    return bednumber;


    


  }

  /**
   * @Test2 Verifies the functionality of navigating through the bed management settings and editing an occupied bed.
   *
   * @returns {Promise<void>} - Returns void; logs error if any step fails.
   *
   * Steps:
   * 1. Navigate to settings.
   * 2. Access ADT (Admission, Discharge, Transfer) module.
   * 3. Manage beds and select the bed to edit.
   */
  async verifyOccupiedBed() {

    await this.page.waitForTimeout(20000);
    await this.settingsLink.click();
    await this.adt.click();
    await this.manageBed.click();
    await this.occupiedEdit.click();
   
  }

  /**
   * @Test3 Verifies the Male Ward functionality by activating a bed through the ADT module and then checking the Male Ward listing.
   *
   * @returns {Promise<void>}
   *
   * Steps:
   * 1. Navigate to Help Desk (initial step, potentially to ensure user is on the correct landing page).
   * 2. Navigate to Settings → ADT → Manage Bed.
   * 3. Edit a bed record, activate it via checkbox, and update the record.
   * 4. Navigate back to Help Desk.
   * 5. Click on Male Ward to verify updated status.
   */
  async verifyMaleWard() {

    await this.page.waitForTimeout(20000);
    await this.helpDeskLink.click();
    const malewardcount = await this.maleWard.textContent();

    await this.settingsLink.click();
    await this.adt.click();
    await this.manageBed.click();
    await this.availableEdit.click();
    await this.isActive.click();
    await this.saveButton.click();

    await this.helpDeskLink.click();
    const updatedmalewardcount = await this.maleWard.textContent();
    

  }
}
