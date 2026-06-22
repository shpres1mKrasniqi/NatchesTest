class DashboardPage {
  openWishList() {
    cy.get("body").should("be.visible");

    cy.get('.account-aside-item[href="/wishlist"]', { timeout: 10000 })
      .should("exist")
      .and("be.visible")
      .click();
  }
}

export default new DashboardPage();
