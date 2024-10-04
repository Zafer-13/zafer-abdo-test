describe("Home page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/")
    })
    it('should render the home page with greeting', () => {
        cy.get('h1').should('contain.text', 'Hello');
    });

    it('should have correct links with translations', () => {
        cy.get('a[href="/post/1"]').should('contain.text', 'Post'); // Assuming t("title1") translates to 'Post 1'
        cy.get('a[href="/users"]').should('contain.text', 'Users');   // Assuming t("title2") translates to 'Users'
        cy.get('a[href="/posts"]').should('contain.text', 'Posts');   // Assuming t("title3") translates to 'Posts'
    });
})