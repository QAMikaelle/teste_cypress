/// <reference types="cypress" />

//funcionalidade
describe("Treinamentos", () => {

    it("login com sucesso", () => {
        //DADO
        // abrir a aplicação
            cy.visit("https://www.hml.lector.live/universolector/showcase/340");
            cy.contains('button', 'Entrar').click();
            cy.get('[style="z-index: 26;"] > :nth-child(1) > :nth-child(1) > .popup > :nth-child(1) > .ng-pristine').type("qualidade@lectortec.com.br");
            cy.get('#login_password_navbar').type("123");
            cy.get('.popup').contains('button', 'Entrar').click();
        });

    it("Criar Treinamento", () => {
        //Acesso a página de Treinamentos

       });


});