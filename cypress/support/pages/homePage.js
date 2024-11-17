class HomePage {
   
    shopByCategoryButton = 'Shop by Category'; 
    mp3PlayerCategory = 'MP3 Player'; 
  
   
    visit() {
      cy.visit("https://ecommerce-playground.lambdatest.io/");
    }
  
    clickShopByCategory() {
      cy.contains(this.shopByCategoryButton).click();
    }
  

    clickMP3Player() {
      cy.contains(this.mp3PlayerCategory).click();
    }
  }
  
  export default HomePage;
  