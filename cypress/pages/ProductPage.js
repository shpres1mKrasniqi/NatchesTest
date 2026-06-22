class ProductPage {
  visit(productUrl) {
    cy.visit(productUrl);
  }

  addToCartButton() {
    return cy.contains("button", /add to cart/i);
  }

  verifyProductPage() {
    this.addToCartButton().should("be.visible");
  }

  addToCart() {
    this.addToCartButton().click();
  }
}

export default new ProductPage();
