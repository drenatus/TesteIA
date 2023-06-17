import {pageElements} from '../elements/Elements'
import 'cypress-iframe'
require('@cypress/xpath')


class mainPage {
  
    openPage(url) {
        cy.iframevisit(url, { timeout: 180000 })
        cy.viewport(1600, 900)
        cy.wait(2000)
    }


    clickAddMain() {
        cy.get(pageElements.btnAddMain).should('be.visible') 
        .click({ force : true});
    }

    inputName(name) {
        cy.xpath(pageElements.fieldName).should('be.visible') 
        .type(name)
    }

    inputTel(tel) {
        cy.xpath(pageElements.fieldTel).should('be.visible') 
        .type(tel)
    }

    clickAddWindow() {
        cy.get(pageElements.btnAdd)
        .click()
    }

    checkName1(name) {
        cy.get(pageElements.columnName1).should('be.visible')
        .should('contain',name)
    }

    checkTel1(tel) {
        cy.get(pageElements.columnTel1).should('be.visible')
        .should('contain',tel)
    }

    checkName2(name2) {
        cy.get(pageElements.columnName2).should('be.visible')
        .should('contain',name2)
    }

    checkTel2(tel2) {
        cy.get(pageElements.columnTel2).should('be.visible')
        .should('contain',tel2)
    }

    clickDel() {
        cy.get(pageElements.btnDel)
        .click()
    }

    checkEmptyColumn() {
        cy.get(pageElements.columnName1).should('not.exist')
    }

    checkEmptyColumn2() {
        cy.get(pageElements.columnName2).should('not.exist')
    }

    checkUserExistMsg() {
        cy.xpath(pageElements.msgExist).should('be.visible')
        .should('contain', 'Pessoa já existe.')
    }
 

}



export default mainPage;


// Cypress.on('uncaught:exception', (err, runnable) => {
//     console.log(err);
//     return false;
//   })



//   Cypress.on('uncaught:exception', (err, runnable) => {
//     debugger
// })