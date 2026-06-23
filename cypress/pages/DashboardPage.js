class DashboardPage {
  openWishList() {
    cy.get("body").should("be.visible");

    cy.get('.account-aside-item[href="/wishlist"]', { timeout: 10000 })
      .should("exist")
      .and("be.visible")
      .click();
  }

  returnToDashboard() {
    cy.visit("https://f2yt3gogmjqkq-main-bvxea6i.us-2.tst.site/account");
  }
}

export default new DashboardPage();
