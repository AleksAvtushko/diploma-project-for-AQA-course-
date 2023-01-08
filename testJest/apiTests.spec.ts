import superagent from "superagent";
import { expect } from "@jest/globals";
import { StatusCode } from "../scr/commonJest";
describe("Check get request", () => {
    test("Check get SINGLE RESOURCE", async () => {
        const res = await superagent.get("https://reqres.in/api/unknown/2");
        expect(res.status).toBe(StatusCode.getStatus("ExpectedCode200"));
    });
    test("Check get LIST RESOURCE", async () => {
        const res = await superagent.get("https://reqres.in/api/unknown");
        expect(res.status).toBe(StatusCode.getStatus("ExpectedCode200"));
    });

    test("Check get LIST RESOURCE", async () => {
        const res = await superagent.get("https://jsonplaceholder.typicode.com/posts/1");
        expect(res.status).toBe(StatusCode.getStatus("ExpectedCode200"));
    });

    test("SINGLE USER NOT FOUND", async () => {
        let res: any;
        try {
            res = await superagent.get("https://reqres.in/api/users/23");
        } catch (error: any) {
            expect(error.status).toBe(StatusCode.getStatus("ExpectedCode404"));
        }
    });

    test("SINGLE RESOURCE NOT FOUND", async () => {
        let res: any;
        try {
            res = await superagent.get("https://reqres.in/api/unknown/23");
        } catch (error: any) {
            expect(error.status).toBe(StatusCode.getStatus("ExpectedCode404"));
        }
    });
});

describe("Check POST request", () => {
    test("Add test data", async () => {
        let res: any;
        try {
            res = await superagent
                .post("https://jsonplaceholder.typicode.com/posts")
                .set("content-type", "application/json")
                .send({
                    userId: "12",
                    id: "20",
                    title: "Test#1",
                    body: "est rerum tempore vitae nsequi sint nihil reprehenderit dolor",
                });
        } catch (error: any) {
            expect(error.message).toBe("Bad Request");
        }
        expect(res.status).toBe(StatusCode.getStatus("ExpectedCode201"));
    });

    test("LOGIN - SUCCESSFUL", async () => {
        let res: any;
        try {
            res = await superagent.post("https://reqres.in/api/login").set("content-type", "application/json").send({
                email: "peter@klaven",
            });
        } catch (error: any) {
            expect(error.status).toBe(StatusCode.getStatus("ExpectedCode400"));
        }
    });

    test("LOGIN - SUCCESSFUL", async () => {
        let res: any;
        try {
            res = await superagent.post("https://reqres.in/api/login").set("content-type", "application/json").send({
                email: "eve.holt@reqres.in",
                password: "cityslicka",
            });
        } catch (error: any) {
            expect(error.message).toBe("Bad Request");
        }
        expect(res.status).toBe(StatusCode.getStatus("ExpectedCode200"));
    });
});

describe("Check DELETE request", () => {
    test("Delete value from jsonplaceholder", async () => {
        let res: any;
        try {
            res = await superagent.delete("https://jsonplaceholder.typicode.com/posts/1");
        } catch (error: any) {
            throw new Error(error);
        }
        expect(res.status).toBe(StatusCode.getStatus("ExpectedCode200"));
        expect(res.body).toBeDefined();
    });

    test("Delete value from reqres.in", async () => {
        let res: any;
        try {
            res = await superagent.delete("https://reqres.in/api/users/2");
        } catch (error: any) {
            throw new Error(error);
        }
        expect(res.status).toBe(StatusCode.getStatus("ExpectedCode204"));
        expect(res.body).toBeDefined();
    });
});

describe("Check PUT request", () => {
    test("put value to reqres.in", async () => {
        let res: any;
        try {
            res = await superagent.put("https://reqres.in/api/users/2").set("content-type", "application/json").send({
                name: "Valeron",
                job: "Dvornik",
            });
        } catch (error: any) {
            expect(error.message).toBe("Bad Request");
        }
        expect(res.status).toBe(StatusCode.getStatus("ExpectedCode200"));
    });

    test("put value to jsonplaceholder", async () => {
        let res: any;
        try {
            res = await superagent.put("https://reqres.in/api/users/2").set("content-type", "application/json").send({
                userId: 55,
                id: 15,
                title: "add new value",
                body: "Test body",
            });
        } catch (error: any) {
            expect(error.message).toBe("Bad Request");
        }
        expect(res.status).toBe(StatusCode.getStatus("ExpectedCode200"));
    });
});
