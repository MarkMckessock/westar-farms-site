import { test, expect } from '@playwright/test'

test.describe('Phase 4 — Polish & QA', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  // ── Skip-to-content ──────────────────────────────────────────────────────

  test('skip-to-content link exists and targets #main-content', async ({ page }) => {
    const skip = page.getByRole('link', { name: 'Skip to main content' })
    await expect(skip).toBeAttached()
    await expect(skip).toHaveAttribute('href', '#main-content')
  })

  test('main element has id="main-content"', async ({ page }) => {
    const main = page.locator('main#main-content')
    await expect(main).toBeAttached()
  })

  test('skip-to-content link is focusable via keyboard', async ({ page, viewport }) => {
    if (!viewport || viewport.width < 1024) return
    await page.keyboard.press('Tab')
    const skip = page.getByRole('link', { name: 'Skip to main content' })
    await expect(skip).toBeFocused()
  })

  // ── Landmark roles ────────────────────────────────────────────────────────

  test('page has exactly one <main>', async ({ page }) => {
    const mains = page.locator('main')
    await expect(mains).toHaveCount(1)
  })

  test('page has a <header>', async ({ page }) => {
    await expect(page.locator('header')).toBeAttached()
  })

  test('page has a <footer>', async ({ page }) => {
    await expect(page.locator('footer')).toBeAttached()
  })

  // ── Heading hierarchy ─────────────────────────────────────────────────────

  test('each section has at most one h2', async ({ page }) => {
    const sections = page.locator('section')
    const count = await sections.count()
    for (let i = 0; i < count; i++) {
      const section = sections.nth(i)
      const h2s = section.locator('h2')
      const h2Count = await h2s.count()
      expect(h2Count).toBeLessThanOrEqual(1)
    }
  })

  // ── Scroll spy / aria-current ─────────────────────────────────────────────

  test('desktop: Home nav item has aria-current="page" on load', async ({ page, viewport }) => {
    if (!viewport || viewport.width < 1024) return
    const mainNav = page.getByRole('navigation', { name: 'Main navigation' })
    const homeLink = mainNav.getByRole('link', { name: 'Home', exact: true })
    await expect(homeLink).toHaveAttribute('aria-current', 'page')
  })

  test('desktop: Shows nav item gets aria-current after scrolling to shows section', async ({ page, viewport }) => {
    if (!viewport || viewport.width < 1024) return
    await page.evaluate(() => {
      const el = document.getElementById('shows')
      el?.scrollIntoView()
    })
    await page.waitForTimeout(200)
    const mainNav = page.getByRole('navigation', { name: 'Main navigation' })
    const showsLink = mainNav.getByRole('link', { name: 'Shows', exact: true })
    await expect(showsLink).toHaveAttribute('aria-current', 'page')
  })

  // ── Lazy loading ───────────────────────────────────────────────────────────

  test('below-fold images have loading="lazy"', async ({ page }) => {
    // News, partners, about, and competitor resource images are lazy
    const lazyImgs = page.locator('img[loading="lazy"]')
    const count = await lazyImgs.count()
    expect(count).toBeGreaterThan(0)
  })

  test('hero image is not lazy (above the fold)', async ({ page }) => {
    const hero = page.locator('[data-testid="section-hero"] img').first()
    if (await hero.count() === 0) return // hero uses CSS background — skip
    await expect(hero).not.toHaveAttribute('loading', 'lazy')
  })

  // ── Image alt text ─────────────────────────────────────────────────────────

  test('decorative photo card images have empty alt=""', async ({ page }) => {
    // Photo banner wrappers in section content are aria-hidden with alt=""
    // (excludes mobile nav panel logo which is aria-hidden when closed but has real alt)
    const decorative = page.locator('section [aria-hidden="true"] img')
    const count = await decorative.count()
    for (let i = 0; i < count; i++) {
      const alt = await decorative.nth(i).getAttribute('alt')
      expect(alt).toBe('')
    }
  })

  // ── Responsive: layout at key breakpoints ──────────────────────────────────

  test('mobile: hamburger button is visible', async ({ page, viewport }) => {
    if (!viewport || viewport.width >= 1024) return
    const hamburger = page.getByTestId('hamburger')
    await expect(hamburger).toBeVisible()
  })

  test('mobile: desktop nav is hidden', async ({ page, viewport }) => {
    if (!viewport || viewport.width >= 1024) return
    const mainNav = page.getByRole('navigation', { name: 'Main navigation' })
    await expect(mainNav).toBeHidden()
  })

  test('desktop: hamburger button is not visible', async ({ page, viewport }) => {
    if (!viewport || viewport.width < 1024) return
    const hamburger = page.getByTestId('hamburger')
    await expect(hamburger).toBeHidden()
  })

  // ── GitHub Pages assets ───────────────────────────────────────────────────

  test('.nojekyll file exists in public', async () => {
    const fs = await import('fs')
    const exists = fs.existsSync('public/.nojekyll')
    expect(exists).toBe(true)
  })
})
