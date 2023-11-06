describe('top page', () => {
  it('should show a page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('a[href*="stats"]').click();
    cy.url().should('include', '/stats');
  });
});
