class WishListPage {
  openProductsFromWishList() {
    cy.get("a.wishlist-name-link").should("be.visible").click();
  }

  addProductToCart() {
    cy.get("button.btn-buy", { timeout: 15000 }).should("be.visible").click();
  }

  goToCheckOut() {
    cy.get('a[href="/checkout/confirm"]')
      .scrollIntoView()
      .should("be.visible")
      .click();
  }
}

export default new WishListPage();
