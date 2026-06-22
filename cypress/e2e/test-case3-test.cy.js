import HomePage from "../pages/HomePage";
import WishListPage from "../pages/WishListPage";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import CheckOutPage from "../pages/CheckOutPage";
import CompletePaymentPage from "../pages/CompletePaymentPage";

Cypress.on("uncaught:exception", () => false);

describe("Test Case 3 - Curbstone Checkout Flow", () => {
  it("Duhet të përfundojë checkout me Saved Card, Vertex, Promo, Insurance dhe Wishlist item", () => {
    HomePage.visit();
    cy.url().should("include", "tst.site");

    HomePage.openAccount();
    HomePage.openLogin();

    LoginPage.fillEmailData();
    LoginPage.continueWithPass();
    LoginPage.fillPasswordData();
    LoginPage.clickLogin();

    DashboardPage.openWishList();
    WishListPage.openProductsFromWishList();

    WishListPage.addProductToCart();
    WishListPage.goToCheckOut();

    CheckOutPage.verifySavedCardSelected();

    CheckOutPage.enterPromoCode();
    CheckOutPage.clickApplyPromoCode();
    CheckOutPage.verifyPromotionApplied();

    CheckOutPage.verifyShippingInsurance();

    CheckOutPage.verifyShippingProtection();

    CheckOutPage.acceptTermsAndConditions();

    CheckOutPage.confirmOrder();

    CompletePaymentPage.completePayment();
  });
});
