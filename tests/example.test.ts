import { expect, test } from "vitest";
export function sum(a: number, b: number) {
  return a + b;
}

export function sub(a: number, b: number) {
  return a - b;
}

test("sum", () => {
  expect(sum(1, 2)).toBe(3);
});

test("sub", () => {
  expect(sub(1, 2)).toBe(-1);
});
