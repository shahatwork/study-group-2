describe("Work & Co headline test", () => {
  it("loads w&c site and checks headline", () => {
    cy.visit("https://work.co");
    cy.get('[data-test-id="header-title-text"]').contains(
      "We solve complex problems through design & technology"
    );
  });
});
