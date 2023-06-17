export const pageElements = {

   // tela de login

 
   btnAddMain: '#app > :nth-child(2)',

   columnName1: 'td:nth-child(1)',

   columnTel1: 'td:nth-child(2)',

   columnName2: 'tr:nth-child(3) > td:nth-child(1)',

   columnTel2: 'tr:nth-child(3) > td:nth-child(1)',

   btnDel: 'tr:nth-child(2) > td:nth-child(3)',

   fieldName: '//div[contains(concat(" ", @class, " "), "form-group")]/label[contains(concat(" ", @class, " "), "control-label")][text()="Nome"]/../descendant::input[contains(concat(" ", @class, " "), "form-control")]',

   msgName: '//*[@id="app"]/div[1]/div/div/div[2]/div[2]/div',
   
   fieldTel: '//div[contains(concat(" ", @class, " "), "form-group")]/label[contains(concat(" ", @class, " "), "control-label")][text()="Telefone"]/../descendant::input[contains(concat(" ", @class, " "), "form-control")]',

   msgTel: '//*[@id="app"]/div[1]/div/div/div[2]/div[3]/div',
   
   btnAdd: 'button.btn-primary',

   btnCancel: 'div.in > div[role="document"].modal-dialog > div.modal-content > div.modal-footer > button[type="button"].btn-success',
   
   msgExist: '//span[text()="Pessoa já existe."]'

}






