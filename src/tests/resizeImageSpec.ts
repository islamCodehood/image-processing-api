import supertest from "supertest";
import app from "../index";
import checkCachedImages from "../utilities/checkCachedImages";
import resizeImage from "../utilities/resizeImage";
describe("Test endpoints", () => {
  const request = supertest(app);

  it("should get the root endpoint", async (done) => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
    done();
  });

  it("should get the api endpoint", async (done) => {
    const response = await request.get("/api");
    expect(response.status).toBe(200);
    done();
  });

  it("should get the image endpoint", async (done) => {
    const response = await request.get(
      "/api/image?name=test-img.jpg&width=100&height=150"
    );
    expect(response.status).toBe(200);
    done();
  });
});

describe("Test checkCachedImages function", () => {
  it("should be true when image name with same width & height found", async (done) => {
    const result = await checkCachedImages("test-img.jpg", 300, 250);
    expect(result).toBe(true);
    done();
  });

  it("should be false when image name is not found in cached image folder while width & height are right", async (done) => {
    const result = await checkCachedImages("notFoundImageName.jpg", 100, 200);
    expect(result).toBe(false);
    done();
  });
  it("should be false when image name is found in cached image folder while width is not right", async (done) => {
    const result = await checkCachedImages("test-img.jpg", 200, 250);
    expect(result).toBe(false);
    done();
  });
  it("should be false when image name is found in cached image folder while height is not right", async (done) => {
    const result = await checkCachedImages("test-img.jpg", 300, 150);
    expect(result).toBe(false);
    done();
  });
});

describe("Test resizeImage Function", () => {
  it("should return resized image object if image is not in cached image folder", async (done) => {
    const result = await resizeImage("test-img-2.jpg", 200, 500);
    expect(result).toEqual(
      jasmine.objectContaining({
        format: "jpeg",
        width: 200,
        height: 500,
      })
    );
    done();
  });
});
