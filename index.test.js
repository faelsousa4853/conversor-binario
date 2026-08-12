const request = require("supertest");
const app = require("./index");

describe("Conversor de decimal para binário", () => {
    test("deve converter decimal para binário", async () => {
        const response = await request(app)
            .get("/to-binary/10");

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            decimal: 10,
            binary: "1010"
        });
    });

    test("deve retornar erro para número inválido", async () => {
        const response = await request(app)
            .get("/to-binary/abc");

        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({
            error: "Invalid decimal number"
        });
    });
});