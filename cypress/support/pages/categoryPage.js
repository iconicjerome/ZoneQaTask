//Product category page
class CategoryPage {
   
    firstProduct = '.product-thumb:first';

    selectFirstProduct() {
      cy.get(this.firstProduct).click();
    }
  }
  
  export default CategoryPage;
  