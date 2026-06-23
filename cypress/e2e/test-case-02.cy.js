import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import WishListPage from "../pages/Test-2/WishListPage";
import DashboardPage from "../pages/DashboardPage";
import ShopAllPage from "../pages/Test-2/ShopAllPage";
import ProductPage from "../pages/Test-2/ProductPage";
import CreateCustomerPage from "../pages/Test-2/CreateCustomerPage";
import CheckoutPage from "../pages/Test-2/CheckoutPage";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
}); //Kjo a vendos se kaniher ui o tu bo crash e mos me deshtu testi prej tyne e kom shtu
describe("Shopware Checkout Regression Tests", () => {
  it("TC-02 - Curbstone new customer with new card checkout", () => {
    //E marrum HomePagen

    HomePage.visit();

    //Klikojna me u kyq n acc ton
    HomePage.openAccount();

    //E zgjedhum opsionin mu kyq
    HomePage.openLogin();

    //te login page e shenojna emailin
    LoginPage.fillEmailData();

    //e klikojna butonin me vazhdu me pasin:

    LoginPage.continueWithPass();

    //E shkrujna pasin:

    LoginPage.fillPasswordData();

    //e shtypun kyqu:

    LoginPage.clickLogin();

    //Te dashboardi e klikojna me navigu te wishlista:

    DashboardPage.openWishList();

    //Klikojna butonin me kriju Wishlist te re:

    WishListPage.clickCreateWishListButton();

    //E vendosum ni emer per Wishlisten:

    WishListPage.fillWishListName();

    //E bojm Publike:

    WishListPage.makeWishListPublic();

    //E shtojna:

    WishListPage.clickAddButton();

    //Shkojm te ShopAll qe me gjet ni produkt per me shtu ne wishlist:

    WishListPage.goToShopAll();

    //E zgjedhum Ammution:

    ShopAllPage.clickAmmunitionCategory();

    //Shtojna produktin ne Wishlist:

    ShopAllPage.addProductToWishList();

    //Zgjedhim Wishlisten:

    WishListPage.addProductToWishList();

    //Kthehum te dashboard:

    DashboardPage.returnToDashboard();

    //Te dashboardi e klikojna me navigu te wishlista:

    DashboardPage.openWishList();

    WishListPage.selectWishList();

    WishListPage.makePublicWislist();

    WishListPage.copyPublicPath();

    WishListPage.visitSharedLinkAsNewCustomer();

    ProductPage.addProductToCart();

    ProductPage.goToCheckOut();

    CreateCustomerPage.toggleShippingProtection();

    CreateCustomerPage.selectGuestAccount();

    cy.wait(2000);
    CreateCustomerPage.fillPersonalDetails(
      "Shpresim",
      "Tester",
      "krasniqis092@gmail.com",
      "Shpresimi1Testim@@",
    );

    CreateCustomerPage.fillUSAddress(
      "1600 Amphitheatre Pkwy",
      "Mountain View",
      "94043",
    );
    cy.wait(2000);

    CreateCustomerPage.fillRandomUSAPhone();
    CreateCustomerPage.acceptDataProtection();

    CreateCustomerPage.clickContinue();

    cy.wait(2000);

    CheckoutPage.toggleShippingProtection();

    cy.wait(2000);

    CheckoutPage.applyPromoCode();

    CheckoutPage.clickAddPromo();

    CheckoutPage.selectShippingMethod();

    CheckoutPage.selectPaymentMethod();

    cy.wait(3000);
    CheckoutPage.fillCreditCardDetails(
      "5454545454545454", // Numri i kartës
      "3", // Muaji (Ndryshoje në "03" nëse dështon)
      "2028", // Viti (Ndryshoje në "28" ose formatin që kërkon select-i)
      "123", // CVV
    );

    CheckoutPage.agreeToTermsAndConditions();
    CheckoutPage.checkNewsLetters();

    CheckoutPage.enterPayButton();
  });
});
