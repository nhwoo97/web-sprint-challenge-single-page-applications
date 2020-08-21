describe("Input and add user button", () => {
  it("Navigate to the site ", () => {
    cy.visit("http://localhost:3000/pizza");
    cy.url().should("include", "localhost");
  });
  it("Name Input ", () => {
    cy.get('input[name="username"]').type("Nam").should("have.value", "Nam");
  });
  it("Address Input", () => {
    cy.get('input[name="address"]')
      .type("nams filthy apartment")
      .should("have.value", "nams filthy apartment");
  });
  it("Size choose", () => {
    cy.get('select[name="size"]');
    cy.get("select").select("small")
    .should("have.value", "small");
  });
  it("check that checkbox", () => {
    cy.get('[type="checkbox"]').check().should("have.value", "on");
  });
  it("the submit button is not disabled any more", () => {
    cy.get("#submitBtn").should("not.be.disabled");
  });
});
