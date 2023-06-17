Feature: Teste Agenda

Background:
    Given acesso o site http://localhost:8080/

 
    Scenario Outline: Adicionar Contatos
 
    Given clico no botão Adicionar na tela principal
    And preencho o campo Nome <nome>
    And preencho o campo Telefone <tel>
    And clico Adicionar na tela de preenchimento
    Then vejo no grid o nome <nome> cadastrado
    Then vejo no grid, o telefone <tel> cadastrado

    Examples:

    |nome  |tel        |
    |teste1|11999999999|
    |teste2|21888888888|


   Scenario: Validar impossibilidade de cadastrar contatos repetidos

    Given clico no botão Adicionar na tela principal
    And preencho o campo Nome teste1
    And clico Adicionar na tela de preenchimento
    Then vejo a mensagem Pessoa já existe


    Scenario: Apagar Contato

    Given clico no botão Apagar 
    And vejo no grid o nome teste1 cadastrado
    And vejo no grid, o telefone 11999999999 cadastrado
    And vejo a segunda coluna vazia
    And clico no botão Apagar 
    And vejo a primeira coluna vazia

    # Scenario: Validar Campos Obrigatórios (não implementado, bugs na validação)

    # Given clico no botão Adicionar na tela principal
    # And clico no campo Nome
    # And vejo a mensagem Insira um nome (required)
    # And vejo que o botão Adicionar está desabilitado
    # And preencho o campo Nome testecampo
    # And clico no botão Telefone 
    # And vejo a mensagem Insira o telefone (required)
    # # a mensagem é mostrada, mas o botão não desabilita, e o sistema permite cadastrar sem um telefone
    # And vejo que o botão Adicionar está desabilitado 


    # Scenario: Validar limite de caractéres do campo Nome (não implementado, bugs na validação)

    # Given clico no botão Adicionar na tela principal
    # And preencho o campo Nome A
    # And vejo a mensagem Insira um nome (min. length: 3) 
    # # mensagem é exibida, mas sistema não barra o cadastro
 

    # Scenario: Validar limite de caractéres do campo Telefone (não implementado, bugs na validação)

    # Given clico no botão Adicionar na tela principal
    # And preencho o campo Telefone 987
    # And vejo a mensagem Insira o telefone (min. length: 8) 
    # # mensagem é exibida, mas sistema não barra o cadastro
    # And preencho o campo Telefone 9876543210987654
    # And vejo a mensagem O numero de telefone deve ter no máximo 12 caracteres
    # # não exibe mensagem e nem barra o cadastro


    #Scenario: Validar Busca de contatos (funcionalidade não implementada)