import { Roller } from "./Roller";

describe("Smoke test", () => {
  test("The test scaffold runs successfully.", () => {
    expect(true).toBe(true);
  });
});

describe("Roller tests", () => {
  test("Description should return a string with the number of faces.", () => {
    const roller = new Roller(6);
    expect(roller.getDescription()).toBe("This roller has 6 faces.");
  });
});
