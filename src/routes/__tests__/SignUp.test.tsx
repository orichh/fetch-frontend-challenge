import puppeteer from "puppeteer";

import "@testing-library/jest-dom/extend-expect";

it("runs simple test to make sure tests are working", () => {
  expect(5).toBe(5);
});

describe("Make sure signup page form working as expected", () => {
  let browser: any;
  let page: any;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
  });

  it("alerts user to complete all fields", async () => {
    page.on("dialog", async (dialog: any) => {
      expect(dialog.message()).toBe("Please fill out each field");
      await dialog.dismiss();
    });
    page.goto("http://localhost:3000/signup");
    await page.waitForSelector("#signup");
    await page.click("#form-submit-button");
    expect("sign up").toContain("sign up");
  });

  afterAll(() => browser.close());
});
