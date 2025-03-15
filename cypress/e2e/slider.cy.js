describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

const cities = ["Rome", "London", "Paris"];
const countries = ["Italy", "United Kingdom", "France"];
describe('Swipe Gallery Test', function () {
  it('Checks if every\'s slide descprition is correct', function () {
    cy.visit('http://localhost:3000');
    for (let i = 0; i < cities.length; i++) {
      cy.get('.swiper-slide-active').should('contain', cities[i]);
      cy.get('.swiper-slide-active').should('contain', countries[i]);
      cy.get('.swiper-button-next').click();
      cy.wait(2000);  
    }
  })
});