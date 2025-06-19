import { merge } from "./merge";
import { describe, it, expect } from "@jest/globals";

describe("merge", () => {
  it("should merge and sort the arrays", () => {
    const col1: number[] = [1, 3, 5];
    const col2: number[] = [6, 4, 2];
    const col3: number[] = [7, 8, 9];

    const expected: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const result = merge(col1, col2, col3);
    expect(result).toEqual(expected);
  });

  it("should handle empty arrays", () => {
    const col1: number[] = [];
    const col2: number[] = [];
    const col3: number[] = [];

    const expected: number[] = [];

    const result = merge(col1, col2, col3);
    expect(result).toEqual(expected);
  });

  it("should handle if some arrays are empty", () => {
    const col1: number[] = [1, 5, 6];
    const col2: number[] = [9, 7, 5];
    const col3: number[] = [];

    const expected: number[] = [1, 5, 5, 6, 7, 9];

    const result = merge(col1, col2, col3);
    expect(result).toEqual(expected);
  });
});
