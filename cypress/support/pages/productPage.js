class ProductPage {
  
    addToCartButton = '#entry_216842';
    cartIcon = '#entry_217825';
    checkoutBtn = '#entry_217851'
  
    
    checkoutAction() {
      cy.get(this.addToCartButton).click();
      cy.get(this.cartIcon).click();
      cy.get(this.checkoutBtn).click();
    }
  }
  
  export default ProductPage;
  