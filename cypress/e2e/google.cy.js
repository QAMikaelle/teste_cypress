describe('Teste de um site simples', () => {
    it('Acessa a página e verifica um elemento', () => {
        cy.visit('https://example.cypress.io'); // Acessa o site de exemplo do Cypress
        cy.get('h1').should('contain', 'Kitchen Sink'); // Verifica se o título contém 'Kitchen Sink'
        cy.get('h1').should('be.visible'); // Verifica se o título está visível
        cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(1) > a').click(); // Clica no link "Querying" na página inicial
        cy.get('#query-btn').click(); // Clica no botão de consulta
        cy.get('#inputName').type("mikaelle"); // Digita 'Cypress' no campo de entrada
        cy.get('#inputEmail').type("qualidade@lectortec.com.br")
        cy.get('#inputPassword').type("123"); // Digita 'Cypress' no campo de entrada
        cy.get('[data-cy="submit"]').click(); // Clica no botão de envio
    });
});
