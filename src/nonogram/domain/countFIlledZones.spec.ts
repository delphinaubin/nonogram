import { countFilledZones } from "./countFIlledZones";

describe("countFilledZones", () => {
  it("returns [] if no filled cells are in the list", () => {
    const aList = [0, 0, 0, 0];
    expect(countFilledZones(aList)).toEqual([]);
  });

  it("returns the tab length if all cells are filled", () => {
    const aList = [1, 1, 1, 1];
    expect(countFilledZones(aList)).toEqual([4]);
  });

  it("works with several zones", () => {
    const aList = [1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1];
    expect(countFilledZones(aList)).toEqual([1, 3, 2, 1]);
  });
});
