import "reflect-metadata";
import express from "express";
import * as dotenv from "dotenv";
import {
  getConnection,
  getRepository,
  createConnection,
  getMongoManager,
} from "typeorm";
import supertest from "supertest";
import * as bodyParser from "body-parser";
import { expect } from "chai";

import { token } from "../../services/generateToken";

import routes from "../../routes";
import { User } from "../../entities/User";

const app = express();
app.use(bodyParser.json());
app.use(routes);
dotenv.config();

describe("User CRUD", () => {
  beforeAll(async () => {
    return createConnection({
      type: "mongodb",
      host: "localhost",
      database: "preparo_testing",
      useUnifiedTopology: true,
      synchronize: true,
      logging: false,
      entities: ["src/entities/**/*.ts"],
      migrations: ["src/migration/**/*.ts"],
    });
  });

  beforeEach(async () => {
    const manager = getMongoManager();
    await manager.clear(User);
  });

  afterAll(async () => {
    await getRepository(User).clear();
    const connection = getConnection();
    await connection.close();
  });

  test("create user", async () => {
    const user = {
      email: "user@test.com",
      password: "12345678",
    };
    const tokenResponse = await token(user.email);

    const response = await supertest(app)
      .post(`/createUser`)
      .send(user)
      .set("authorization", "bearer " + tokenResponse);

    expect(response.status).to.equal(201);
  });

  test("get User", async () => {
    const user = {
      email: "user@test.com",
      password: "12345678",
    };
    const tokenResponse = await token(user.email);

    const response = await supertest(app)
      .post(`/createUser`)
      .send(user)
      .set("authorization", "bearer " + tokenResponse);

    const userResponse = await supertest(app)
      .get(`/getUser/${response.body.user.id}`)
      .set("authorization", "bearer " + tokenResponse);

    expect(userResponse.status).to.equal(200);
    // expect(response.status).exist();
  });

  test("update user by id", async () => {
    const user = {
      email: "user@test.com",
      password: "12345678",
    };
    const tokenResponse = await token(user.email);

    const response = await supertest(app)
      .post(`/createUser`)
      .send(user)
      .set("authorization", "bearer " + tokenResponse);

    const userUpdate = {
      name: "name_test_update",
      email: "email_update@test.com",
      linkedin: "linkedin",
      phone: "123456780",
    };

    const userResponse = await supertest(app)
      .put(`/updateUser/${response.body.user.id}`)
      .send(userUpdate)
      .set("authorization", "bearer " + tokenResponse);

    expect(userResponse.status).to.equal(200);
  });
});
