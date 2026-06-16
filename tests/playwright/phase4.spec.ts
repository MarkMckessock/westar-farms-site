import { test, expect } from '@playwright/test'

test.describe('Phase 4 — Polish & QA', () => {
  // ── Skip-to-content ──────────────────────────────────────────────────────

  test('skip-to-content link exists and targets #main-content', async ({ page }) => {
    await page.goto('/')
    const skip = page.getByRole('link', { name: 'Skip to main content' })
    await expect(skip).toBeAttached()
    await expect(skip).toHaveAttribute('href', '#main-content')
  })

  test('main element has id="main-content"', async ({ page }) => {
    await page.goto('/')
    const main = page.locator('main#main-content')
    await expect(main).toBeAttached()
  })

  test('skip-to-content link is focusable via keyboard', async ({ page, viewport }) => {
    if (!viewport || viewport.width < 1024) return
    await page.goto('/')
    await page.keyboard.press('Tab')
    const skip = page.getByRole('link', { name: 'Skip to main content' })
    await expect(skip).toBeFocused()
  })

  // ── Landmark roles ────────────────────────────────────────────────────────

  test('page has exactly one <main>', async ({ page }) => {
    await page.goto('/')
    const mains = page.locator('main')
    await expect(mains).toHaveCount(1)
  })

  test('page has a <header>', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('header')).toBeAttached()
  })

  test('page has a <footer>', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('footer')).toBeAttached()
  })

  // ── Route-based aria-current ─────────────────────────────────────────────

  test('desktop: Home nav item has aria-current="page" on home route', async ({ page, viewport }) => {
    if (!viewport || viewport.width < 1024) return
    await page.goto('/')
    const mainNav = page.getByRole('navigation', { name: 'Main navigation' })
    const homeBtn = mainNav.getByRole('button', { name: 'Home', exact: true })
    await expect(homeBtn).toHaveAttribute('aria-current', 'page')
  })

  test('desktop: Shows nav item has aria-current="page" on shows route', async ({ page, viewport }) => {
    if (!viewport || viewport.width < 1024) return
    await page.goto('/#/shows')
    const mainNav = page.getByRole('navigation', { name: 'Main navigation' })
    const showsBtn = mainNav.getByRole('button', { name: 'Shows', exact: true })
    await expect(showsBtn).toHaveAttribute('aria-current', 'page')
  })

  test('desktop: Home nav item loses aria-current when navigating away', async ({ page, viewport }) => {
    if (!viewport || viewport.width < 1024) return
    await page.goto('/#/about')
    const mainNav = page.getByRole('navigation', { name: 'Main navigation' })
    const homeBtn = mainNav.getByRole('button', { name: 'Home', exact: true })
    await expect(homeBtn).not.toHaveAttribute('aria-current', 'page')
  })

  // ── Page headers ───────────────────────────────────────────────────────────

  test('each sub-page has an h1 with the expected title', async ({ page }) => {
    const pages: [string, RegExp][] = [
      ['/#/shows', /Our Show Series/i],
      ['/#/calendar', /2026 Show Season/i],
      ['/#/news', /News & Events/i],
      ['/#/partners', /Our Partners/i],
      ['/#/about', /About Westar Farms/i],
      ['/#/contact', /Get in Touch/i],
    ]
    for (const [route, titlePattern] of pages) {
      await page.goto(route)
      await expect(page.locator('h1').first()).toContainText(titlePattern)
    }
  })

  // ── Lazy loading ───────────────────────────────────────────────────────────

  test('below-fold images have loading="lazy"', async ({ page }) => {
    await page.goto('/#/shows')
    const lazyImgs = page.locator('img[loading="lazy"]')
    const count = await lazyImgs.count()
    expect(count).toBeGreaterThan(0)
  })

  // ── Image alt text ─────────────────────────────────────────────────────────

  test('decorative photo card images have empty alt=""', async ({ page }) => {
    await page.goto('/#/shows')
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
    await page.goto('/')
    const hamburger = page.getByTestId('hamburger')
    await expect(hamburger).toBeVisible()
  })

  test('mobile: desktop nav is hidden', async ({ page, viewport }) => {
    if (!viewport || viewport.width >= 1024) return
    await page.goto('/')
    const mainNav = page.getByRole('navigation', { name: 'Main navigation' })
    await expect(mainNav).toBeHidden()
  })

  test('desktop: hamburger button is not visible', async ({ page, viewport }) => {
    if (!viewport || viewport.width < 1024) return
    await page.goto('/')
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
