# Bancos de dados
## Redis
- docker run --name redisbarber -p 6379:6379 -d -t redis:alpine

## Mogo
- docker run --name mongobarber -p 27017:27017 -d -t mongo


# Comandos iniciais
  - docker start database // inicia o banco de dados da aplicação
  - docker start mongobarber // inicia o banco não relacional para controle de agendamentos

  - yarn dev // rodar a aplicação
  - yarn queue // tratar as filas de cancelamento e envio de e-mail

# Acessos externos
  - mailtrap.io // servidor de e-mail para testes de envio de e-mail para cancelamentos
  - sentry.io // Usado para receber relatório dos erros da aplicação

# Aplicatiovos para visualizar banco de dados
  - Postbird // visualiza o banco de dados de modo geral
  - MongoDB Compas // visualiza o banco de dados dos agendamentos


Dicas de alguns erros:
  - Apagar todos os agendamentos e criar novos por meio de rodar a migrate do zero

# A verificar
  - Não permitir cancelar mais de uma vez o mesmo agendamento
