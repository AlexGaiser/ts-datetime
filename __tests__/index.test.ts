import { formatDateWithString, formatDate } from "../lib/index";

describe("utils service test", () => {
  test("should return mm/dd/yyyy format", () => {
    expect(formatDateWithString(new Date("May 15, 2021"), "mm/dd/yyyy")).toBe(
      "05/15/2021"
    );
  });
  test("should return mm/dd/yyyy format", () => {
    expect(
      formatDateWithString(new Date("December 31, 1999"), "mm/dd/yyyy")
    ).toBe("12/31/1999");
  });
  test("should return dd-mm/yyyy", () => {
    expect(
      formatDateWithString(new Date("December 31, 1999"), "dd-mm/yyyy")
    ).toBe("31-12/1999");
  });
  test("should return dd MM, yyyy", () => {
    expect(
      formatDateWithString(new Date("December 31, 1999"), "dd MM, yyyy")
    ).toBe("31 December, 1999");
  });
  test("should return dd/mm/yyyy", () => {
    expect(
      formatDateWithString(new Date("December 31, 1999"), "dd MM dd, yyyy")
    ).toBe("31 December 31, 1999");
  });
  test("should return d/mm/yyyy", () => {
    expect(
      formatDateWithString(new Date("December 31, 1999"), "dd MM dd, yyyy")
    ).toBe("31 December 31, 1999");
  });
  test("should return dd/mm/yyyy", () => {
    expect(
      formatDateWithString(new Date("May 27, 2021"), "DD MM dd, yyyy")
    ).toBe("Thursday May 27, 2021");
  });
});
