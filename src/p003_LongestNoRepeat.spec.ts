import { describe, expect, test } from "vitest";
import { longestNoRepeat } from "./p003_LongestNoRepeat";

describe("Longest no repeat", () => {
  test("Empty input", () => {
    expect(longestNoRepeat("")).toEqual(0);
  });
  test("repeated character", () => {
    expect(longestNoRepeat("aaaa")).toEqual(1);
  });
  test("no repeat", () => {
    expect(longestNoRepeat("abcdef")).toEqual(6);
  });
  test("longest section in middle", () => {
    expect(longestNoRepeat("abaabcdebf")).toEqual(5);
  });
  test("handles repeated blocks", () => {
    expect(longestNoRepeat("abccba")).toEqual(3);
  });
});
