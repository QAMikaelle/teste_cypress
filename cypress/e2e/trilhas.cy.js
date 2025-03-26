/// <reference types="cypress" />

describe("Botão - nova trilha", () => {
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
    it("Criar trilha", () => {

        //Adicionar documento
        cy.get('[title="Documentos"]').click();
        cy.get('.relative > .btn-icon').click();
        cy.get('[ng-click="modal.uploadFiles = true;"]').click();
        
        //cy.get('ng-transclude > .btn-swipe-accent').selectFile("Teste.pdf");
        
        //Botão de cancelar
        cy.get('[switch="modal.uploadFiles"] > .modal > :nth-child(2) > .end > .flex > .btn-swipe-lgray').click();
        

        //Criar treinamento
        cy.get('[title="Treinamentos"]').click();
        cy.get('.title-bar > .btn-icon').click();
        cy.get('#courseName').type("Teste treinamento"); 
        

        //Criar trilha
        /*cy.wait(3000);
        cy.get('[title="Trilhas"]').click();
        
        // Espera um pouco após clicar em Trilhas
        cy.wait(1000);
        
        // Usa first() para garantir que apenas um botão seja clicado
        cy.get('.title-bar').click();

        // Edita os campos           
        cy.wait(1000);
        cy.get('[name=""]').type("Teste trilha");*/

    });
});