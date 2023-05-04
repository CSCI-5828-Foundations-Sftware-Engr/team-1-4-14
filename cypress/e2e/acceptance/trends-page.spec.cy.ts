describe('trends page', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.intercept('https://application-dxrojpab4a-wl.a.run.app/api/v1/popular/artists').as('popularArtists')
      cy.get('[data-cy="trends-button"]').click();
      cy.wait('@popularArtists');
    });
  
    it('contains two charts', () => {
      cy.get('.graph-container').find('p-chart').should('have.length', 2);
    });
})