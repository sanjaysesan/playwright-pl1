export default class ADTPage {

  readonly page: Page;
  public ADT: {
    ADTLink: Locator;
    searchBar: Locator;
    patientName: Locator;
    hospitalSearchBar: Locator;
    patientCode: Locator;
    admittedPatient: Locator;
    searchbar: Locator;
    elipsis: Locator;
    change_doctor: Locator;
    update_button: Locator;
    select_doctor_error: Locator;
    first_counter: Locator;
  };

  constructor(page: Page) {
    this.page = page;
    this.ADT = {
      ADTLink: page.locator(''),
      searchBar: page.locator(""),
      hospitalSearchBar: page.locator(""),
      patientName: page.locator(""),
      patientCode: page.locator(""),
      admittedPatient: page.locator(""),
      searchbar: page.locator(""),
      elipsis: page.locator("("),
      change_doctor: page.locator(""),
      update_button: page.locator(""),
      select_doctor_error: page.locator(""),
      first_counter: page.locator(""),
    };
  }

  /**
   * @Test15 Verifies field-level error validation in the "Change Doctor" modal within the ADT module.
   *
   *
   * Steps:
   * 1. Navigate to the ADT module.
   * 2. Click on the “Admitted Patients” tab.
   * 3. Search for a patient using data from the PatientName.json file.
   * 4. Click on the “...” button from the patient row and select “Change Doctor”.
   * 5. In the modal that appears, click the update button without selecting a doctor.
   *
   * Expected Result:
   * - A field-level error message should appear: "Select doctor from the list."
   */

  async verifyInventorySubModuleNavigation() {
  }
}
