export const viewSong = () => {
    cy.get('@songs').then((response) => {
        const res = (response as any).body;
        cy.get('tbody').contains(res.content[0].title).click();
    });
};