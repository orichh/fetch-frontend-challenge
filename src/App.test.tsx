import puppeteer from "puppeteer";

import "@testing-library/jest-dom/extend-expect";

it("runs simple test to make sure tests are working", () => {
  expect(5).toBe(5);
});

describe("App.js", () => {
  let browser: any;
  let page: any;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true, slowMo: 100 });
    page = await browser.newPage();
  });

  it("contains the welcome text", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector(".App");
    const text = await page.$eval(".App", (e: any) => e.textContent);
    expect(text).toContain("sign up");
  });

  it("navigates to the sign up page", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector(".App");
    await page.click("#signup-link");
    await page.waitForSelector("#signup");

    const newtest = await page.$eval(".App", (e: any) => e.textContent);
    expect(newtest).toContain("Create your free account");
  });
  afterAll(() => browser.close());
});
