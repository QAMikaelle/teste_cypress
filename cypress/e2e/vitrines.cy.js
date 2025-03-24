/// <reference types="cypress" />

describe("Vitrines - Criar Nova Categoria", () => {
    beforeEach(() => {
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
        // Clique para adicionar nova categoria
        cy.get('[title="Vitrines"] > .sideitem').click();

        cy.contains("Adicionar Categoria", { timeout: 10000 }).should('be.visible').click();
        cy.get("#category_name").type("Nova Categoria Teste"); // Preenche o nome da categoria
        cy.contains("Salvar").click(); // Salva a categoria

        // Valida se a nova categoria foi criada
        cy.contains("Nova Categoria Teste", { timeout: 10000 }).should("be.visible");
    });
});