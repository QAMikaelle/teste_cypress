/// <reference types="cypress" />

describe("Vitrines - Criar Nova Categoria", () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
        // Acesse a URL e clique no botão de idioma
        cy.visit("https://www.hml.lector.live/testesautomatizados/subscribe/login");
        
        // Clica no botão de idioma
        cy.get('.language-selection2 > :nth-child(1) > .btn').click();
        
        // Realize o login
        cy.get('#login_username').type("qualidade@lectortec.com.br");
        cy.get('#login_password').type("123");
        cy.get('#btn-entrar').click();
    });

    it("Deve criar uma nova categoria com sucesso", () => {
        cy.wait(3000);
        cy.contains('Vitrines').click();
        
        // Espera um pouco após clicar em Vitrines
        cy.wait(1000);
        
        // Usa first() para garantir que apenas um botão seja clicado
        cy.get(':nth-child(14) > [data-layer="Padding"]', { timeout: 10000 }).click();
    });
});
