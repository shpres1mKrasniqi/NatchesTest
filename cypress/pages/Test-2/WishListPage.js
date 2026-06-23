class WishListPage {
  clickCreateWishListButton() {
    cy.contains("button", "Create new wishlist").click();
  }

  fillWishListName() {
    cy.get("#add-wishlist-name").type("WishList Test 3");
  }

  makeWishListPublic() {
    cy.get("#add-wishlist-visibility").click();
  }

  clickAddButton() {
    cy.contains("button", "Add").click();
  }

  goToShopAll() {
    cy.contains(".main-navigation-link-text", "Shop All").click();
  }

  addProductToWishList() {
    cy.contains(".current-wishlists--item", "WishList Test 3")
      .find(".wishlist-add-circle-btn")
      .click();
  }

  selectWishList() {
    cy.contains(".wishlist-name-link", "WishList Test 3").click();
  }

  makePublicWislist() {
    cy.get('input[id^="wishlist-share-public-toggle-"]').click().click();
  }

  copyPublicPath() {
    cy.get("button.wishlist-share-copy-btn").click();
  }

  visitSharedLinkAsNewCustomer() {
    cy.get("input.wishlist-share-link")
      .invoke("val")
      .then((sharedUrl) => {
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();

        cy.visit(sharedUrl);
      });
  }
}

export default new WishListPage();
