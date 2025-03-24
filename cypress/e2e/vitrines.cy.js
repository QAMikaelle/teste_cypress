/// <reference types="cypress" />

describe("Vitrines - Criar Nova Categoria", () => {
    beforeEach(() => {

        

        cy.visit("https://www.hml.lector.live/testesautomatizados/subscribe/login");
        // Seleção de idioma da tela inicial
        cy.get('body').then(($body) => {
            if ($body.find('.btn.round.main.icon-pointer-right').length > 0) {
              cy.get('.btn.round.main.icon-pointer-right').click();
            } else {
              cy.log('O botão não está presente na página.');
            }
          });

        // Login
        cy.get('#login_username').type(Cypress.env('USERNAME'));
        cy.get('#login_password').type(Cypress.env('PASSWORD'));
        cy.get('#btn-entrar').click();
    });

    it("Deve criar uma nova categoria com sucesso", () => {
        cy.contains("Adicionar Categoria").click(); // Botão para adicionar categoria
        cy.get("#category_name").type("Nova Categoria Teste"); // Campo de nome da categoria
        cy.contains("Salvar").click(); // Botão de salvar

        // Verificar se a categoria foi criada com sucesso
        cy.contains("Nova Categoria Teste").should("be.visible");
    });
});
