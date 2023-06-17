Teste prático 

Requisitos:

VS Code instalado  https://code.visualstudio.com/
NodeJs instalado   https://nodejs.org/en
Java               https://www.java.com/en/download/
Jmeter             https://jmeter.apache.org/download_jmeter.cgi

1- Digitar: npm install 

2- Para subir a aplicação, digitar: npm run upApp

3- Em outro terminal, para executar os testes de API, digitar: npm run test-api

4- Para rodar os testes no browser, digitar no terminal:

npm run test:chrome 
npm run test:firefox
npm run test:edge

4.1 - Para rodar os testes UI em backend, digitar: 

npx cypress run


O relatório em bdd (com print do erro anexo no relatório caso ocorra) estará em: /cypress/reports/report.cucumber.html

Para testar o formato do relatório exibindo print do erro, comentar qualquer linha intermediária em algum dos cenários listados na feature 

Lista dos Testes Planejados e implementados em e2e/Agenda.feature

Testes de em API/agenda.test.js



5 - Para rodar o teste de carga, abrir um terminal na pasta bin de onde foi baixado o Jmeter, e digitar: jmeter -n -t "(local onde foi baixado o projeto)\Teste IA\Load.jmx" -l "(local onde foi baixado o projeto)\Teste IA\Results.csv" 

O resultado estará em: (local onde foi baixado o projeto)\Teste IA\Results.csv

5.1 - O teste de carga consiste em 1000 usuários simultâneos fazendo get diretamente na api para listagem dos contatos
5.2 - Esse cenário foi escolhido por conta do maior número de dados que essa requisição tem que trazer
5.3 - O teste pode ser utilizado para verificar tempo de resposta e disponibilidade da Api com grande número de requisições simultâneas através dos relatórios disponibilizados pelo Jmeter 
