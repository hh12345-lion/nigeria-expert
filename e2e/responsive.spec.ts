import { test, expect, type Page } from "@playwright/test";

const ROUTES = ["/", "/services", "/contact", "/countries/nigeria"];

async function assertNoHorizontalOverflow(page: Page) {
  const overflow = await page.evaluate(() => {
    const doc = document.documentElement;
    return doc.scrollWidth > doc.clientWidth + 1;
  });
  expect(overflow, "page should not scroll horizontally").toBe(false);
}

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    const now = new Date();
    const expires = new Date(now);
    expires.setDate(expires.getDate() + 365);
    localStorage.setItem(
      "aew_cookie_consent_v1",
      JSON.stringify({
        version: 1,
        savedAt: now.toISOString(),
        expiresAt: expires.toISOString(),
        choices: { necessary: true, analytics: true, marketing: true, preferences: true },
      }),
    );
  });
});

for (const route of ROUTES) {
  test(`no horizontal overflow on ${route}`, async ({ page }) => {
    await page.goto(route, { waitUntil: "networkidle" });
    await assertNoHorizontalOverflow(page);
    await expect(page.locator("h1").first()).toBeVisible();
  });
}

test("404 page has no horizontal overflow", async ({ page }) => {
  await page.goto("/this-page-does-not-exist-404", { waitUntil: "networkidle" });
  await assertNoHorizontalOverflow(page);
  await expect(page.getByRole("heading", { name: /page not found/i })).toBeVisible();
});

test("mobile menu opens and navigates", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile");
  await page.goto("/");
  await page.locator('label[for="mobile-nav-toggle"]').click();
  const mobileMenu = page.locator("#mobile-menu");
  await expect(mobileMenu).toBeVisible();
  await mobileMenu.getByRole("link", { name: "How to Instruct" }).click();
  await expect(page).toHaveURL(/\/how-to-instruct/);
});

test("desktop shows main navigation at 1024px+", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop");
  await page.goto("/");
  await expect(page.getByRole("navigation", { name: "Main" })).toBeVisible();
  await expect(page.locator('label[for="mobile-nav-toggle"]')).toBeHidden();
});

test("tablet uses hamburger menu below 1024px", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "tablet");
  await page.goto("/");
  await expect(page.locator('label[for="mobile-nav-toggle"]')).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Main" })).toBeHidden();
});

test("no horizontal overflow at 320px width", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile");
  await page.setViewportSize({ width: 320, height: 568 });
  await page.goto("/");
  await assertNoHorizontalOverflow(page);
});

test("services tables use scroll container on mobile", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile");
  await page.goto("/services");
  await expect(page.locator("table").first()).toBeVisible();
  await expect(page.locator(".table-scroll").first()).toBeVisible();
});
