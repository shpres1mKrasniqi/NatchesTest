class CheckoutPage {
  enterPromoCode() {
    cy.get("#addPromotionInput").should("be.visible").type("E2F1V6X3");
  }

  clickApplyPromoCode() {
    cy.get("#addPromotion").should("be.visible").click();
  }

  verifyPromotionApplied() {
    cy.contains(/discount|promo|applied/i).should("be.visible");
  }

  verifySavedCardSelected() {
    cy.get("body").then(($body) => {
      if ($body.find(".payment-method.selected, [checked]").length > 0) {
        cy.get(".payment-method.selected, input[checked]").should("exist");
      } else {
        cy.contains(/saved card/i).should("be.visible");
      }
    });
  }

  verifyShippingProtection() {
    cy.get("#natchezShippingProtectionCheckbox")
      .should("exist")
      .and("be.checked");
  }

  acceptTermsAndConditions() {
    cy.get("#tos").should("be.visible").check();
  }

  confirmOrder() {
    cy.get("#confirmFormSubmit").should("be.visible").click();
  }

  verifyShippingInsurance() {
    cy.get("body").then(($body) => {
      if ($body.find("#shipping-insurance").length > 0) {
        cy.get("#shipping-insurance").should("be.checked");
      } else {
        cy.contains(/shipping insurance/i).should("be.visible");
      }
    });
  }
}

export default new CheckoutPage();
