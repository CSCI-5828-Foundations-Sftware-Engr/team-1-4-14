describe('popular songs page', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.get('[data-cy="popular-songs"]').click();
    });
  
    it('contains appropriate title', () => {
      cy.contains("Top 50 Songs of the Day");
    });
  
    it('contains a grid with 5 pages', () => {
      cy.get('.p-paginator-pages').find('button').should('have.length', 5);
    });

      
    it('works as expected when navigating through pages', () => {
        const pages = [1,2,3,4,5];
        pages.forEach(page => {
            cy.get('.p-paginator-pages').contains(page).click();
            cy.get('.p-paginator-current').should('contain',(page*10)-9).and('contain', page*10);
        });
    });
})