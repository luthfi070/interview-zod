import supertest from "supertest";
import app from "../test.index";
import mongoose, { mongo } from "mongoose";

const request = supertest(app);

describe("User Login", () => {
  it("Can return body and success", async () => {
    let payloadTest = {
      email: "luthfi@mail.com",
      password: "1234",
    };

    const login = await request
      .post("/auth/login")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send(payloadTest);

    expect(login.status).toBe(200);
    expect(JSON.parse(login.text)).toEqual(payloadTest);
  });
});

afterAll((done) => {
  mongoose.connection.close();
  done();
});
