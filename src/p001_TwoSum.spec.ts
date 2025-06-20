import { describe, test, expect } from "vitest";
import { twoSum } from "./p001_TwoSum";

describe("twoSum", () => {
  test("finds indices that sum to target", () => {
    expect(twoSum([2, 5, 8, 21], 13)).toEqual([1, 2]);
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  test("returns null if no pair found", () => {
    expect(twoSum([1, 2, 3], 10)).toBeNull();
  });

  test("handles negative numbers", () => {
    expect(twoSum([-3, 4, 1, 2], -1)).toEqual([0, 3]);
  });
  test("handles duplicates correctly", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
});
