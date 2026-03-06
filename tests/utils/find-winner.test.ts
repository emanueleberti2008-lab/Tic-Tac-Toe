import { findWinner } from "../../app/utils/find-winner";
import { describe } from "node:test";
import { expect, test, it } from "vitest";

describe("find winner function", () => {
  it("find winner X when a row on a 4x4 board is filled with X", () => {
    expect(
      findWinner(
        [
          ["O", "O", "O", "O"],
          ["X", "O", "X", "O"],
          ["X", "X", "X", "X"],
          ["O", "X", "O", "X"],
        ],
        4,
        "X",
      ),
    ).toBe(true);
  });

  it("find no winner when the board is empty", () => {
    expect(
      findWinner(
        [
          Array(4).fill(null),
          Array(4).fill(null),
          Array(4).fill(null),
          Array(4).fill(null),
        ],
        4,
        "X",
      ),
    ).toBe(false);
  });

  it("find winner X when the main diagonal is filled with X", () => {
    expect(
      findWinner(
        [
          ["X", "O", "O", "O"],
          ["X", "X", "X", "O"],
          ["X", "O", "X", "X"],
          ["O", "X", "O", "X"],
        ],
        4,
        "X",
      ),
    ).toBe(true);
  });

  it("find winner X when the secondary diagonal is filled with X", () => {
    expect(
      findWinner(
        [
          ["O", "O", "O", "X"],
          ["X", "X", "X", "O"],
          ["X", "X", "O", "X"],
          ["X", "X", "O", "X"],
        ],
        4,
        "X",
      ),
    ).toBe(true);
  });

  it("find winner X when the fourth column is filled with X", () => {
    expect(
      findWinner(
        [
          ["O", "O", "O", "X"],
          ["X", "O", "X", "X"],
          ["X", "O", "O", "X"],
          ["X", "X", "O", "X"],
        ],
        4,
        "X",
      ),
    ).toBe(true);
  });

  it("find no winner when there is only one X at position 2,3", () => {
    expect(
      findWinner(
        [
          [null, null, null, null],
          [null, null, "X", null],
          [null, null, null, null],
          [null, null, null, null],
        ],
        4,
        "X",
      ),
    ).toBe(false);
  });

  it("find no winner when there is an O at position 1,0 and an X at position 1,2", () => {
    expect(
      findWinner(
        [
          [null, null, null, null],
          ["O", null, "X", null],
          [null, null, null, null],
          [null, null, null, null],
        ],
        4,
        "X",
      ),
    ).toBe(false);
  });

  it("find no winner when there is an O at position 2,2", () => {
    expect(
      findWinner(
        [
          [null, null, null, null],
          [null, null, null, null],
          [null, null, "O", null],
          [null, null, null, null],
        ],
        4,
        "O",
      ),
    ).toBe(false);
  });
});
