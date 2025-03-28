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
    it("Criando um teste", () => {     

        //Criar treinamento
        cy.get('[title="Treinamentos"]').click();
        cy.get('.title-bar > .btn-icon').click();
        //Editar dados
        cy.get('#courseName').type("Teste treinamento"); 

        //Adicionar conteúdos
        cy.get('[ui-sref="accessLink.content.courses.edit.id.contents"]').click(); // sessão conteúdos
        cy.get('ui-view.ng-scope > .flex > .btn-swipe-accent').click(); //novo conteúdo
        cy.get('.editing-resource > :nth-child(2) > .w-100').click(); //tipo
        cy.get('.open > .ui-select-choices > :nth-child(2)').click(); //selecionar documentos
        cy.get('.weight').type("1"); // selecionar peso
        cy.get('.open > .ui-select-choices > :nth-child(2)').click(); //selecionar peso 1

        // Clique no campo de busca para ativá-lo
        cy.get('[ng-if="editingResource.type == \'DOCUMENT\' || editingResource.type == \'H5P_DOCUMENT\'"] > .ng-isolate-scope > .multiselect > .border > .ui-select-match > .btn-default').click();

        // Digite o nome do documento no campo de busca
        cy.get('[ng-if="editingResource.type == \'DOCUMENT\' || editingResource.type == \'H5P_DOCUMENT\'"] > .ng-isolate-scope > .multiselect > .border > .ui-select-match > .btn-default').type('Testes_de_plataformas');
        //cy.get('').click(); //selecionar documento 
        //cy.get('').click(); //selecionar documento
        //cy.get('').click(); //salvar
        cy.get('[ng-show="modal.useVersioning"] > .modal > :nth-child(3) > .checkbox > .icon-checkbox').click(); //selecionar versionamento
        cy.get('[ng-show="modal.useVersioning"] > .modal > .end > .ml-10').click(); //salvar versionamento
        cy.wait(1000);


        //Adicionar documento
        cy.get('[title="Documentos"]').click();
        cy.get('.relative > .btn-icon').click();
        cy.get('[ng-click="modal.uploadFiles = true;"]').click();
                

        //Botão de cancelar
        cy.get('[switch="modal.uploadFiles"] > .modal > :nth-child(2) > .end > .flex > .btn-swipe-lgray').click();

    it('should select the document', () => {
            
    })





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