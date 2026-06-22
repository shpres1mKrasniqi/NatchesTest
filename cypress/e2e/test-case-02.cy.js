import ProductPage from "../pages/ProductPage";
import CheckoutConfirmPage from "../pages/CheckoutConfirmPage ";

describe("Shopware Checkout Regression Tests", () => {
  it("TC-02 - Curbstone new customer with new card checkout", () => {
    const testDate = new Date().toISOString();

    const productUrl =
      "https://f2yt3gogmjqkq-main-bvxea6i.us-2.tst.site/detail/019971ac3557730fb25a5b19a29a6e03";

    // Step 1 - Open product page
    ProductPage.visit(productUrl);
    ProductPage.verifyProductPage();

    // Step 2 - Add to cart
    ProductPage.addToCart();
    cy.wait(3000);

    // Step 3 - Go checkout confirm
    CheckoutConfirmPage.visit();
    CheckoutConfirmPage.verifyCheckoutPage();

    // Step 4 - Shipping protection
    CheckoutConfirmPage.activateShippingProtectionIfNeeded();
    CheckoutConfirmPage.verifyShippingProtectionActive();

    // Step 5 - Tax validation
    CheckoutConfirmPage.verifyTaxVisible();

    // Step 6 - Payment method
    CheckoutConfirmPage.verifyPaymentMethod();

    // Step 7 - New card option
    CheckoutConfirmPage.selectNewCardIfAvailable();

    // Screenshot
    cy.screenshot(`TC-02-new-card-form-${Date.now()}`, {
      capture: "fullPage",
    });

    // Log
    cy.log(
      JSON.stringify({
        testCase: "TC-02",
        testDate,
        paymentMethod: "Curbstone Credit Card",
        paymentType: "New Card",
        shippingInsurance: "Activated",
        vertexTax: "Displayed",
        productSource: "Shared Wishlist Link",
        status: "READY_FOR_CARD_DETAILS_STEP",
      }),
    );
  });
});
