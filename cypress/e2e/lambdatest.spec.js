import HomePage from "../support/pages/HomePage";
import CategoryPage from "../support/pages/CategoryPage";
import ProductPage from "../support/pages/productPage";
import CheckoutPage from "../support/pages/checkoutPage";

describe("Test Checkout functionality", () => {
 
  const homePage = new HomePage();
  const categoryPage = new CategoryPage();
  const productPage = new ProductPage();
  const checkoutPage = new CheckoutPage();


  beforeEach(() => {
    cy.viewport(1920, 1080);
  });

  it("Test Checkout functionality", function () {

    homePage.visit();

    
    homePage.clickShopByCategory();

   
    homePage.clickMP3Player();

  
    categoryPage.selectFirstProduct();

    
    productPage.checkoutAction();

   
    checkoutPage.fillInDetails();

   
    checkoutPage.uncheckNewsletter();

    
    checkoutPage.acceptTerms();

   
    checkoutPage.submitOrder();

    checkoutPage.verifyOrderConfirmation();
  });
});
