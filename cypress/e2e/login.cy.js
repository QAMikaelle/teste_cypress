/// <reference types="cypress" />

//funcionalidade
describe("login", () => {
      
      //cenarios
      it("E-mail inválido", () => {
        cy.visit('https://www.hml.lector.live/testesautomatizados/subscribe/login');
        cy.get('#login_username').type('kasokaosk');
        cy.get('#login_password').type('123');
        cy.get('#btn-entrar').contains("Entrar").click();
        cy.get('.message').should('have.text', 'Usuário ou senha inválidos'); 
    });

      //cenarios
    it("Senha inválida", () => {
        cy.visit('https://www.hml.lector.live/testesautomatizados/subscribe/login');
        cy.get('#login_username').type('qualidade@lectortec.com.br');
        cy.get('#login_password').type('000');
        cy.get('#btn-entrar').contains("Entrar").click();
        cy.get('.message').should('have.text', 'Usuário ou senha inválidos'); 

    });
    
      //cenarios
    it("login com sucesso", () => {
      //DADO
      // abrir a aplicação
        cy.visit("https://www.hml.lector.live/testesautomatizados/subscribe/login");

      //preenche e-mail e senha
        cy.get('#login_username').type("qualidade@lectortec.com.br");
        cy.get('#login_password').type("123");

      //clica em entrar
        cy.get('#btn-entrar').contains("Entrar").click();

    //ENTAO
    //entra
  });

});
