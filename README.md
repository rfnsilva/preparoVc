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
   - firebase
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
  
## Como rodar 
## Projeto firebase + storage + react

### Web - http://<span></span>localhost:3000
- Obs: execute o comando dentro da pasta firebase-project-client

`yarn ou yarn install` - para instalar as dependências

`yarn start` - para executar

<br />

## Projeto mongodb + node + storage + react

### Api - http://<span></span>localhost:3333
- Obs: execute o comando dentro da pasta mongodb-project / api 

`yarn ou yarn install` - para instalar as dependências

`yarn dev` - para executar

### Web - http://<span></span>localhost:3000
- Obs: execute o comando dentro da pasta mongodb-project / client

`yarn ou yarn install` - para instalar as dependências

`yarn start` - para executar

<br />

## Rodar api e web usando docker com um único comando
- Obs: execute o comando na pasta mongodb-project

`docker-compose up`

<br />

## executar teste na api
- Obs: execute o comando dentro da pasta mongodb-project / api

`yarn test`

<br />

## API rotas

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

Ricardo Neves, 12 de janeiro de 2021.
