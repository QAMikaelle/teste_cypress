/// <reference types="cypress" />

describe("Recording 26/03/2025 at 09:22:18", () => {
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
  
    it("tests Recording 26/03/2025 at 09:22:18", () => {
        cy.get("button.sidenav-route").click();
        cy.get("div:nth-of-type(9) > a").click();
        cy.get("div.lower > div.ng-scope").click();
        cy.get("div.xs-view-controls > button.icon-add").click();
        cy.get("#mainContent div > div:nth-of-type(4) div.modal-body button").click();
        cy.get("body > label:nth-of-type(2) > input").type("C:\\fakepath\\f8cbace2-1a99-48d1-b3eb-4f48153d1cd8_Testes_de_plataformas.pdf");
        cy.get("button.sidenav-route").click();
        cy.get("div:nth-of-type(6) > a").click();
        cy.get("div.lower > div.ng-scope").click();
        cy.get("div.xs-view-controls > button.icon-add").click();
        cy.get("#i-pt_BR_1216").click();
        cy.get("#i-pt_BR_1216").type("teste treinamento");
        cy.get("#mainContent div.tabs a:nth-of-type(3)").click();
        cy.get("form > div.ng-scope div.flex > button").click();
        cy.get("#mainContent div:nth-of-type(1) > div.w-100").click();
        cy.get("ui-select-overlay div:nth-of-type(2)").click();
        cy.get("#mainContent div.ng-isolate-scope > div > div > div > span").click();
        cy.get("ui-select-overlay.open input[type='search']").type("test");
        cy.get("#ui-select-choices-row-40-1 > span > span").click();
        cy.get("div.weight").click();
        cy.get("ui-select-overlay.open div:nth-of-type(2)").click();
        cy.get("div.editing-resource button.btn-swipe-accent").click();
        cy.get("div.lower form div.flex span").click();
        cy.get("#mainContent div:nth-of-type(7) span").click();
        cy.get("div.lower div:nth-of-type(7) button.ml-10").click();
        cy.get("button.sidenav-route").click();
        cy.get("div:nth-of-type(5) > a").click();
        cy.get("div.lower > div.ng-scope").click();
        cy.get("div.xs-view-controls > button.icon-add").click();
        cy.get("#i-pt_BR_1563").click();
        cy.get("#i-pt_BR_1563").type("teste trilha");
        cy.get("div.edit-trail-general > div:nth-of-type(4) input").click();
        cy.get("div.edit-trail-general > div:nth-of-type(4) input").type("10");
        cy.get("#mainContent div.tabs > a:nth-of-type(2)").click();
        cy.get("div.pt-20 button.btn-swipe-accent").click();
        cy.get("div:nth-of-type(4) td:nth-of-type(2) > button").click();
        cy.get("div.pt-20 div > div:nth-of-type(1) > div > div > div > span").click();
        cy.get("ui-select-overlay input[type='search']").type("tes");
        cy.get("#ui-select-choices-row-46-0 > span > span").click();
        cy.get("div.lower form div.flex span").click();
        cy.get("div.pt-20 div > div:nth-of-type(1) > div > div > div > span").click();
        cy.get("ui-select-overlay input[type='search']").type("tes");
        cy.get("#ui-select-choices-row-50-0 > span > span").click();
        cy.get("div.lower form div.flex span").click();
        cy.get("tr.lector-bg-lighter button.icon-pointer-up").click();
        cy.get("#mainContent td.ng-scope input").click();
        cy.get("tr.lector-bg-lighter > td.pv-5 > div").click();
        cy.get("ui-select-overlay.open div:nth-of-type(3) > div").click();
        cy.get("#mainContent div:nth-of-type(3) > div > div > div > span").click();
        cy.get("ui-select-overlay.open input[type='search']").type("tes");
        cy.get("#ui-select-choices-row-52-1 > span > span").click();
        cy.get("div.lower form div.flex span").click();
        cy.get("tr.lector-bg-lighter button.btn-swipe-accent").click();
        cy.get("div.content-box-footer > div.flex > button.btn-swipe-accent").click();
        cy.get("#mainContent > div > div > div > div > div > div > div:nth-of-type(2) span").click();
        cy.get("#mainContent > div > div > div > div > div > div > div:nth-of-type(2) button.ml-10").click();
        cy.get("button.sidenav-route").click();
        cy.get("div:nth-of-type(4) div:nth-of-type(4) > a").click();
        cy.get("div.lower > div.ng-scope").click();
        cy.get("div.xs-view-controls > button.icon-add").click();
        cy.get("#i-pt_BR_2133").click();
        cy.get("#i-pt_BR_2133").type("teste vitrine");
        cy.get("div.showcase-theme-grid div.ui-select-container").click();
        cy.get("ui-select-overlay div:nth-of-type(2)").click();
        cy.get("div.flex > div:nth-of-type(2) > div:nth-of-type(2) input").click();
        cy.get("#ui-select-choices-row-53-0 > span > span").click();
        cy.get("#mainContent div.end > button.btn-swipe-accent").click();
        cy.get("lector-toast i").click();
        cy.get("div.start button").click();
        cy.get("#new-showcase-item-options > div:nth-of-type(1)").click();
        cy.get("div:nth-of-type(4) > div:nth-of-type(1) button:nth-of-type(3) > div").click();
        cy.get("#mainContent b").click();
        cy.get("#mainContent div.between input").type("C:\\fakepath\\29338.png");
        cy.get("ui-view > div:nth-of-type(3) button.btn-swipe-accent").click();
        cy.get("div > div > div > div > div > div.ng-scope div.modal-overlay button.btn-swipe-accent").click();
        cy.get("#mainContent label:nth-of-type(2) > i").click();
        cy.get("div > div > div > div > div > div.ng-scope div.modal-overlay button.btn-swipe-accent").click();
        cy.get("div.start button").click();
        cy.get("div.start div:nth-of-type(2)").click();
        cy.get("#mainContent div.mt-20 > div:nth-of-type(1) i").click();
        cy.get("#mainContent div.mt-20 > div:nth-of-type(1) i").click();
        cy.get("#mainContent td:nth-of-type(1) > div:nth-of-type(1)").click();
        cy.get("ui-select-overlay.open div:nth-of-type(2)").click();
        cy.get("#mainContent table div > div > div > div > div > span").click();
        cy.get("#mainContent div.modal-overlay input[type='search']").type("test");
        cy.get("#ui-select-choices-row-56-0 > span > span").click();
        cy.get("#mainContent table button").click();
        cy.get("td:nth-of-type(1) > div.ng-touched > span").click();
        cy.get("ui-select-overlay.open > div > div:nth-of-type(1)").click();
        cy.get("#mainContent table div > div > div > div > div > span").click();
        cy.get("#mainContent div.modal-overlay input[type='search']").type("tes");
        cy.get("#ui-select-choices-row-57-0 > span > span").click();
        cy.get("#mainContent thead button").click();
        cy.get("form > div.ng-scope div.end > button:nth-of-type(1)").click();
        cy.get("div.showcase-items-preview > div:nth-of-type(2) div:nth-of-type(1) > button").click();
        cy.get("#mainContent div.middle > button").click();
        cy.get("div > div:nth-of-type(4) div.column > div:nth-of-type(1) > div:nth-of-type(4) > div").click();
        cy.get("form > div.ng-scope div.end > button:nth-of-type(1)").click();
        cy.get("#mainContent > div > div > div > div > div > div.ng-scope button.btn-swipe-accent span").click();
        cy.get("div.lower > div.ng-scope div:nth-of-type(2) > a").click();
        cy.get("div.lector-txt-accent").click();
        cy.get("#mainContent > div > div > div > div > div > div > div.ng-scope").click();
    });
});