const { isAdult } = require("./AgeFunction");

describe("Tests for isAdult Function", () => {
  test("Test for age being 18", () => {
    expect(isAdult(18)).toBe(true);
  });

  test("Test for age being greater than 18", () => {
    expect(isAdult(19)).toBe(true);
  });

  test("Test for age being less than 18", () => {
    expect(isAdult(17)).toBe(false);
  });

  test("Test for age not being a number", () => {
    expect(() => {
      isAdult("eighteen");
    }).toThrow("Input is not a number");
  });

  test("Test for age being a negative", () => {
    expect(() => {
      isAdult(-1);
    }).toThrow("Age cannot be smaller than 0");

  });
});