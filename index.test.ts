import { expect, test } from "bun:test";
import { checkIfFlixhqClone } from "./functions";

test("Check FlixHQ.to (is clone)", async () => {
  expect(await checkIfFlixhqClone(new URL("https://flixhq.to"))).toBe(true);
});

test("Check Google.com (is not clone)", async () => {
  expect(await checkIfFlixhqClone(new URL("https://google.com"))).toBe(false);
});
