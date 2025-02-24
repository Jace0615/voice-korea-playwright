import { test, expect } from "@playwright/test";
import { chromium } from "playwright";
import {
  latency,
  email,
  password,
  google_password,
  screenshot_path,
} from "./constants";
import path from "path";

test.describe.serial("Account", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://voice-korea.dev.biyard.co/");
    await page.waitForTimeout(latency);
  });

  test("[ACCOUNT-001] account-login", async ({ page }) => {
    await page
      .getByPlaceholder('이메일').fill(email);
    await page.waitForTimeout(latency);
    await page.getByPlaceholder('비밀번호').fill(password);
    await page.screenshot({
      path: screenshot_path("account", "account-log-in", "1-fill-the-login-form"),
      fullPage: true,
    });
    await page
    .getByRole("button", { name:"로그인"})
    .click();
    await page.waitForLoadState()
    await page.screenshot({
      path: screenshot_path("account", "account-log-in", "2-check-the-login-status"),
      fullPage: true,
    });
    await expect(page)
    .toHaveURL('https://voice-korea.dev.biyard.co/ko/dashboard');
    console.log('Test passed: User successfully log-in.');
  });
});