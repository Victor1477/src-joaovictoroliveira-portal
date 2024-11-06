import { Logger } from "../../src/app/logger";
import { it, expect, beforeEach } from "vitest";

let logger: Logger;

beforeEach(() => {
  logger = new Logger();
});

it("Should instanciate logger with the results defined", () => {
  const results = logger.results;
  expect(results.startDate).match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
  expect(results.requestCounter).toEqual({});
});

it("Should add path to results request counter equal to 1 when it doesn't exist yet", () => {
  const testUrl = "/test";
  logger.plus(testUrl);
  expect(logger.results.requestCounter[testUrl]).toBe(1);
});

it("Should increase path request counter by one", () => {
  const testUrl = "/test";
  logger.plus(testUrl);
  logger.plus(testUrl);
  expect(logger.results.requestCounter[testUrl]).toBe(2);
});
