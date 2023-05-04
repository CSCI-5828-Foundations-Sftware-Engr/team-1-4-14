import { viewSong } from "cypress/support/view-record";

describe('homepage', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.request({method: 'GET', url: 'https://application-dxrojpab4a-wl.a.run.app/api/v1/songs?size=5000'}).as('songs');
    });
  
    it('should verify redirection to info page', () => {
        cy.get('@songs').then((response) => {
            const res = (response as any).body;
            cy.get('tbody').contains(res.content[0].title).click();
            cy.url().should('contain', '/song/' + res.content[0].trackId);
        })
    });

    it('should verify tabs in info page', () => {
        viewSong();
        cy.contains('Listen');
        cy.contains('Album');
        cy.contains('More Like This');
        cy.contains('Trends');
    });

    it('should verify api results matches with UI', () => {
        cy.get('@songs').then((response) => {
            const res = (response as any).body;
            cy.get('tbody').contains(res.content[0].title).click();
            cy.url().should('contain', '/song/' + res.content[0].trackId);
            cy.request({method: 'GET', url: 'https://application-dxrojpab4a-wl.a.run.app/api/v1/songs/' + res.content[0].trackId}).as('songInfo');
            cy.get('@songInfo').then(result => {
                const data = (result as any).body;
                cy.contains(data.spotifyData.trackName);
            });
        })
    });

    it('should load similar songs as expected', () => {
        cy.get('@songs').then((response) => {
            const res = (response as any).body;
            cy.get('tbody').contains(res.content[0].title).click();
            cy.url().should('contain', '/song/' + res.content[0].trackId);
            cy.request({method: 'GET', url: 'https://application-dxrojpab4a-wl.a.run.app/api/v1/songs/' + res.content[0].trackId}).as('songInfo');
            cy.get('@songInfo').then(result => {
                const data = (result as any).body;
                cy.get('p-tabview').contains('More Like This').click();
                for (let i = 0; i < 5; i++) {
                    cy.get('tbody').should('contain', data.songsByArtist[i].title);
                }
            });
        })
    });
})