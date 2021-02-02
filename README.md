# Desafio Full Stack

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
  - Context Api
  - Bootstrap
  - Docker
  - Eslint

## Estrutura do projeto
- ./
  - api
  - client
  - docker-compose.yml
  
## Rodar localmente 
( Obs: para logar usar o email: admin<span></span>@admin.com; senha: 123456 )

<br />

### API - http://<span></span>localhost:3333 ( rode o comando dentro da pasta api )
`yarn ou yarn install` - para instalar as dependências

`
yarn dev
`

<br />

### Web - http://<span></span>localhost:3000  ( rode o comando dentro da pasta client )
`yarn ou yarn install` - para instalar as dependências

`
yarn start
`

<br />

## Rodar api e web usando docker com um único comando ( rode o comando na raiz )
`
docker-compose up
`

<br />

## executar teste na api ( rode o comando dentro da pasta api )
`
yarn test
`
<br />
<br />
![teste_process](https://i.ibb.co/rm75sCX/ezgif-com-video-to-gif-1.gif)

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
      "name": "admin",
      "email": "admin@admin.com",
      "phone": "11912321312",
      "cpf": "49985017161"
    },
    "token": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjAwMzUyMzc2LCJleHAiOjE2MDA1MjUxNzZ9.wioT2DD5EEP_qMHcw7oEjWCFW3rSpAeg1e6YHDHiEfQ"
    }
  }
}
```

### Criar um novo usuário

Rota:
`/createUser
`

Modelo de requisição:
```json
{
  "name": "admin",
  "email": "admin@admin.com",
  "phone": "11912321312",
  "cpf": "4999999999",
  "password": "123456"
}
```

Resposta: 201
```json
{
  "status": "201",
  "data": {
    "id": 1,
    "name": "admin",
    "email": "admin@admin.com",
    "phone": "11912321312",
    "cpf": "4999999999"
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
    "name": "admin",
    "email": "admin@admin.com",
    "phone": "11912321312",
    "cpf": "4999999999"
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
  "phone": "11912321312",
  "cpf": "4999999999"
}
```

Resposta: 200
```json
{
  "status": "200",
  "data": {
    "id": 1,
    "name": "admin_atualizado",
    "email": "admin_atualizado@admin_atualizado.com",
    "phone": "11912321312",
    "cpf": "4999999999"
  }
}
```

### deletar um usuário pelo id (deleta o usuario e retorna a lista de usuarios atualizada)

Rota:
`/deleteUser/:id
`

Modelo de requisição:
```
url = http://localhost:3333/deleteUser/1
```

Resposta: 200
```json
{
  "status": "200",
  "data": {
    lista de usuarios atualizada
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
