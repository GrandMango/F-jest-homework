import getUsers from "../users";

jest.mock("axios");

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // TODO 13: add async test with manual mock
    const data = {};
    // axios.get.mockImplementation(() => Promise.resolve(data1));

    await expect(getUsers()).resolves.toEqual(data);
    // await getUsers().then((data) => expect(data).toEqual(data1));
  });
});
