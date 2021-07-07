import supertest from "supertest";
import app from "../index";
import routes from "../routes/routes";



describe("Test endpoints", () => {
  it("should get the root endpoint", async (done) => {
    const request = supertest(app);
    const response = await request.get("/");
    expect(response.status).toBe(200);
    done()
  });

  it("should get the api endpoint", async (done) => {
    const request = supertest(app);
    const response = await request.get("/api");
    expect(response.status).toBe(200);
    done()
  });

  it("should get the image endpoint", async (done) => {
    const request = supertest(routes);
    const response = await request.get("/image");
    expect(response.status).toBe(200);
    done()
  });
});
