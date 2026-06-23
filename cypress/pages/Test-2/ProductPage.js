class ProductPage {
  addProductToCart() {
    cy.get("button.btn-buy").click();
  }

  goToCheckOut() {
    cy.get('a[title="Go to checkout"]').click();
  }
}
export default new ProductPage();
