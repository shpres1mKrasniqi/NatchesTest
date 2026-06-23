class CreateCustomerPage {
  selectGuestAccount() {
    cy.get('label[for="personalGuest"]').click();

    cy.get("input#personalGuest").check({ force: true });
  }

  fillPersonalDetails(firstName, lastName, email, password) {
    cy.get("#billingAddress-personalFirstName").type(firstName);
    cy.get("#billingAddress-personalLastName").type(lastName);
    cy.get("#personalMail").type(email);
    cy.get("#personalPassword").should("be.enabled").type(password);
    cy.get("#personalPasswordConfirmation").should("be.enabled").type(password);
  }

  fillUSAddress(street, city, zip) {
    cy.get("#billingAddress-AddressStreet").type(street);
    cy.get("#billingAddressAddressCity").type(city);
    cy.get("#billingAddressAddressZipcode").type(zip);

    cy.contains(".smarty-suggestion-item", zip, { timeout: 6000 })
      .first()
      .click({ force: true });

    cy.wait(1000);
  }

  fillRandomUSAPhone() {
    const randomLineNumber = Math.floor(1000 + Math.random() * 9000);
    const usaPhone = `555013${randomLineNumber}`;
    cy.get("#billingAddressAddressPhoneNumber").type(usaPhone);
  }

  toggleShippingProtection() {
    cy.get(".checkout-summary-protection__status")
      .first()
      .click({ force: true });
  }

  acceptDataProtection() {
    cy.get("input#acceptedDataProtection").check({ force: true });
  }

  clickContinue() {
    cy.get(".register-submit.d-grid.col-12.mb-4")
      .find("button.btn.btn-primary.btn-lg")
      .filter(":visible")
      .click();
  }
}

export default new CreateCustomerPage();
