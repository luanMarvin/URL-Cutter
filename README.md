# URL Cutter - ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) - ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![EJS](https://img.shields.io/badge/ejs-%23B4CA65.svg?style=for-the-badge&logo=ejs&logoColor=black) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

# PT-BR

## Descrição
O projeto **URL Cutter** é uma aplicação voltada para o gerenciamento e encurtamento de links web, facilitando o armazenamento e o acesso rápido a links favoritos.

## Uso
### Informações Gerais
- A melhor forma de utilizar este projeto é com Docker, o que permite o uso de um ambiente totalmente configurado para executar a aplicação de maneira eficiente.
- Também é possível executar o app em ambiente de desenvolvimento local, desde que as versões **`Node 20.11.1`** e **`NPM 10.9.0`** estejam instaladas.


### Configuração `.env`
O projeto requer as seguintes variáveis de ambiente:
- `PORT=3000` (ou qualquer outro valor desejado para a porta).

### Instalação com Docker
1. Clone o repositório: `git clone https://github.com/luanMarvin/URL-Cutter.git`.
2. Navegue até o diretório do projeto: `cd URL-Cutter`.
3. Execute o comando `npm run docker:build`.
4. Inicie a aplicação: `npm run docker:run` ou pela aplicação de gerenciamento Docker.

### Intalação sem Docker
1. Clone o repositório: `git clone https://github.com/luanMarvin/URL-Cutter.git`.
2. Navegue até o diretório do projeto: `cd URL-Cutter`.
3. Execute o comando `npm run build`.
4. Inicie a aplicação: `npm run start`.

## Licença
Esse projeto é [MIT licensed](./LICENSE).

# EN

## Description
The **URL Cutter** project is an application designed for managing and shortening web links, making it easy to store and quickly access favorite links.

## Usage
### General Information
- The best way to use this project is with Docker, allowing for a fully configured environment to efficiently run the application.
- Alternatively, the app can be run locally in a development environment, provided **Node version `20.11.1`** and **NPM version `10.9.0`** are installed.

### `.env` Configuration
The project requires the following environment variables:
- `port="3000"`  (or any other desired port value).

### Installation with Docker
1. Clone the repository: `git clone https://github.com/luanMarvin/URL-Cutter.git`.
2. Navigate to the project directory: `cd URL-Cutter`.
3. Run the command `npm run docker:build`.
4. Start the application with `npm run docker:run` or using a Docker management tool.

### Installation without Docker
1. Clone the repository: `git clone https://github.com/luanMarvin/URL-Cutter.git`.
2. Navigate to the project directory: `cd URL-Cutter`.
3. Run the command `npm run build`.
4. Start the application with `npm run start`.

## License
This project is [MIT licensed](./LICENSE).
