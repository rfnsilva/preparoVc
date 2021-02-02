# Desafio Full Stack [estágio]

## Tecnologias utilizados

### Backend
- Node.js
  - Express
  - TypeScript
  - Typeorm
  - Mongodb
  - Jest
  - Jsonwebtoken
  - Bcrypt
  - Docker
  - Eslint

### Frontend:
 - React.js
  - Axios
  - History
  - React-router-dom
  - Styled-components
  - yup
  - unform
  - Context Api
  - Bootstrap
  - Docker
  - Eslint

## Estrutura do projeto
- firebase-project-client
- mongodb-project
  - api
  - client
  - docker-compose.yml

<br />
  
## Rodar localmente 
## Projeto firebase + storage + react

### Web - http://<span></span>localhost:3000 ( rode o comando dentro da pasta firebase-project-client )
`yarn ou yarn install` - para instalar as dependências

`yarn start` - para executar

<br />

## Projeto mongodb + node + storage + react

### Api - http://<span></span>localhost:3333  ( rode o comando dentro da pasta mongodb-project / api )
`yarn ou yarn install` - para instalar as dependências

`yarn dev` - para executar

### Web - http://<span></span>localhost:3000  ( rode o comando dentro da pasta mongodb-project / client )
`yarn ou yarn install` - para instalar as dependências

`yarn start` - para executar

<br />

## Rodar api e web usando docker com um único comando ( rode o comando na pasta mongodb-project )
`
docker-compose up
`

<br />

## executar teste na api ( rode o comando dentro da pasta mongodb-project/api )
`
yarn test
`
<br />

## API rotas

### Criar sessão

Rota:
`/session`

Modelo de requisição:
```json
{
  "email": "admin@admin.com",
  "password" : "123456"
}
```

Resposta: 200
```json
{
  "status": "200",
  "data": {
    "user": {
      "id": 1,
      "email": "admin@admin.com",
      ...rest
    },
    "token": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjAwMzUyMzc2LCJleHAiOjE2MDA1MjUxNzZ9.wioT2DD5EEP_qMHcw7oEjWCFW3rSpAeg1e6YHDHiEfQ"
    }
  }
}
```

### Registrar um novo usuário

Rota:
`/createUser
`

Modelo de requisição:
```json
{
  "email": "admin@admin.com",
  "password": "123456"
}
```

Resposta: 201
```json
{
  "status": "201",
  "data": {
    "id": 1,
    "email": "admin@admin.com",
    ...rest
  }
}
```

### buscar um usuário pelo id

Rota:
`/getUser/:id
`

Modelo de requisição:
```
url = http://localhost:3333/getUser/1
```

Resposta: 200
```json
{
  "status": "200",
  "data": {
    "id": 1,
    "email": "admin@admin.com",
    ...rest
  }
}
```

### atualizar um usuário pelo id (retorna o usuario atualizado)

Rota:
`/updateUser/:id
`

Modelo de requisição:
```
url = http://localhost:3333/updateUser/1

body (dados para atualização)
{
  "id": 1,
  "name": "admin",
  "email": "admin@admin.com",
  ...rest
}
```

Resposta: 200
```json
{
  "status": "200",
  "data": {
    "id": 1,
    "email": "emailatualizadoo@atualizado.com",
    ...rest
  }
}
```

## Telas

### Login
![tela_login](https://i.ibb.co/BcZmTrv/Captura-de-tela-de-2021-01-12-22-32-39.png)

### Login Mobile
![tela_login_mobile](https://i.ibb.co/3sb8w6P/Captura-de-tela-de-2021-01-12-22-33-13.png)

### Home
![tela_home](https://i.ibb.co/qj2V0bC/Captura-de-tela-de-2021-01-12-23-43-02.png)

### Home Mobile
![tela_home_mobile](https://i.ibb.co/p2vjbxD/Captura-de-tela-de-2021-01-12-23-43-45.png)

## Ações

### Logar

![logar_process](https://i.ibb.co/3S4jGTC/ezgif-com-video-to-gif.gif)

### Cadastrar usuário

![cadatro_process](https://i.ibb.co/sVdp3CL/ezgif-com-video-to-gif-1.gif)

### Atualizar usuário

![atualizar_process](https://i.ibb.co/6tJFw66/ezgif-com-video-to-gif-2.gif)


Ricardo Neves, 12 de janeiro de 2021.