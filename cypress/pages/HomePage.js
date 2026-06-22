class HomePage {
  visit() {
    cy.visit("https://f2yt3gogmjqkq-main-bvxea6i.us-2.tst.site/");
  }

  openAccount() {
    cy.get(".btn.account-menu-btn.header-actions-btn")
      .should("be.visible")
      .and("not.be.disabled")
      .click();
  }

  openLogin() {
    cy.get(".btn.btn-primary.account-menu-login-button")
      .should("be.visible")
      .and("not.be.disabled")
      .click();
  }
}

export default new HomePage();
