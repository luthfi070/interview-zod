import supertest from "supertest";
import app from "../test.index";
import mongoose, { mongo } from "mongoose";

const request = supertest(app);

describe("Create Student", () => {
  it("Can create new student", async () => {
    let payloadTest = {
      name: "Luthfi",
      age: 23,
    };

    const createStudent = await request
      .post("/student")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send(payloadTest);

    expect(createStudent.status).toBe(200);
    expect(JSON.parse(createStudent.text).success).toEqual("OK");

    let response = JSON.parse(createStudent.text);

    const findStudent = await request
      .get(`/student/${response.idStudent}`)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");

    expect(JSON.parse(findStudent.text).data.name).toEqual(payloadTest.name);

    await request
      .delete(`/student/${response.idStudent}`)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");
  });
});

describe("Get All Student", () => {
  it("Can get all student", async () => {
    const getAllStudent = await request
      .get("/student")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");

    expect(getAllStudent.status).toBe(200);
    expect(JSON.parse(getAllStudent.text).success).toEqual("OK");
    expect(JSON.parse(getAllStudent.text).data).toEqual(expect.any(Array));
  });
});

describe("Get Student", () => {
  it("Can get student", async () => {
    let payloadTest = {
      name: "Luthfi",
      age: 23,
    };

    const createStudent = await request
      .post("/student")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send(payloadTest);

    let response = JSON.parse(createStudent.text);

    const findStudent = await request
      .get(`/student/${response.idStudent}`)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");

    expect(findStudent.status).toBe(200);
    expect(JSON.parse(findStudent.text).data.name).toEqual(payloadTest.name);
    expect(JSON.parse(findStudent.text).success).toEqual("OK");

    await request
      .delete(`/student/${response.idStudent}`)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");
  });
});

describe("Update Student", () => {
  it("Can update student", async () => {
    let payloadTest = {
      name: "Luthfi",
      age: 23,
    };

    const createStudent = await request
      .post("/student")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send(payloadTest);

    let response = JSON.parse(createStudent.text);

    let newPayload = {
      name: "Luthfi Fitra",
      age: 25,
    };

    const updateStudent = await request
      .put(`/student/${response.idStudent}`)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send(newPayload);

    expect(updateStudent.status).toBe(200);
    expect(JSON.parse(updateStudent.text).success).toEqual("OK");
    expect(JSON.parse(updateStudent.text).data._id).toEqual(response.idStudent);

    await request
      .delete(`/student/${response.idStudent}`)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");
  });
});

describe("Delete Student", () => {
  it("can delete student", async () => {
    let payloadTest = {
      name: "Luthfi",
      age: 23,
    };

    const createStudent = await request
      .post("/student")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send(payloadTest);

    let response = JSON.parse(createStudent.text);

    const deleteStudent = await request
      .delete(`/student/${response.idStudent}`)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");

    const findStudent = await request
      .get(`/student/${response.idStudent}`)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");

    expect(deleteStudent.status).toBe(200);
    expect(JSON.parse(deleteStudent.text).deletedStudent).toEqual(
      payloadTest.name
    );
    expect(JSON.parse(findStudent.text).data).toBeNull();
  });
});

afterAll((done) => {
  mongoose.connection.close();
  done();
});
