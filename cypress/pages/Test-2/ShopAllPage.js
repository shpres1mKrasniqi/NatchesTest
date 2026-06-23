class ShopAllPage {
  clickAmmunitionCategory() {
    cy.contains(".subcategory-parent-link__text", "Optics").click();
  }

  addProductToWishList() {
    cy.get('button[title="Add to wishlist"]').eq(2).click();
  }
}

export default new ShopAllPage();
