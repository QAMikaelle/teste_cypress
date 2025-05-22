/// <reference types="cypress" />

describe("Teste - Login", () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        // Acesse a URL e clique no botão de idioma
        cy.visit("https://www.hml.lector.live/testesautomatizados/subscribe/login");

        // Clica no botão de idioma
        cy.get('.language-selection2 > :nth-child(1) > .btn').click();

        // Realize o login
        cy.get('#E-mail ou nome').should('not.be.hidden').click();
        cy.get('#viewable-password').type("123");
        cy.get('#btn-entrar').click();
    });

    it('Adicionando um documento', () => {

        //Adicionar documento
        cy.get('[title="Documentos"]').click();
        cy.get('.relative > .btn-icon').click();
        cy.get('[ng-click="modal.uploadFiles = true;"]').click();


        //Botão de cancelar
        cy.get('[switch="modal.uploadFiles"] > .modal > :nth-child(2) > .end > .flex > .btn-swipe-lgray').click();
        cy.wait(1000);

    });

    it("Criando um treinamento", () => {

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

    });

    it.only("Criando uma trilha", () => {

        //Criar trilha
        cy.wait(3000);
        cy.get('[title="Trilhas"]').click();
        cy.get('.title-bar > .btn-icon').click(); //botão de criar trilha

        // Edita os campos           
        cy.wait(1000);
        cy.get('#i-pt_BR_918').type("Teste trilha"); //nome da trilha
        cy.get('.content-box-footer > .flex > .btn-swipe-accent').click(); //botão de salvar
        cy.get('.pt-20 > .flex > .btn-swipe-accent').click(); // nova etapa
        cy.get('[colspan="6"] > .btn-swipe-accent').click(); // novo conteúdo
        //cy.get('[model="currentContent.course"] > .multiselect > .border > .ui-select-search').type('teste treinamento'); //campo de busca
        cy.get('.input-number > div > .icon-pointer-up').click(); //peso 1
        



    });


});