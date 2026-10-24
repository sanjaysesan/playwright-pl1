import {Page, Locator} from '@playwright/test';
export default class AppointmentPage {

  readonly page: Page;
  public appointment: {
    appointmentLink: Locator;
    counterItem: Locator;
    titleName: Locator;
    searchBar: Locator;
    patientName: Locator;
    hospitalSearchBar: Locator;
    patientCode: Locator;
    newVisitTab: Locator;
    newVisitHeading: Locator;
    visitTypeDropdown: Locator;
    fromDateField: Locator;
    toDateField: Locator;
    showPatientButton: Locator;
    religionSelectDropdown: Locator;
    departmentDropdown: Locator;
    doctorNameDropdown: Locator;
    printInvoiceButton: Locator;
  };

  constructor(page: Page) {
    this.page = page;
    this.appointment = {
      appointmentLink: page.locator('//a[@href="#/Appointment"]'),
      counterItem: page.locator("//h5[text()='New-1 ']"),
      titleName: page.locator("#btnNewPatient"),
      searchBar: page.locator(""),
      hospitalSearchBar: page.locator(""),
      patientName: page.locator(""),
      patientCode: page.locator(""),
      newVisitTab: page.locator(``),
      newVisitHeading: page.locator(``),
      visitTypeDropdown: page.locator(''),
      fromDateField: page.locator('#date'),
      toDateField: page.locator(''),
      showPatientButton: page.locator('//button[text()=" Show Patient "]'),
      religionSelectDropdown: page.locator(''),
      departmentDropdown: page.locator(''),
      doctorNameDropdown: page.getByPlaceholder('Doctor Name'),
      printInvoiceButton: page.locator(''),
    };
  }

  /**
   * @Test8 Verifies that the appointment status changes appropriately after printing the invoice.
   *
   * @returns {Promise<[string, string]>} Returns an array with hospital number and phone number.
   *
   * Steps:
   * 1. Navigate to Appointment List and create a new appointment with random patient details.
   * 2. Capture the generated appointment ID from the success message.
   * 3. Navigate back to Appointment List and filter appointments by date and type.
   * 4. Check-in the patient and fill required details.
   * 5. Print the invoice and confirm the dialog.
   * 6. Capture and return the hospital number and phone number for verification.
   */
  async verifyAppointmentStatusChangeAfterInvoicePrint() {

    await this.page.waitForTimeout(20000);

    await this.appointment.appointmentLink.click();
    await this.appointment.counterItem.click();
    await this.page.locator('(//a[@href="#/Appointment/ListAppointment"])[2]').click();
    await this.appointment.doctorNameDropdown.fill('All Doctors');
    await this.appointment.fromDateField.fill('01-01-2020');
    await this.appointment.showPatientButton.click();

    await this.page.waitForTimeout(10000);

    const name = await this.page.locator("(//a[contains(text(), 'CheckIn')])[1]//ancestor::div[@role='row']//div[5]").textContent();
    const 



    


      //a[contains(text(), "CheckIn")]

      
        (//a[contains(text(), "CheckIn")])[1]//ancestor::div[@role="row"]//div[4]

    


  }
}
-