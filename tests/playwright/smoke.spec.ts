import { test, expect } from '@playwright/test'

test.describe('Navbar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('renders the navbar', async ({ page }) => {
    await expect(page.getByTestId('navbar')).toBeVisible()
  })

  test('shows logo', async ({ page }) => {
    await expect(page.getByRole('button', { name: /westar farms home/i })).toBeVisible()
  })

  test('desktop: shows all nav items', async ({ page, viewport }) => {
    if (!viewport || viewport.width < 1024) return
    const mainNav = page.getByRole('navigation', { name: 'Main navigation' })
    for (const label of ['Home', 'Shows', 'Calendar', 'News', 'Partners', 'About Us', 'Contact']) {
      await expect(mainNav.getByText(label).first()).toBeVisible()
    }
  })

  test('mobile: hamburger is visible and opens menu', async ({ page, viewport }) => {
    if (!viewport || viewport.width >= 1024) return
    const hamburger = page.getByTestId('hamburger')
    await expect(hamburger).toBeVisible()
    await hamburger.click()
    await expect(page.getByTestId('mobile-menu')).toBeVisible()
    await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible()
  })

  test('desktop: Shows dropdown opens on hover', async ({ page, viewport }) => {
    if (!viewport || viewport.width < 1024) return
    const mainNav = page.getByRole('navigation', { name: 'Main navigation' })
    await mainNav.getByText('Shows').hover()
    await expect(page.getByRole('button', { name: 'Trillium-Bronze Hunter Jumper' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Dressage', exact: true })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Development', exact: true })).toBeVisible()
  })

  test('becomes solid white background after scroll', async ({ page, viewport }) => {
    if (!viewport || viewport.width < 1024) return
    await page.evaluate(() => window.scrollTo(0, 200))
    await page.waitForTimeout(400)
    const navbar = page.getByTestId('navbar')
    await expect(navbar).toHaveClass(/bg-white/)
  })

  test('clicking a nav item navigates to the correct page', async ({ page, viewport }) => {
    if (!viewport || viewport.width < 1024) return
    const mainNav = page.getByRole('navigation', { name: 'Main navigation' })
    await mainNav.getByRole('button', { name: 'Shows', exact: true }).click()
    await expect(page.getByTestId('section-shows')).toBeVisible()
  })
})

test.describe('Footer', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('renders footer with contact info', async ({ page }) => {
    const footer = page.getByTestId('footer')
    await expect(footer).toBeVisible()
    await expect(footer.getByText('(613) 253-0078')).toBeVisible()
    await expect(footer.getByText('info@westarfarms.ca')).toBeVisible()
    await expect(footer.getByText('Ashton, Ontario, K0A 1B0')).toBeVisible()
  })

  test('footer has social links', async ({ page }) => {
    const footer = page.getByTestId('footer')
    await expect(footer.getByRole('link', { name: /facebook/i })).toBeVisible()
    await expect(footer.getByRole('link', { name: /instagram/i })).toBeVisible()
  })

  test('footer quick links are present', async ({ page }) => {
    const footer = page.getByTestId('footer')
    for (const label of ['Home', 'Shows', 'Calendar', 'About Us', 'Contact']) {
      await expect(footer.getByRole('link', { name: label })).toBeVisible()
    }
  })
})

test.describe('Page structure', () => {
  test('home page renders hero section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByTestId('section-home')).toBeVisible()
  })

  test('each top-level route renders a page header', async ({ page }) => {
    for (const route of ['/#/shows', '/#/calendar', '/#/news', '/#/partners', '/#/about', '/#/contact']) {
      await page.goto(route)
      await expect(page.locator('h1').first()).toBeVisible()
    }
  })

  test('no horizontal scroll at any breakpoint', async ({ page }) => {
    await page.goto('/')
    const scrollWidth = await page.evaluate(() => document.body.scrollWidth)
    const viewportWidth = page.viewportSize()!.width
    expect(scrollWidth).toBeLessThanOrEqual(viewportWidth)
  })

  test('View Our Shows CTA navigates to shows page', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'View Our Shows' }).click()
    await expect(page.getByTestId('section-shows')).toBeVisible()
  })
})
