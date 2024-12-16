describe('Navigation', () => {
  it('should display homepage title', () => {
    cy.visit('/');
    cy.contains('Tomislav Matijević').should('be.visible');
    cy.contains('Home').should('have.class', 'bg-gray-100');
  });

  it('should display projects page', () => {
    cy.visit('/projects');
    cy.get('[data-testid="repository-card"]').should('exist');
    cy.contains('My GitHub Projects').should('be.visible');
    cy.contains('Projects').should('have.class', 'bg-gray-100');
  });

  it('should navigate between pages', () => {
    cy.visit('/');
    cy.contains('Projects').click();
    cy.url().should('include', '/projects');
    cy.contains('Home').click();
    cy.url().should('include', '/');
  });
}); 