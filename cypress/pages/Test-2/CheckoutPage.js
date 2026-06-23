class CheckOutPage {
  // Funksion ndihmës për të kapur trupin e Iframe-it në mënyrë të sigurt
  getIframeBody = () => {
    return cy
      .get('iframe[src*="c3sbx.net"]', { timeout: 20000 })
      .should("be.visible")
      .its("0.contentDocument.body")
      .should("not.be.empty")
      .then(cy.wrap);
  };

  toggleShippingProtection() {
    cy.get(".checkout-summary-protection__status")
      .first()
      .click({ force: true });
  }

  applyPromoCode() {
    cy.get("#addPromotionInput", { timeout: 7000 })
      .should("be.visible")
      .should("not.be.disabled")
      .type("E2F1V6X3");
  }

  clickAddPromo() {
    cy.get("#addPromotion").click();
  }

  agreeToTermsAndConditions() {
    cy.get("#tos").check({ force: true }).should("be.checked");
  }

  checkNewsLetters() {
    // Kërkon input-in checkbox brenda asaj forme
    cy.get("#newsletterRegisterForm input[type='checkbox']")
      .should("exist")
      .check({ force: true })
      .should("be.checked");
  }

  selectShippingMethod() {
    cy.get("#shippingMethod0198bf0f720d72deb54e333160a8cc63")
      .should("exist")
      .click();
  }

  selectPaymentMethod() {
    cy.get("#paymentMethod0199a9729e567067a9a154ddd16da2ed").check({
      force: true,
    }); // 🔥 JO click

    // prit që radio të jetë checked
    cy.get("#paymentMethod0199a9729e567067a9a154ddd16da2ed").should(
      "be.checked",
    );
  }

  fillCreditCardDetails(cardNumber, expMonth, expYear, cvv) {
    // Prit që Curbstone script të ngarkoj form-in

    // Shto këtë përkohësisht në test për debug:
    cy.get("iframe").each(($iframe) => {
      cy.log("IFRAME SRC: " + $iframe[0].src);
      cy.log("IFRAME contentDocument: " + $iframe[0].contentDocument);
    });

    cy.get('iframe[src*="c3sbx.net"]', { timeout: 20000 })
      .should("be.visible")
      .and(($iframe) => {
        expect($iframe[0].contentDocument.body.innerHTML).to.not.equal("");
      });

    this.getIframeBody().within(() => {
      cy.get('input[name="card_number"]', { timeout: 10000 })
        .should("be.visible")
        .type(cardNumber, { delay: 50 });

      cy.get('select[name="card_exp_month"]')
        .should("be.visible")
        .select(expMonth);

      cy.get('select[name="card_exp_year"]')
        .should("be.visible")
        .select(expYear);

      cy.get('input[name="card_cvv"]')
        .should("be.visible")
        .type(cvv, { delay: 50 });
    });
  }

  enterPayButton() {
    this.getIframeBody().within(() => {
      cy.get("#plp-payment-button").should("be.visible").click();
    });
  }
}

export default new CheckOutPage();
