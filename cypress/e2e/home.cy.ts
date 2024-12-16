describe('Home Page', () => {
  it('should display repositories', () => {
    cy.visit('/');
    cy.get('[data-testid="repository-card"]').should('exist');
    cy.contains('My GitHub Projects').should('be.visible');
  });
}); 