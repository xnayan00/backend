# Backend Node.js com MongoDB e Autenticação JWT

Este repositório contém uma estrutura de backend padrão para um projeto em Node.js e MongoDB, com autenticação JWT e métodos de signin e signup. O objetivo deste projeto é fornecer uma base sólida para o desenvolvimento de aplicações web e APIs em Node.js e MongoDB.

## Requisitos

Para executar este projeto, você precisará ter o seguinte instalado no seu sistema:

- Node.js
- MongoDB

## Instalação

Para instalar este projeto, basta clonar o repositório em seu computador e executar o seguinte comando na pasta raiz do projeto:

`npm install`

Este comando instalará todas as dependências do projeto.

## Configuração

Antes de executar o projeto, você precisará configurar as variáveis de ambiente do servidor. Para fazer isso, crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

`PORT=<porta do servidor>`

`MONGODB_URI=<URL do banco de dados MongoDB>`

`JWT_SECRET=<segredo para a geração de tokens JWT>`

Certifique-se de substituir os valores das variáveis pelas suas próprias configurações.

## Executando o projeto

Para executar o projeto, basta executar o seguinte comando na pasta raiz do projeto:

`npm run dev`

Este comando iniciará o servidor e você poderá acessar a API em `http://localhost:<porta do servidor>`.

## API

A API deste projeto possui os seguintes endpoints:

- `POST /auth/signup`: cria um novo usuário na base de dados
- `POST /auth/signin`: autentica um usuário e gera um token JWT

Para utilizar a API, envie uma requisição HTTP para o endpoint desejado, com os parâmetros necessários. O servidor retornará uma resposta em JSON com o resultado da operação.

## Contribuindo

Se você deseja contribuir para este projeto, sinta-se à vontade para enviar um pull request ou abrir uma issue. Toda ajuda é bem-vinda!

## Licença

Este projeto está licenciado sob a licença MIT.
