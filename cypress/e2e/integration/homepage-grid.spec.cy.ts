describe('homepage', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.request({method: 'GET', url: 'https://application-dxrojpab4a-wl.a.run.app/api/v1/songs'}).as('songs');
    });
  
    it('should verify get songs api is successful', () => {
        cy.get('@songs').its('status').should('eq',200);
    });

    it('should verify api results count matches with UI', () => {
        cy.get('@songs').then((response) => {
            const res = (response as any).body;
            cy.get('.p-paginator-current').should('contain', res.size);
        })
    });

    it('should verify api results matches with UI', () => {
        cy.get('@songs').then((response) => {
            const res = (response as any).body;
            for (let i = 0; i < 10; i++) {
                cy.get('tbody').should('contain', res.content[i].title);
            }
        })
    });
})