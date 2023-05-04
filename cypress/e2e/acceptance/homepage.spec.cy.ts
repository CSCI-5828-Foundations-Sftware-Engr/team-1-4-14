describe('homepage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('conatains a popular songs button', () => {
    cy.contains("Today's Top 50");
  });

  it('contains a grid with pagination with default 10', () => {
    cy.get('.homepage-grid').find('p-dropdown').contains(10);
  });

  
  it('contains a grid with pagination containing page sizes of 10, 25, 50', () => {
    cy.scrollTo('bottom');
    cy.get('.homepage-grid').find('p-dropdown').click();
    cy.get('.p-dropdown-items').should('contain', 10).and('contain', 25).and('contain', 50);
  });

  it('should redirect to most-popular', () => {
    cy.get('[data-cy="popular-songs"]').click();
    cy.url().should('contain', '/most-popular');
  })
})