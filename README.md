# DJ Music System

Sistema de gerenciamento de músicas para DJs com autenticação JWT.

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (Node Package Manager)

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/marcelohoficial/system-dj.git
cd system-dj
```

2. Instale as dependências:

```bash
npm install
```

## Executando o Projeto

### Modo Desenvolvimento

Para executar o projeto com hot-reload (atualização automática):

```bash
npm run dev
```

### Modo Produção

Para executar o projeto em modo produção:

```bash
npm start
```

O servidor estará rodando em `http://localhost:3000`

## Endpoints Disponíveis

- `POST /register` - Cadastro de usuários
- `POST /login` - Login de usuários
- `GET /musicas` - Lista de músicas (requer autenticação)

## Documentação da API

A documentação completa da API está disponível em:
`http://localhost:3000/api-docs`

## Testando a Aplicação

1. Acesse `http://localhost:3000` no navegador
2. Registre um novo usuário usando o formulário de registro
3. Faça login com as credenciais cadastradas
4. Use o botão "Obter Musicas" para ver a lista de músicas disponíveis

## Estrutura do Projeto

```
dj-online/
├── src/
│   ├── database/
│   ├── middleware/
│   │   └── auth.js
│   ├── routes/
│   │   └── index.js
│   ├── index.js
│   └── swagger.js
├── public/
│   └── index.html
└── package.json
```

## Tecnologias Utilizadas

- Express.js
- JWT (JSON Web Tokens)
- Swagger (Documentação da API)
- CORS
- Nodemon (Desenvolvimento)
