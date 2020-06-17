import Recipient from "../recipient";

describe("acceptInjection", () => {
  test("should hasAntibodies be false if vaccine not contain Virus Proteins", () => {
    // TODO 17: add test here
    const recipient = new Recipient();
    expect(recipient.hasAntibodies).toBe(false);

    recipient.acceptInjection({
      composition: ["No such Virus Proteins", "Sugar"],
    });

    expect(recipient.hasAntibodies).toBe(false);
  });

  test("should hasAntibodies be true if vaccine contain Virus Proteins", () => {
    // TODO 18: add test here
    const recipient = new Recipient();
    expect(recipient.hasAntibodies).toBe(false);

    recipient.acceptInjection({
      composition: ["Virus Proteins", "Sugar"],
    });

    expect(recipient.hasAntibodies).toBe(true);
  });
});
