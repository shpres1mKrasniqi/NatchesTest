class LoginPage {
  fillEmailData() {
    cy.get("#loginLinkMail")
      .should("be.visible")
      .type("shpresimkrasniqi7@gmail.com");
  }

  continueWithPass() {
    cy.get('button[data-login-toggle-password-button="true"]')
      .should("be.visible")
      .click();
  }

  fillPasswordData() {
    cy.get('input[type="password"]').should("be.visible").type("shpresimi123.");
  }

  clickLogin() {
    cy.get(".login-password button[type='submit']")
      .should("be.visible")
      .click();
  }
}

export default new LoginPage();
