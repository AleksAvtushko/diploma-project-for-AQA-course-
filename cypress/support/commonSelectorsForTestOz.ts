Cypress.Commands.add("SearchFilter", (text: string) => {
    cy.get("[id=top-s]").type(`${text} {enter}`);
});
