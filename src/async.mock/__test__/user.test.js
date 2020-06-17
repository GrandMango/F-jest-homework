import { register } from "../user";
import { verifyPassword, verifyUsername } from "../verify";

jest.mock("../verify");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    const mockUsername = "mock username";
    const mockPassword = "mock password";

    verifyPassword.mockImplementation(() => true);
    verifyUsername.mockImplementation(() => true);

    register(mockUsername, mockPassword);

    await expect(register(mockUsername, mockPassword)).resolves.toEqual({});
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    const mockUsername = "mock username";
    const mockPassword = "mock password";
    verifyUsername.mockImplementation(() => false);
    verifyPassword.mockImplementation(() => true);

    register(mockUsername, mockPassword);

    await expect(register(mockUsername, mockPassword)).rejects.toEqual(
      new Error("wrong username or password")
    );
  });
});
