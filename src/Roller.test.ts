import { Roller } from "./Roller";

describe("Smoke test", () => {
    test("The test scaffold runs successfully.", () => {
        expect(true).toBe(true);
    });
});


describe("Roller tests", () => {
    test("Roll a valid value should update the last roll and distribution.", () => {
        const roller = new Roller(6);
        roller.roll(3);
        expect(roller.last()).toBe(3);
        expect(roller.distribution().get(3)).toBe(1);
    });

    test("Roll an invalid value should return 0 and not update the last roll or distribution.", () => {
        const roller = new Roller(6);
        roller.roll(7);
        expect(roller.last()).toBe(0);
        expect(roller.distribution().get(7)).toBeUndefined();
    });

    test("Roll a valid value should return the same value.", () => {
        const roller = new Roller(6);
        const result = roller.roll(3);
        expect(result).toBe(3);
    });

    test("Roll an invalid value should return 0.", () => {
        const roller = new Roller(6);
        const result = roller.roll(7);
        expect(result).toBe(0);
    });

    test("Roll multiple valid values should update the distribution for each face that is rolled.", () => {
        const roller = new Roller(6);
        roller.roll(3);
        roller.roll(4);
        roller.roll(6);
        roller.roll(3);
        expect(roller.distribution().get(1)).toBe(0);
        expect(roller.distribution().get(2)).toBe(0);
        expect(roller.distribution().get(3)).toBe(2);
        expect(roller.distribution().get(4)).toBe(1);
        expect(roller.distribution().get(5)).toBe(0);
        expect(roller.distribution().get(6)).toBe(1);
    });

    test("Roll multiple invalid values should not update the distribution for any face and should return 0 for each roll.", () => {
        const roller = new Roller(6);
        roller.roll(7);
        roller.roll(0);
        roller.roll(-1);
        expect(roller.distribution().get(7)).toBeUndefined();
        expect(roller.distribution().get(0)).toBeUndefined();
        expect(roller.distribution().get(-1)).toBeUndefined();
        expect(roller.last()).toBe(0);
    });
});
