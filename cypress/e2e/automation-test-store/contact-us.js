/// <reference types="Cypress" />

describe("Test Contsct Us form via Automation Test Store", () => {
  it("Should be able to submit a successful submission via contact us form", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".info_links_footer > :nth-child(5) > a").click();
    cy.get('#ContactUsFrm_first_name').type("Joe")
    cy.get('#ContactUsFrm_email').type("joe.gonzales@test.com")
    cy.get('#ContactUsFrm_enquiry').type("Lorem ipsum, trala lala!!!")
    cy.get('.col-md-6 > .btn').click()
  });
});
 