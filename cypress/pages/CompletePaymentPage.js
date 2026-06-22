class CompletePaymentPage {
  completePayment() {
    cy.contains('button[type="submit"]', /complete payment/i)
      .should("be.visible")
      .click();
  }
}

export default new CompletePaymentPage();
