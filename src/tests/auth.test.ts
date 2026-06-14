import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("Api-Key", () => {
  test("Api-key 1", () => {
    expect(getAPIKey({ authorization: "ApiKey hello" })).toBe("hello");
  });
  test("Api-key Erroed", () => {
    expect(getAPIKey({})).toBe(null);
  });
  test("Api-key Empty Field", () => {
    expect(getAPIKey({ authorization: "" })).toBe(null);
  });
});
