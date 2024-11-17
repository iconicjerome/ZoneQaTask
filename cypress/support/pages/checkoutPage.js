class CheckoutPage {
    //These variables are for the registration
    //page form
    firstnameInput = '#input-payment-firstname';
    lastnameInput = '#input-payment-lastname';
    emailInput = '#input-payment-email';
    telephoneInput = '#input-payment-telephone';
    passwordInput = '#input-payment-password';
    confirmPasswordInput = '#input-payment-confirm'
    addressInput = '#input-payment-address-1';
    cityInput = '#input-payment-city';
    postcodeInput = '#input-payment-postcode';
    countrySelect = '#input-payment-country';
    zoneSelect = '#input-payment-zone';
    newsletterCheckbox = '.custom-control-label[for="input-newsletter"]';
    accountAgreeCheckbox = '.custom-control-label[for="input-account-agree"]';
    agreeCheckbox = '.custom-control-label[for="input-agree"]';
    saveButton = '#button-save';
    confirmButton = '#button-confirm';
  
    
    fillInDetails() {
      // dynamicEmail is used to generate unique emails for the registration.
        const dynamicEmail = `john.doe${Date.now()}@example.com`;
      cy.get(this.firstnameInput).type('John');
      cy.get(this.lastnameInput).type('Doe');
      cy.get(this.emailInput).type(dynamicEmail);
      cy.get(this.telephoneInput).type('2347066922657');
      cy.get(this.passwordInput).type('P@ssword123');
      cy.get(this.confirmPasswordInput).type('P@ssword123');
      cy.get(this.addressInput).type('123 Main Street');
      cy.get(this.cityInput).type('New York');
      cy.get(this.postcodeInput).type('10001');
      cy.get(this.countrySelect).select('United States');
      cy.get(this.zoneSelect).select('New York');
    }
  

    uncheckNewsletter() {
      cy.get(this.newsletterCheckbox).click();
    }
  
    
    acceptTerms() {
      cy.get(this.accountAgreeCheckbox).click();
      cy.get(this.agreeCheckbox).click();
    }
  
    
    submitOrder() {
      cy.get(this.saveButton).click();
      cy.get(this.confirmButton).click();
    }
  
    
    verifyOrderConfirmation() {
      cy.contains('Your order has been placed!').should('be.visible');
    }
  }
  
  export default CheckoutPage;
  