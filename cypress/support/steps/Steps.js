/* global Given, Then, When */
import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'
import MainPage from '../actions/Actions'

const mainPage = new MainPage


Then("acesso o site {}", (url) => {
    mainPage.openPage(url);
})

Then("clico no botão Adicionar na tela principal", () => {
    mainPage.clickAddMain();
})

Then("preencho o campo Nome {}", (nome) => {
    mainPage.inputName(nome)
})

Then("preencho o campo Telefone {}", (tel) => {
    mainPage.inputTel(tel)
})

Then("clico Adicionar na tela de preenchimento", () => {
    mainPage.clickAddWindow()
})

Then("vejo no grid o nome {} cadastrado", (nome) => {
    mainPage.checkName1(nome)
})

Then("vejo no grid, o telefone {} cadastrado", (tel) => {
    mainPage.checkTel1(tel)
})

Then("clico no botão Apagar", () => {
    mainPage.clickDel()
})

Then("vejo a primeira coluna vazia", () => {
    mainPage.checkEmptyColumn()
})


Then("vejo a segunda coluna vazia", () => {
    mainPage.checkEmptyColumn2()
})

Then("vejo a mensagem Pessoa já existe", () => {
    mainPage.checkUserExistMsg()
})