import { describe, expect, test } from "vitest";
import { sumNumbers, ListNode } from "./p002_AddTwoNumber";

describe("Add two numbers", () => {
  test("Empty sum works and is zero", () => {
    expect(sumNumbers(new ListNode(), new ListNode()).toArray()).toEqual([0]);
  });
  test("342 + 465", () => {
    const num1 = ListNode.fromArray([2, 4, 3]);
    const num2 = ListNode.fromArray([5, 6, 4]);
    expect(sumNumbers(num1, num2).toArray()).toEqual([7, 0, 8]);
  });
  test("final carry", () => {
    const num1 = ListNode.fromArray([0, 1, 2]);
    const num2 = ListNode.fromArray([0, 1, 8]);
    expect(sumNumbers(num1, num2).toArray()).toEqual([0, 2, 0, 1]);
  });
  test("Lists of different lengths", () => {
    const num1 = ListNode.fromArray([9, 9]);
    const num2 = ListNode.fromArray([1]);
    expect(sumNumbers(num1, num2).toArray()).toEqual([0, 0, 1]);
  });
});
