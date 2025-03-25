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
        cy.get('[ui-sref="accessLink.content.showcases"]').click();


        // Clique para criar nova categoria e editar
        cy.get('button[title="Nova vitrine"]').click({ force: true });
        cy.get('#i-pt_BR_943').type('Teste da Vitrine');
        cy.get('.open-content > .end > .btn-swipe-accent').click();

        // Valida se a nova categoria foi criada
        
    });
});