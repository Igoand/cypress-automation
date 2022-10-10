/// <reference types="Cypress" />

describe("Test Contsct Us form via WebdriverUni", () => {
  it("Should be able to submit a successful submission via contact us form", () => {
    // cypress code
    cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type("Igor");
    cy.get('[name="last_name"]').type("Adam");
    cy.get('[name="email"]').type("email@test.com");
    cy.get("textarea.feedback-input").type(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed interdum orci. Etiam ac ultricies tortor, viverra sollicitudin sapien. Morbi placerat nec ante id efficitur. Etiam in pellentesque metus. Etiam sed molestie ex."
    );
    cy.get('[type="submit"]').click();
  });

  it("Should not be able to submit a successful submission via contact us form", () => {
    // cypress code
    cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type("Igor");
    cy.get('[name="last_name"]').type("Adam");
    // cy.get('[name="email"]').type("email@test.com");
    cy.get("textarea.feedback-input").type(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed interdum orci. Etiam ac ultricies tortor, viverra sollicitudin sapien. Morbi placerat nec ante id efficitur. Etiam in pellentesque metus. Etiam sed molestie ex."
    );
    cy.get('[type="submit"]').click();
  });
});