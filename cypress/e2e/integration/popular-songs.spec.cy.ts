describe('popular songs', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.get('[data-cy="popular-songs"]').click();
      cy.request({method: 'GET', url: 'https://application-dxrojpab4a-wl.a.run.app/api/v1/spotify/songs'}).as('popularSongs');
    });
  
    it('should verify get songs api is successful', () => {
        cy.get('@popularSongs').its('status').should('eq',200);
    });

    it('should verify api results count matches with UI', () => {
        cy.get('@popularSongs').then((response) => {
            const res = (response as any).body;
            cy.get('.p-paginator-current').should('contain', res.length);
        })
    });

    it('should verify api results matches with UI', () => {
        cy.get('@popularSongs').then((response) => {
            const res = (response as any).body;
            for (let i = 0; i < 10; i++) {
                cy.get('tbody').should('contain', res[i].trackname);
            }
        })
    });
})